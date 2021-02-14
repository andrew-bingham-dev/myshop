import React from 'react';

import Product from '../components/Product';

const ProductsScreen = () => {
	return (
		<>
			<div className='mx-auto max-w-4xl grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4'>
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
		</>
	);
};

export default ProductsScreen;
