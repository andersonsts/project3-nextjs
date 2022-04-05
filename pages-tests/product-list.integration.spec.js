import { screen, render } from '@testing-library/react';
import ProductList from '../pages';

jest.mock('../components/product-card', () => ({
  __esModule: true,
  default: () => <div>product-card</div>,
}));

describe('ProductList', () => {
  it('should render ProductList', () => {
    render(<ProductList />);

    expect(screen.getByTestId('product-list')).toBeInTheDocument();
  });
});
