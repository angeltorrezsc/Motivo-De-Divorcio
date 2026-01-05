import React from 'react';
import rawProducts from '../../data/productos.json';
import ProductSearch from '../../components/ProductSearch';
import { mapRawProducts } from '../../lib/transform';
import { validateData, shouldValidateAtRuntime } from '../../lib/validate';

if (shouldValidateAtRuntime()) validateData('productos.json', rawProducts, { throwOnError: true });

export default function ProductosPage() {
  const products = mapRawProducts(rawProducts);
  return (
    <section>
      <h1>Productos</h1>
      <ProductSearch products={products} />
    </section>
  );
}
