import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import UserButton from './UserButton';
import LogoutButton from './LogoutButton';
import LoginButton from './LoginButton';
import SignupButton from './SignupButton';

const MobileMenuButton = () => {
	const user = useSelector(state => state.user);
	const [menuIsOpen, setMenuIsOpen] = useState(false);

	function handleMenuClick() {
		if (menuIsOpen) {
			setMenuIsOpen(false);
		} else {
			setMenuIsOpen(true);
		}
		console.log(user.id);
	}

	function menuOptionsList() {
		return (
			<>
				<ul className='absolute box-border left-0 bg-gray-400 text-gray-800 rounded-xl p-4 w-full'>
					{user.id ? (
						<>
							<li>
								<UserButton name={user.name} />
							</li>
							<li>
								<LogoutButton />
							</li>
						</>
					) : (
						<>
							<li>
								<LoginButton />
							</li>
							<li>
								<SignupButton />
							</li>
						</>
					)}
				</ul>
			</>
		);
	}

	return (
		<>
			<button className='border-2 p-2 rounded-xl' onClick={handleMenuClick}>
				Menu
			</button>
			{menuIsOpen && menuOptionsList()}
		</>
	);
};

export default MobileMenuButton;
