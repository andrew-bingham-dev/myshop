import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import CartItem from '../components/CartItem';

const CartScreen = () => {
	const cart = useSelector(state => state.cart);
	const [cartTotal, setCartTotal] = useState(0.0);

	function displayCartItems() {
		if (cart.length > 0) {
			return cart.map(item => {
				return (
					<CartItem
						key={item.productId}
						id={item.productId}
						name={item.name}
						price={item.price}
						qty={item.qty}
					/>
				);
			});
		} else {
			return <h2 className='text-center text-2xl p-4'>Your cart is empty</h2>;
		}
	}

	useEffect(() => {
		let total = 0;
		cart.forEach(item => {
			total += item.price * item.qty;
		});
		setCartTotal(total);
	}, [cart]);

	return (
		<>
			<div className='max-w-xl mx-auto'>
				<div className='flex flex-col justify-center'>{displayCartItems()}</div>
				<div className='flex rounded-xl bg-gray-700 m-2 justify-center'>
					<div className='p-2 text-gray-200 my-2 mx-4 font-bold text-2xl tracking-wider'>
						Total £{cartTotal.toFixed(2)}
					</div>
					<button className='p-2 bg-gray-200 rounded-xl my-2 mx-4 font-medium hover:bg-yellow-600 hover:text-gray-200'>
						Go to checkout
					</button>
				</div>
			</div>
		</>
	);
};

export default CartScreen;
