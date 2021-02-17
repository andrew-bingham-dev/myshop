import React, { useEffect, useState } from 'react';
import { db } from '../apis/firebase';

import Product from '../components/Product';

const ProductsScreen = () => {
	const allProducts = [];
	const [products, setProducts] = useState([]);

	const getAllProductsFromFirebase = async () => {
		const productsRef = db.collection('products');
		const snapshot = await productsRef.get();
		snapshot.forEach(doc => {
			allProducts.push(doc.data());
		});

		setProducts(allProducts);
	};

	useEffect(() => {
		getAllProductsFromFirebase();
	}, []);

	return (
		<>
			<div className='mx-auto px-4 max-w-4xl grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
				{products.map(product => (
					<Product
						key={product.name}
						name={product.name}
						description={product.description}
						price={`£${product.price}`}
					/>
				))}
			</div>
		</>
	);
};

export default ProductsScreen;
