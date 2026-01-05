# Catálogo estático — Next.js (Export) + WhatsApp

Resumen rápido
- Sitio estático creado con Next.js (App Router). Datos servidos dinámicamente desde **Cloudflare R2**.
- Pedidos y consultas por WhatsApp (link generado desde frontend). No hay pagos ni streaming en fichas.

Requisitos
- Node 18+, npm

Scripts
```bash
npm install
npm run dev      # desarrollo
npm run build    # build (next build)
npm run export   # build + export to `out/`
npm run test     # run unit tests (vitest)
```

Variables de configuración (opcional, en GitHub Actions o .env durante build)
- `PHONE_NUMBER` — número internacional sin símbolos (p. ej. `59171234567`).
- `TIMEZONE` — por defecto `America/La_Paz`.
- `SITE_TITLE`, `SITE_OWNER`, `CONTACT_EMAIL` — opcionales.
- `NEXT_PUBLIC_API_URL` — URL del Worker (ej. `https://api.tusitio.com`).

Estructura relevante
- `app/` — rutas (Home, productos, peliculas, calendario, servicios)
- `components/` — `WhatsAppButton`, `ProductCard`, `MovieCard`, `CalendarWeek`, `Header`, `Footer`
- `lib/` — utilidades (`whatsapp.ts`, `calendar.ts`, `types.ts`)
- `data/` — JSON editables (administración por PR)
- `public/img/` — imágenes públicas
- `workers/` — Cloudflare Worker para API.
- `infrastructure/` — Configuración de Wrangler.

Datos y administración
- Edita `/data/*.json` y abre un Pull Request. Esto es la forma recomendada de administrar el catálogo.
- Opcional: crear una UI admin estática que use la API de GitHub para crear PRs (requiere token y seguridad).

WhatsApp
- Mensajes predefinidos se generan en `lib/whatsapp.ts`. `components/WhatsAppButton.tsx` crea enlaces `https://wa.me/<phone>?text=<message>`.

Deploy a GitHub Pages (autodeploy)
1. Crear repo y push de la rama `main`.
2. Workflow incluido `.github/workflows/deploy.yml` genera `out/` con `next export` y publica `out/` a `gh-pages`.
3. En GitHub: Settings → Pages → seleccionar branch `gh-pages` (root) si hace falta.

## Configuración Cloudflare (R2 + Workers)

Para que la API dinámica funcione:

1. **Cloudflare R2**: Crear un bucket llamado `motivo-data` (o el nombre que elijas).
2. **Cloudflare Workers**: El deploy se hace automático con GitHub Actions.
3. **GitHub Secrets**: Configura en el repo:
   - `CF_API_TOKEN`: Token con permisos `Workers Scripts: Edit`, `R2: Edit`, `Account: Read`.
   - `CF_ACCOUNT_ID`: Tu ID de cuenta de Cloudflare.
   - `CF_R2_BUCKET`: Nombre del bucket (ej. `motivo-data`).
4. **DNS**: Si usas dominio propio, puedes configurar una ruta en Cloudflare para que `/api/*` apunte al Worker.

Cloudflare (DNS / CDN)
- Añadir registro CNAME apuntando a `<username>.github.io` o usar el dominio de GitHub Pages.
- Activar proxy (orange cloud) si se desea; habilitar HTTPS.
- Opcional: Workers / R2 si se necesitan assets o lógica adicional.

QA checklist
- Todas las fichas muestran título, imagen, estado y resumen.
- Botones WhatsApp abren chat con `PHONE_NUMBER` y mensaje correcto.
- Calendario muestra la semana activa con enlace sólo en la semana activa.
- Editar `data/*.json` y crear PR produce cambios visibles tras build.

Tests
- Unit tests para la lógica de calendario con `vitest` en `test/calendar.test.ts`.

Notas de seguridad
- No se procesan pagos ni datos sensibles.
- Validar y sanear contenido de JSON antes de mostrar en producción.
