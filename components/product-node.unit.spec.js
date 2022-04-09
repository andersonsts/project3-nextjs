import { render, screen } from '@testing-library/react';

import ProductNode from './product-node';

describe('ProductNode', () => {
  it('should render correctly', () => {
    render(
      <ProductNode products={[{ id: 1, image: '/img', title: 'title1', price: 'R$ 12.00' }]} />,
    );

    expect(screen.getByText('title1')).toBeInTheDocument();
  });

  it('should render "No products" message if has not products', () => {
    render(<ProductNode />);

    expect(screen.getByText('No Products')).toBeInTheDocument();
  });
});
