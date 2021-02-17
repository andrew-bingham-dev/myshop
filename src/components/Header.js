import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { userLogout } from '../redux/user/userActions';

const Header = () => {
	const user = useSelector(state => state.user);
	const dispatch = useDispatch();

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
				</Link>
				<button
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
					Signup
				</Link>
			</>
		);
	}

	function displayRegisterOptions() {}

	// component return
	return (
		<>
			<nav className='w-full bg-gray-700 text-gray-300 p-2 '>
				<div className='max-w-4xl flex justify-between items-center mx-auto px-4'>
					<div className='text-4xl my-auto pb-2 '>
						<Link className='hover:no-underline hover:text-gray-100' to='/'>
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
