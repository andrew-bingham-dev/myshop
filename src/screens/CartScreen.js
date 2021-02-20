import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import CartItem from '../components/CartItem';

const CartScreen = () => {
	const cart = useSelector(state => state.cart);
	const [cartTotal, setCartTotal] = useState(0.0);

	return (
		<>
			<div>
				{cart.map(item => {
					return (
						<CartItem id={item.productId} name={item.name} price={item.price} qty={item.qty} />
					);
				})}
			</div>
			<div className='flex rounded-xl bg-gray-700 mx-2 justify-center'>
				<div className='p-2 text-gray-200 my-2 mx-4 font-bold text-2xl'>
					Total £{cartTotal.toFixed(2)}
				</div>
				<button className='p-2 bg-gray-200 rounded-xl my-2 mx-4 font-medium hover:bg-yellow-600'>
					Go to checkout
				</button>
			</div>
		</>
	);
};

export default CartScreen;
