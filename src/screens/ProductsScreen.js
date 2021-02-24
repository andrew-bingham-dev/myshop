import React, { useEffect, useState } from 'react';
import { db } from '../apis/firebase';

import Product from '../components/Product';

const ProductsScreen = () => {
	const allProducts = [];
	const [products, setProducts] = useState([]);

	const getAllProductsFromFirebase = async () => {
		let productsRef = db.collection('products');
		let snapshot = await productsRef.get();
		snapshot.forEach(doc => {
			allProducts.push(doc);
		});

		setProducts(allProducts);
	};

	useEffect(() => {
		getAllProductsFromFirebase();
	}, []);

	return (
		<>
			<div className='mx-auto px-4 max-w-7xl grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4'>
				{products.map(product => (
					<Product
						key={product.id}
						id={product.id}
						name={product.data().name}
						description={product.data().description}
						price={product.data().price}
					/>
				))}
			</div>
		</>
	);
};

export default ProductsScreen;
