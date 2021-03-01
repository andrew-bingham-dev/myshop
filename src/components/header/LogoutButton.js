import React from 'react';
import { useDispatch } from 'react-redux';

import { userLogout } from '../../redux/user/userActions';

const LogoutButton = () => {
	const dispatch = useDispatch();

	return (
		<button
			className='inline-block text-left p-4 w-full md:w-max hover:no-underline hover:text-gray-100'
			onClick={() => {
				dispatch(userLogout());
			}}
		>
			Logout
		</button>
	);
};

export default LogoutButton;
