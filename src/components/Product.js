import React from 'react';

import './Product.css';

const Product = ({ title, description, price }) => {
	return (
		<>
			<div className='product'>
			<div className="product__title">{title}</div>
			<div className="product__description">{description}</div>
			<div className="product__price">{price}</div>
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
