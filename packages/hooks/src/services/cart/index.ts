// Services
import { DELETE, GET, POST, PATCH } from '@services/clientRequest';

// Constants
import { ROUTES } from '@repo/constants';

// Types
import { CartItemsResponse } from './type';

// Models
import type { ICartItem } from '@repo/models';

export const getCartItemList = async (userId: number) =>
  await GET<CartItemsResponse>(ROUTES.CART.GET_ALL(userId));

export const addToCart = async (
  productId: number,
  quantity: number,
  userId: number
) =>
  await POST<ICartItem>(ROUTES.CART.ADD(userId), {
    productId,
    quantity,
  });

export const deleteCartItem = async (id: number, userId: number) =>
  await DELETE(ROUTES.CART.deleteByProductId(id, userId));

export const updateCartItem = async (
  id: number,
  quantity: number,
  userId: number
) =>
  await PATCH<ICartItem>(ROUTES.CART.updateCartItem(id, userId), {
    quantity,
  });
