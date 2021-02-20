import React from 'react';
import PriceQuantityTotal from './PriceQuantityTotal';

const CartItem = ({ name, price, qty }) => {
	return (
		<div className='p-2 m-2 border-2 bg-gray-100 rounded-xl shadow-sm'>
			{name}
			<PriceQuantityTotal price={price} qty={qty} />
		</div>
	);
};

export default CartItem;
