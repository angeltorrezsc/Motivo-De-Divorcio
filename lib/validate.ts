import Ajv, { ValidateFunction, ErrorObject } from 'ajv';
import addFormats from 'ajv-formats';
import productosSchema from '../data/schemas/productos.schema.json';
import peliculasSchema from '../data/schemas/peliculas.schema.json';
import calendarioSchema from '../data/schemas/calendario.schema.json';
import serviciosSchema from '../data/schemas/servicios.schema.json';

const ajv = new Ajv({ allErrors: true, strict: false });
addFormats(ajv);

const validators: Record<string, ValidateFunction> = {
  'productos.json': ajv.compile(productosSchema as any),
  'peliculas.json': ajv.compile(peliculasSchema as any),
  'calendario.json': ajv.compile(calendarioSchema as any),
  'servicios.json': ajv.compile(serviciosSchema as any),
};

function formatAjvErrors(errors: ErrorObject[] | null | undefined) {
  if (!errors || errors.length === 0) return 'Unknown validation error';
  return errors
    .map((e) => {
      const field = e.instancePath ? e.instancePath.replace(/^\//, '') : '(root)';
      const message = e.message || '';
      return `- ${field}: ${message}`;
    })
    .join('\n');
}

export function validateData(filename: string, data: unknown, options?: { throwOnError?: boolean }) {
  const fn = validators[filename];
  if (!fn) throw new Error(`No schema validator for ${filename}`);
  const ok = fn(data);
  if (!ok) {
    const friendly = formatAjvErrors(fn.errors);
    const msg = `Validation failed for ${filename}:\n${friendly}`;
    if (options && options.throwOnError === false) {
      console.warn(msg);
      return false;
    }
    throw new Error(msg);
  }
  return true;
}

export function validateAll(dataDir: Record<string, unknown>, options?: { throwOnError?: boolean }) {
  for (const key of Object.keys(validators)) {
    if (dataDir[key]) validateData(key, dataDir[key], options);
  }
  return true;
}

export function shouldValidateAtRuntime() {
  // Validate in CI and development by default. Skip in production unless forced.
  if (process.env.FORCE_VALIDATE === 'true') return true;
  if (process.env.NODE_ENV !== 'production') return true;
  return false;
}
