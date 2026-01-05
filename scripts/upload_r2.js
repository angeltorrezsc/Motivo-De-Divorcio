const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const R2_BUCKET = process.env.R2_BUCKET;
const ACCOUNT_ID = process.env.ACCOUNT_ID;

if (!R2_BUCKET || !ACCOUNT_ID) {
  console.error('Error: R2_BUCKET and ACCOUNT_ID environment variables are required.');
  process.exit(1);
}

console.log(`Using Bucket: ${R2_BUCKET}`);

// 1. Upload Data JSONs
const dataFiles = [
  { src: 'data/products.json', dest: 'products.json' },
  { src: 'data/movies.json', dest: 'movies.json' },
  { src: 'data/calendar.json', dest: 'calendar.json' }
];

dataFiles.forEach(file => {
  if (fs.existsSync(file.src)) {
    console.log(`Uploading ${file.src} -> ${file.dest}...`);
    // Using wrangler r2 object put
    execSync(`npx wrangler r2 object put ${file.dest} --file=${file.src} --bucket=${R2_BUCKET} --account-id=${ACCOUNT_ID}`, { stdio: 'inherit' });
  } else {
    console.warn(`Warning: ${file.src} not found.`);
  }
});

// 2. Upload Images (public/img -> images/)
const imgDir = 'public/img';
if (fs.existsSync(imgDir)) {
  const images = fs.readdirSync(imgDir);
  images.forEach(img => {
    const src = path.join(imgDir, img);
    const dest = `images/${img}`;
    if (fs.statSync(src).isFile()) {
      console.log(`Uploading ${src} -> ${dest}...`);
      execSync(`npx wrangler r2 object put ${dest} --file=${src} --bucket=${R2_BUCKET} --account-id=${ACCOUNT_ID}`, { stdio: 'inherit' });
    }
  });
}
console.log('Upload complete.');