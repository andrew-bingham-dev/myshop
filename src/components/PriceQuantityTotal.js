import React from 'react';
import { useDispatch } from 'react-redux';

import { addToCart, removeFromCart } from '../redux/cart/cartActions';

const PriceQuantityTotal = ({ price, qty, id, name }) => {
	const dispatch = useDispatch();

	function handleRemoveItem() {
		dispatch(removeFromCart(id));
	}

	function handleAddItem() {
		dispatch(addToCart({ productId: id, name, price, qty: 1 }));
	}

	return (
		<div className='flex w-full justify-between mt-4 md:mt-8'>
			<div className='text-xs text-center'>
				Unit price
				<div className='border-2 border-gray-200 p-1 w-16 md:p-2 md:w-28 rounded-xl'>
					£{price.toFixed(2)}
				</div>
			</div>
			<div className='text-xs text-center'>
				Select quantity
				<div className='border-2 border-gray-200 rounded-xl px-1 md:px-2 items-center flex'>
					<button
						className='w-8 my-1 md:my-2 cursor-pointer rounded-xl font-medium text-gray-700 bg-gray-200 hover:bg-yellow-600 hover:text-gray-200'
						onClick={handleRemoveItem}
					>
						-
					</button>
					<input className='w-12 md:w-14 text-center rounded-xl mx-2' type='text' value={qty} />
					<button
						className='w-8 my-1 md:my-2 cursor-pointer  rounded-xl font-medium text-gray-700 bg-gray-200 hover:bg-yellow-600 hover:text-gray-200'
						onClick={handleAddItem}
					>
						+
					</button>
				</div>
			</div>
			<div className='text-xs text-center'>
				Total price
				<div className='border-2 border-gray-200 p-1 w-16 md:p-2 md:w-28 rounded-xl'>
					£{(price * qty).toFixed(2)}
				</div>
			</div>
		</div>
	);
};

PriceQuantityTotal.defaultProps = {
	price: 0,
	qty: 0,
};

export default PriceQuantityTotal;
