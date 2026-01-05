const fs = require('fs');
const path = require('path');
const Ajv = require('ajv');
const addFormats = require('ajv-formats');

const ajv = new Ajv({ allErrors: true, strict: false });
addFormats(ajv);

function loadJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

const schemaDir = path.join(__dirname, '..', 'data', 'schemas');
const dataDir = path.join(__dirname, '..', 'data');

const mappings = [
  { data: 'productos.json', schema: 'productos.schema.json' },
  { data: 'peliculas.json', schema: 'peliculas.schema.json' },
  { data: 'calendario.json', schema: 'calendario.schema.json' },
  { data: 'servicios.json', schema: 'servicios.schema.json' }
];

let ok = true;
for (const m of mappings) {
  const dataPath = path.join(dataDir, m.data);
  const schemaPath = path.join(schemaDir, m.schema);
  if (!fs.existsSync(dataPath)) {
    console.warn(`Skipping missing data file: ${m.data}`);
    continue;
  }
  if (!fs.existsSync(schemaPath)) {
    console.error(`Missing schema for ${m.data}: ${m.schema}`);
    ok = false;
    continue;
  }
  try {
    const data = loadJson(dataPath);
    const schema = loadJson(schemaPath);
    const validate = ajv.compile(schema);
    const valid = validate(data);
    if (!valid) {
      ok = false;
      console.error(`Validation errors for ${m.data}:`);
      for (const e of validate.errors || []) {
        const path = e.instancePath ? e.instancePath.replace(/^\//, '') : '(root)';
        console.error(` - ${path}: ${e.message}`);
      }
    } else {
      console.log(`OK: ${m.data}`);
    }
  } catch (err) {
    ok = false;
    console.error(`Failed validating ${m.data}: ${err.message}`);
  }
}

if (!ok) {
  console.error('Data validation failed.');
  process.exit(2);
}
console.log('All data validated.');
