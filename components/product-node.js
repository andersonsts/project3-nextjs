import ProductCard from '../components/product-card';
import { useCartStore } from '../store/cart';

const ProductNode = ({ products = [] }) => {
  const addToCart = useCartStore((store) => store.actions.add);

  if (!products.length) return <h4 data-testid="no-products">No Products</h4>;
  return products.map((product) => (
    <ProductCard key={product.id} product={product} addToCart={addToCart} />
  ));
};

export default ProductNode;
