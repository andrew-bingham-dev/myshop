import React from 'react';
import { Link } from 'react-router-dom';

const SignupButton = () => {
	return (
		<Link
			className='inline-block p-4 w-full md:w-max hover:no-underline hover:text-gray-100'
			to='/signup'
		>
			Sign-up
		</Link>
	);
};

export default SignupButton;
