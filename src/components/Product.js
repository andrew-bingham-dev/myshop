import React from 'react';

const Product = ({ title, description, price }) => {
	return (
		<>
			<div className='border-gray-300 bg-gray-100 shadow-sm w-full h-52 mt-4 p-2 rounded-md'>
				<div className='font-bold text-xl'>{title}</div>
				<div className=''>{description}</div>
				<div className=''>{price}</div>
			</div>
		</>
	);
};

Product.defaultProps = {
	title: 'Product Title',
	description: 'Product description',
	price: '£00.00',
};

export default Product;
