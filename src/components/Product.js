import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ id, name, description, price, history }) => {
	function handleAddToCart(e) {
		e.stopPropagation();
		// add to cart code
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
					<div className='self-center font-medium text-lg text-gray-700'>{price}</div>
					<button
						className='cursor-pointer ml-auto rounded-xl px-4 py-1 font-medium text-gray-700 bg-gray-200 hover:bg-yellow-600 hover:text-gray-200'
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
