import React from 'react';
import { Link } from 'react-router-dom';

const LoginButton = () => {
	return (
		<Link
			className='inline-block p-4 w-full md:w-max hover:no-underline hover:text-gray-100'
			to='/login'
		>
			Login
		</Link>
	);
};

export default LoginButton;
