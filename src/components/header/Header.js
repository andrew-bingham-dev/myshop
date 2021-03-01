import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { userLogout } from '../../redux/user/userActions';
import BrandButton from './BrandButton';
import CartButton from './CartButton';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import MobileMenuButton from './MobileMenuButton';
import SignupButton from './SignupButton';
import UserButton from './UserButton';

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

	function displayLoggedInOptions() {
		return (
			<>
				{/* these options will show or hide depending on screen width */}
				<CartButton items={totalCartItems} />
				<div className='hidden md:inline-block'>
					<UserButton name={user.name} />
					<LogoutButton />
				</div>
				<div className='inline-block md:hidden'>
					<MobileMenuButton />
				</div>
			</>
		);
	}

	function displayLoggedOutOptions() {
		return (
			<>
				<CartButton />
				<div className='hidden md:inline-block'>
					<LoginButton />
					<SignupButton />
				</div>
				<div className='inline-block md:hidden'>
					<MobileMenuButton />
				</div>
			</>
		);
	}

	function displayRegisterOptions() {}

	// component return
	return (
		<>
			<nav className='sticky -top-0 w-full bg-gray-700 text-gray-300 p-2'>
				{/* container */}
				<div className='max-w-7xl flex justify-between items-center mx-auto px-4'>
					{/* MyShop brand */}
					<div className=' '>
						<BrandButton />
					</div>
					{/* Other nav options */}
					<div className='p-2'>
						{user.id ? displayLoggedInOptions() : displayLoggedOutOptions()}
					</div>
				</div>
			</nav>
		</>
	);
};

export default Header;
