import React from 'react';
import PriceQuantityTotal from './PriceQuantityTotal';

const CartItem = ({ name, price, qty, id }) => {
	return (
		<div className='p-2 mx-1 mt-1 md:mx-2 md:mt-2 border-2 bg-gray-100 rounded-xl shadow-sm'>
			<h2 className='md:text-xl font-medium'>{name}</h2>
			<PriceQuantityTotal price={price} qty={qty} id={id} name={name} />
		</div>
	);
};

export default CartItem;
