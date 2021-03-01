import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CartFooter from '../components/CartFooter';

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
				<CartFooter total={cartTotal}/>
			</div>
		</>
	);
};

export default CartScreen;
