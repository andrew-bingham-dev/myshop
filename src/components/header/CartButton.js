import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CartButton = ({ items }) => {
	function handleMenuClick() {
		console.log('menu clicked');
	}

	return (
		<Link className='p-4 hover:no-underline hover:text-gray-100' to='/cart'>
			Cart
			{items > 0 ? ` (${items})` : ''}
		</Link>
	);
};

export default CartButton;
