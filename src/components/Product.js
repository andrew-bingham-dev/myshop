import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { addToCart } from '../redux/cart/cartActions';

const Product = ({ id, name, description, price }) => {
	const user = useSelector(state => state.user);
	const dispatch = useDispatch();

	function handleAddToCart(e) {
		e.stopPropagation();

		// if user is logged in, run addToCart, else, advise them to login
		if (user.id) {
			// add the item to the redux cart
			dispatch(addToCart({ productId: id, name: name, price: price, qty: 1 }));
		} else {
			alert('Please login to create an order');
		}
	}

	return (
		<>
			<div className='border-gray-300 bg-gray-100 shadow-sm h-full mt-4 p-2 rounded-md flex flex-col'>
				<Link className='hover:no-underline' to={`/product/${id}`}>
					<div
						className='cursor-pointer font-bold text-lg text-gray-700 hover:text-yellow-600'
						data-id={id}
					>
						{name}
					</div>
				</Link>
				<div className='mt-2 text-gray-700'>{description}</div>
				<div className='flex mt-auto'>
					<div className='self-center font-medium text-lg text-gray-700'>£{price.toFixed(2)}</div>
					<button
						className='ml-auto cursor-pointer  rounded-xl px-4 py-1 font-medium text-gray-700 bg-gray-200 hover:bg-yellow-600 hover:text-gray-200'
						onClick={handleAddToCart}
					>
						Add to cart
					</button>
				</div>
			</div>
		</>
	);
};

Product.defaultProps = {
	name: 'Product Title',
	description: 'Product description',
	price: '£00.00',
};

export default Product;
