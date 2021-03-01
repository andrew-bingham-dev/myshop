import React from 'react';
import { Link } from 'react-router-dom';

const BrandButton = () => {
	return (
		<Link
			className='text-2xl md:text-4xl my-auto pb-2 font-bold hover:no-underline hover:text-gray-100'
			to='/'
		>
			MyShop
		</Link>
	);
};

export default BrandButton;
