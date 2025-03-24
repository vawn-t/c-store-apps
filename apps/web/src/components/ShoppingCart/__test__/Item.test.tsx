import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Item from '../Item';
import * as hooks from '@repo/hooks';

// Mock the hooks
jest.mock('@repo/hooks', () => ({
  useCartItemDelete: jest.fn(),
  useCartItemUpdate: jest.fn(),
  useProductDetail: jest.fn(),
  useProductUnitList: jest.fn(),
}));

// Mock the UI components
jest.mock('@repo/ui', () => ({
  ...jest.requireActual('@repo/ui'),
  LoadingIndicator: () => <div data-testid="loading-indicator">Loading...</div>,
  MinusIcon: ({ onPress, style }) => (
    <button data-testid="minus-icon" onClick={onPress} style={style}>
      -
    </button>
  ),
  AddIcon: ({ onPress, style }) => (
    <button data-testid="add-icon" onClick={onPress} style={style}>
      +
    </button>
  ),
  Button: ({ children, onPress, style }) => (
    <button data-testid="remove-button" onClick={onPress} style={style}>
      {children}
    </button>
  ),
  Typography: ({ children }) => <span>{children}</span>,
  TypoVariant: {
    Paragraph1: 'paragraph1',
    Paragraph2: 'paragraph2',
  },
  FontWeight: {
    Medium: 'medium',
  },
  SizeType: {
    Small: 'small',
  },
  colors: {
    red: 'red',
  },
}));

// Mock useQueryClient
jest.mock('@tanstack/react-query', () => ({
  useQueryClient: () => ({
    invalidateQueries: jest.fn(),
  }),
}));

describe('Item Component', () => {
  const mockCartItem = {
    id: 1,
    productId: 2,
    quantity: 2,
    userId: 3,
  };

  const mockProduct = {
    id: 2,
    name: 'Apple',
    price: 1.99,
    image: '/apple.jpg',
    productUnitId: 1,
  };

  const mockProductUnits = [
    { id: 1, name: 'kg' },
    { id: 2, name: 'piece' },
  ];

  const mockUpdateCartItem = jest.fn();
  const mockDeleteCartItem = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    // Set up the mocks
    (hooks.useCartItemDelete as jest.Mock).mockReturnValue({
      mutateAsync: mockDeleteCartItem,
    });

    (hooks.useCartItemUpdate as jest.Mock).mockReturnValue({
      mutateAsync: mockUpdateCartItem,
    });

    (hooks.useProductDetail as jest.Mock).mockReturnValue({
      data: mockProduct,
      isLoading: false,
    });

    (hooks.useProductUnitList as jest.Mock).mockReturnValue({
      data: mockProductUnits,
    });
  });

  test('renders the component with product information', () => {
    render(<Item cartItem={mockCartItem} userId={3} />);

    expect(screen.getByText('Apple')).toBeInTheDocument();
    expect(screen.getByText('$1.99')).toBeInTheDocument();
    expect(screen.getByText('kg')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument(); // quantity
    expect(screen.getByTestId('remove-button')).toBeInTheDocument();
  });

  test('shows loading indicator when product is loading', () => {
    (hooks.useProductDetail as jest.Mock).mockReturnValue({
      data: null,
      isLoading: true,
    });

    render(<Item cartItem={mockCartItem} userId={3} />);

    expect(screen.getByTestId('loading-indicator')).toBeInTheDocument();
  });

  test('increases quantity when + button is clicked', async () => {
    render(<Item cartItem={mockCartItem} userId={3} />);

    const addButton = screen.getByTestId('add-icon');
    await userEvent.click(addButton);

    expect(mockUpdateCartItem).toHaveBeenCalledWith(
      { cartItemId: 1, quantity: 3 },
      expect.any(Object)
    );
  });

  test('decreases quantity when - button is clicked', async () => {
    render(<Item cartItem={mockCartItem} userId={3} />);

    const minusButton = screen.getByTestId('minus-icon');
    await userEvent.click(minusButton);

    expect(mockUpdateCartItem).toHaveBeenCalledWith(
      { cartItemId: 1, quantity: 1 },
      expect.any(Object)
    );
  });

  test('does not decrease quantity below 1', async () => {
    (hooks.useCartItemUpdate as jest.Mock).mockReturnValue({
      mutateAsync: mockUpdateCartItem,
    });

    const cartItemWithQuantityOne = {
      ...mockCartItem,
      quantity: 1,
    };

    render(<Item cartItem={cartItemWithQuantityOne} userId={3} />);

    const minusButton = screen.getByTestId('minus-icon');
    await userEvent.click(minusButton);

    expect(mockUpdateCartItem).not.toHaveBeenCalled();
  });

  test('removes item when remove button is clicked', async () => {
    render(<Item cartItem={mockCartItem} userId={3} />);

    const removeButton = screen.getByTestId('remove-button');
    await userEvent.click(removeButton);

    expect(mockDeleteCartItem).toHaveBeenCalledWith(1, expect.any(Object));
  });
});
