import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { userLogout } from '../redux/user/userActions';

const Header = () => {
	const user = useSelector(state => state.user);
	const cart = useSelector(state => state.cart);
	const [totalCartItems, setTotalCartItems] = useState(0);
	const dispatch = useDispatch();

	useEffect(() => {
		let totalItems = 0;
		if (cart.length > 0) {
			cart.forEach(item => {
				totalItems += item.qty;
			});
			setTotalCartItems(totalItems);
		} else {
			setTotalCartItems(0);
		}
	}, [cart]);

	function displayProductsOptions() {}

	function displayProductOptions() {}

	function displayCartOptions() {}

	function displayLoggedInOptions() {
		return (
			<>
				<Link className='hover:no-underline hover:text-gray-100' to='/account'>
					{user.name}
				</Link>
				<Link className='hover:no-underline hover:text-gray-100' to='/cart'>
					Cart
					{totalCartItems > 0 ? ` (${totalCartItems})` : ''}
				</Link>
				<button
					className='hover:no-underline hover:text-gray-100'
					onClick={() => {
						dispatch(userLogout());
					}}
				>
					Logout
				</button>
			</>
		);
	}

	function displayLoggedOutOptions() {
		return (
			<>
				<Link className='hover:no-underline hover:text-gray-100' to='/login'>
					Login
				</Link>
				<Link className='hover:no-underline hover:text-gray-100' to='/signup'>
					Sign-up
				</Link>
			</>
		);
	}

	function displayRegisterOptions() {}

	// component return
	return (
		<>
			<nav className='w-full bg-gray-700 text-gray-300 p-2 sticky'>
				<div className='max-w-7xl flex justify-between items-center mx-auto px-4'>
					<div className='text-4xl my-auto pb-2 '>
						<Link className='font-bold hover:no-underline hover:text-gray-100' to='/'>
							MyShop
						</Link>
					</div>
					<div className='p-2 space-x-4'>
						{user.id ? displayLoggedInOptions() : displayLoggedOutOptions()}
					</div>
				</div>
			</nav>
		</>
	);
};

export default Header;
