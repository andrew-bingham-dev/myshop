import React from 'react';

const Product = ({ name, description, price }) => {

	function handleAddToCart() {
		// add to cart code
	}

	function handleClickProduct() {

	}

	return (
		<>
			<div className='border-gray-300 bg-gray-100 shadow-sm h-full mt-4 p-2 rounded-md hover:bg-gray-200 cursor-pointer flex flex-col' onClick={handleClickProduct}>
				<div className='font-bold text-xl'>{name}</div>
				<div className='mt-2'>{description}</div>
				<div className='flex mt-auto'>
					<div className='self-center font-medium text-lg'>{price}</div>
					<button
						className='ml-auto border-2 rounded-xl px-4 py-1 text-gray-200 bg-gray-700 hover:bg-yellow-600'
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
