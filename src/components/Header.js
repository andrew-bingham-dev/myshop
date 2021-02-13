import React, { useSelector } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
	return (
		<>
			<nav className='header'>
				<div className='container'>
					<div className='header__brand'>
						<Link to='/'>MyShop</Link>
					</div>
					<div className='header__links'>
						<Link to='/login'>Login</Link>
						<Link to='/cart'>Cart</Link>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Header;
