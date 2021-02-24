import React from 'react';
import PriceQuantityTotal from './PriceQuantityTotal';

const CartItem = ({ name, price, qty, id }) => {
	return (
		<div className='p-2 m-2 border-2 bg-gray-100 rounded-xl shadow-sm'>
			<h2 className='text-xl font-medium'>{name}</h2>
			<PriceQuantityTotal price={price} qty={qty} id={id} name={name} />
		</div>
	);
};

export default CartItem;
