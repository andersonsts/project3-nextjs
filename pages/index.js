import { useFetchProducts } from '../hooks/use-fetch-products';
import ProductCard from '../components/product-card';
import Search from '../components/search';

const ProductNode = ({ products = [] }) => {
  if (!products.length) return <h4 data-testid="no-products">No Products</h4>;
  return products.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));
};

const ErrorMessage = () => {
  return <h4 data-testid="server-error">Server is down</h4>;
};

export default function Home() {
  const { products, error } = useFetchProducts();

  return (
    <main data-testid="product-list" className="my-8">
      <Search />
      <div className="container mx-auto px-6">
        <h3 className="text-gray-700 text-2xl font-medium">Wrist Watch</h3>
        <span className="mt-3 text-sm text-gray-500">200+ Products</span>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
          {error && <ErrorMessage error={error} />}
          {!error && <ProductNode products={products} />}
        </div>
      </div>
    </main>
  );
}
