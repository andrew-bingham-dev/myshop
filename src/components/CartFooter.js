import React from 'react';

const CartFooter = ({ total }) => {
	return (
		<>
			<div className='sticky bottom-1 flex rounded-xl bg-gray-700 m-1 md:m-2 justify-center'>
				<div className='p-2 text-gray-200 my-2 mx-4 font-bold text-lg md:text-2xl tracking-wider'>
					Total £{total.toFixed(2)}
				</div>
				<button className='p-2 bg-gray-200 rounded-xl my-2 mx-4 font-medium hover:bg-yellow-600 hover:text-gray-200'>
					Go to checkout
				</button>
			</div>
		</>
	);
};

export default CartFooter;
