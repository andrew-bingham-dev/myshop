import { CART_ADD_ITEM, CART_REMOVE_ITEM } from './cartConstants';

export const addToCart = productDetails => {
	return {
		type: CART_ADD_ITEM,
		payload: productDetails,
	};
};

export const removeFromCart = productId => {
	return {
		type: CART_REMOVE_ITEM,
		payload: productId,
	};
};
