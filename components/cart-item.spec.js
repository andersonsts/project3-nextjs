import { render, screen, fireEvent } from '@testing-library/react';

import CartItem from './cart-item';

const product = {
  title: 'Relógio bonito',
  price: '22.00',
  image:
    'https://images.unsplash.com/photo-1495856458515-0637185db551?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
};

const renderCartItem = () => {
  render(<CartItem product={product} />);
};

describe('CartItem', () => {
  it('should render CartItem', () => {
    renderCartItem();

    expect(screen.getByTestId('cart-item')).toBeInTheDocument();
  });

  it('should display proper content', () => {
    renderCartItem();

    const img = screen.getByRole('img', { name: product.title });

    expect(screen.getByText(product.title)).toBeInTheDocument();
    expect(
      screen.getByText(new RegExp(product.price, 'i')),
    ).toBeInTheDocument();
    expect(img).toBeInTheDocument();
    expect(img).toHaveProperty('src', product.image);
    expect(img).toHaveProperty('alt', product.title);
  });

  it('should display 1 as initial quantity', () => {
    renderCartItem();

    expect(screen.getByTestId('quantity').textContent).toBe('1');
  });

  it('should increase quantity by 1 when second button is clicked', () => {
    renderCartItem();

    const [, button] = screen.getAllByRole('button');

    fireEvent.click(button);

    expect(screen.getByTestId('quantity').textContent).toBe('2');
  });
});
