import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { db } from '../apis/firebase';

import { addToCart } from '../redux/cart/cartActions';

const ProductScreen = ({ match }) => {
	const [productDetails, setProductDetails] = useState({});
	const user = useSelector(state => state.user);
	const dispatch = useDispatch();

	function handleAddToCart(e) {
		e.stopPropagation();

		// if user is logged in, run addToCart, else, advise them to login
		if (user.id) {
			// add the item to the redux cart
			dispatch(
				addToCart({
					productId: productDetails.id,
					name: productDetails.name,
					price: productDetails.price,
					qty: 1,
				})
			);
		} else {
			alert('Please login to create an order');
		}
	}

	async function getProductFromFirebase() {
		try {
			const responseFromGetProduct = await db.collection('products').doc(match.params.id).get();
			if (responseFromGetProduct) {
				setProductDetails({
					id: match.params.id,
					name: responseFromGetProduct.data().name,
					description: responseFromGetProduct.data().description,
					price: responseFromGetProduct.data().price,
					imageURL: responseFromGetProduct.data().imageURL,
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
		<div className='mx-auto max-w-xl shadow p-4 mt-4 md:p-10 rounded-xl md:mt-10 bg-gray-100'>
			<h2 className='font-bold text-2xl md:text-4xl text-gray-700 '>{productDetails.name}</h2>
			<p className='md:text-lg mt-4'>{productDetails.description}</p>
			<div className='flex flex-col mt-auto'>
				<img
					className='mt-4 max-h-72 object-contain'
					src={productDetails.imageURL}
					alt={productDetails.name}
				/>
				<div className='flex mt-8'>
					<div className='self-center font-medium text-lg text-gray-700'>
						£{productDetails?.price?.toFixed(2)}
					</div>
					<button
						className='ml-auto cursor-pointer  rounded-xl px-4 py-1 font-medium text-gray-700 bg-gray-200 hover:bg-yellow-600 hover:text-gray-200'
						onClick={handleAddToCart}
					>
						Add to cart
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProductScreen;
