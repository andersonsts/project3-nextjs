import { useState, useEffect } from 'react';

import { useFetchProducts } from '../hooks/use-fetch-products';
import Search from '../components/search';
import ErrorMessage from '../components/error-message';
import ProductNode from '../components/product-node';

export default function Home() {
  const { products, error } = useFetchProducts();
  const [term, setTerm] = useState('');
  const [localProducts, setLocalProducts] = useState([]);

  useEffect(() => {
    if (term === '') setLocalProducts(products);
    setLocalProducts(
      products.filter(({ title }) => {
        return title.toLowerCase().includes(term.toLowerCase());
      }),
    );
  }, [products, term]);

  const productQuantity =
    localProducts.length === 1 ? `1 Product` : `${localProducts.length} Products`;

  return (
    <main data-testid="product-list" className="my-8">
      <Search doSearch={setTerm} />
      <div className="container mx-auto px-6">
        <h3 className="text-gray-700 text-2xl font-medium">Wrist Watch</h3>
        <span className="mt-3 text-sm text-gray-500">{productQuantity}</span>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
          {error && <ErrorMessage error={error} />}
          {!error && <ProductNode products={localProducts} />}
        </div>
      </div>
    </main>
  );
}
