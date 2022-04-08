import ProductCard from '../components/product-card';

const ProductNode = ({ products = [] }) => {
  if (!products.length) return <h4 data-testid="no-products">No Products</h4>;
  return products.map((product) => <ProductCard key={product.id} product={product} />);
};

export default ProductNode;
