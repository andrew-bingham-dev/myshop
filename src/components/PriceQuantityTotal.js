import React, { useState } from 'react';

const PriceQuantityTotal = ({ price, qty }) => {
	const [quantity, setQuantity] = useState(qty);

	return (
		<div className='flex w-full justify-between mt-8'>
			<div className='text-xs text-center'>
				Unit price
				<div className='border-2 border-gray-200 p-2 w-28 rounded-xl'>£{price.toFixed(2)}</div>
			</div>
			<div className='text-xs text-center'>
				Select quantity
				<div className='border-2 border-gray-200 rounded-xl px-2 items-center flex'>
					<button
						className='w-8 my-2 cursor-pointer rounded-xl font-medium text-gray-700 bg-gray-200 hover:bg-yellow-600 hover:text-gray-200'
						onClick={() => setQuantity(quantity > 0 ? quantity - 1 : 0)}
					>
						-
					</button>
					<input
						className='w-14 my-2 text-center rounded-xl mx-2'
						type='text'
						value={quantity}
						onChange={e => setQuantity(e.target.value)}
					/>
					<button
						className='w-8 my-2 cursor-pointer  rounded-xl font-medium text-gray-700 bg-gray-200 hover:bg-yellow-600 hover:text-gray-200'
						onClick={() => setQuantity(quantity + 1)}
					>
						+
					</button>
				</div>
			</div>
			<div className='text-xs text-center'>
				Total price
				<div className='border-2 border-gray-200 p-2 w-28 rounded-xl'>
					£{(price * quantity).toFixed(2)}
				</div>
			</div>
		</div>
	);
};

PriceQuantityTotal.defaultProps = {
	price: 0,
	qty: 0,
};

export default PriceQuantityTotal;