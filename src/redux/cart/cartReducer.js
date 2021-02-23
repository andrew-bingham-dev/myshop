import { CART_ADD_ITEM, CART_REMOVE_ITEM } from './cartConstants';

const cartReducer = (state = [], action) => {
	let updatedCart = [];
	let itemFound = false;

	switch (action.type) {
		case CART_ADD_ITEM:
			// check cart is not empty
			if (state.length != 0) {
				// check if item already exists in the cart
				updatedCart = state.map(item => {
					if (item.productId === action.payload.productId) {
						// item does exist, so return it with updated quantity
						itemFound = true;
						return { ...item, qty: item.qty + action.payload.qty };
						// item does not match, so return it as it is
					} else {
						return { ...item };
					}
				});
				// if cart not empty and item not found, add it
				if (!itemFound) {
					updatedCart.push(action.payload);
				}
				// the cart is empty, so add the new item
			} else {
				updatedCart.push(action.payload);
			}
			return updatedCart;

		case CART_REMOVE_ITEM:
			updatedCart = state.map(item => {
				if (item.productId === action.payload) {
					if (item.qty > 0) {
						console.log('return: ', { ...item, qty: item.qty - 1 });
						return { ...item, qty: item.qty - 1 };
					} else {
						return item;
					}
				} else {
					return item;
				}
			});

			// remove any zero qty items
			return updatedCart.filter(item => item.qty > 0);

		default:
			return state;
	}
};

export default cartReducer;
