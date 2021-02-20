import { CART_ADD_ITEM } from './cartConstants';

export const addToCart = productDetails => {
	return {
		type: CART_ADD_ITEM,
		payload: productDetails,
	};
};
