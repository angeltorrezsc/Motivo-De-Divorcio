export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // CORS headers for fetching from GitHub Pages or other domains
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, HEAD, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    // Base route check
    if (!url.pathname.startsWith('/api/')) {
      return new Response('Not found', { status: 404, headers: corsHeaders });
    }

    const parts = url.pathname.replace(/^\/+/, '').split('/');
    // parts[0] === 'api', parts[1] === 'products'|'movies'|'calendar'
    const resource = parts[1];

    try {
      // 1. Try Edge Cache
      const cacheKey = new Request(url.toString(), request);
      const cache = caches.default;
      const cached = await cache.match(cacheKey);
      if (cached) return cached;

      // 2. Fetch from R2
      let filename;
      if (resource === 'products') filename = 'products.json';
      else if (resource === 'movies') filename = 'movies.json';
      else if (resource === 'calendar') filename = 'calendar.json';
      else return new Response('Resource not found', { status: 404, headers: corsHeaders });

      const obj = await env.R2_BUCKET.get(filename);
      if (!obj) return new Response('Data not found in R2', { status: 404, headers: corsHeaders });

      const raw = await obj.text();
      const list = JSON.parse(raw);

      // 3. Filter logic
      let body;
      if (parts.length === 2) {
        // List all: /api/products
        body = JSON.stringify(list);
      } else {
        // Single item: /api/products/some-slug
        const slug = parts[2];
        const item = list.find(i => i.slug === slug);
        if (!item) return new Response('Item not found', { status: 404, headers: corsHeaders });
        body = JSON.stringify(item);
      }

      // 4. Return response with Cache-Control
      const headers = {
        ...corsHeaders,
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=60, s-maxage=120'
      };
      const resp = new Response(body, { headers });

      // 5. Save to Edge Cache
      await cache.put(cacheKey, resp.clone());
      return resp;

    } catch (err) {
      return new Response('Internal Error: ' + err.message, { status: 500, headers: corsHeaders });
    }
  }
}