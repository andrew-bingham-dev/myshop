import React from 'react';

import Product from '../components/Product';
import './ProductScreen.css';

const ProductsScreen = () => {
	return (
		<>
			<div className='container'>
				<div className='product-screen'>
					<Product />
					<Product />
					<Product />
					<Product />
					<Product />
					<Product />
					<Product />
					<Product />
					<Product />
				</div>
			</div>
		</>
	);
};

export default ProductsScreen;
