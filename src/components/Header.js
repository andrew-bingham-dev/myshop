import React, { useSelector } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<>
			<nav className='w-full bg-gray-700 text-gray-300 p-2'>
				<div className='max-w-4xl flex justify-between items-center mx-auto'>
					<div className='text-4xl my-auto pb-2'>
						<Link to='/'>MyShop</Link>
					</div>
					<div className='p-2 space-x-4'>
						<Link to='/login'>Login</Link>
						<Link to='/cart'>Cart</Link>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Header;
