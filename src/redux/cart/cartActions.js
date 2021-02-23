import { CART_ADD_ITEM, CART_REMOVE_ITEM } from './cartConstants';

export const addToCart = productDetails => dispatch => {
	dispatch({
		type: CART_ADD_ITEM,
		payload: productDetails,
	});
};

export const removeFromCart = productId => dispatch => {
	dispatch({
		type: CART_REMOVE_ITEM,
		payload: productId,
	});
};
