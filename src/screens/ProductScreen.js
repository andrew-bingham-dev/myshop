import React, { useEffect, useState } from 'react';
import { db } from '../apis/firebase';

const ProductScreen = ({ match }) => {
	const [productDetails, setProductDetails] = useState({});

	async function getProductFromFirebase() {
		try {
			const responseFromGetProduct = await db.collection('products').doc(match.params.id).get();
			if (responseFromGetProduct) {
				setProductDetails({
					id: match.params.id,
					name: responseFromGetProduct.data().name,
					description: responseFromGetProduct.data().description,
					price: responseFromGetProduct.data().price,
				});
			}
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		getProductFromFirebase();
	}, []);

	return (
		<div className='mx-auto max-w-md shadow p-10 rounded-xl mt-10 bg-gray-100'>
			<h2 className='font-bold text-4xl text-gray-700 '>{productDetails.name}</h2>
			<p className='text-lg mt-4'>{productDetails.description}</p>
			<h3 className='mt-4 font-medium text-lg text-gray-700'>£{productDetails.price}</h3>
		</div>
	);
};

export default ProductScreen;
