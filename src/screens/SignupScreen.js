import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userSignup } from '../redux/user/userActions';

const SignupScreen = ({ history }) => {
	const dispatch = useDispatch();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [name, setName] = useState('');
	const userId = useSelector(state => state.user.id);

	function handleSubmitSignupDetails(e) {
		e.preventDefault();
		dispatch(userSignup(email, password, name));
		setEmail('');
		setPassword('');
	}

	useEffect(() => {
		// if logged in user changes, then redirect back to home screen
		if (userId) {
			history.push('/');
		}
	}, [userId]);

	return (
		<>
			<div className='mx-auto max-w-md shadow p-10 rounded-xl mt-10'>
				<form className='' onSubmit={handleSubmitSignupDetails}>
					<h2 className='text-lg text-center font-bold pb-4'>Sign-up to MyShop</h2>
					<label htmlFor='email' className='block mb-1'>
						Name
					</label>
					<input
						className='block p-2 rounded-xl w-full'
						type='text'
						name='name'
						placeholder='Enter name'
						onChange={e => setName(e.target.value)}
						value={name}
						required
					/>
					<br />
					<label htmlFor='email' className='block mb-1'>
						Email
					</label>
					<input
						className='block p-2 rounded-xl w-full'
						type='text'
						name='email'
						placeholder='Enter email'
						onChange={e => setEmail(e.target.value)}
						value={email}
						required
					/>
					<br />
					<label htmlFor='password' className='block mb-1 mt-2'>
						Password
					</label>
					<input
						className='block p-2 rounded-xl w-full'
						type='password'
						name='password'
						placeholder='Enter password'
						onChange={e => setPassword(e.target.value)}
						value={password}
						required
					/>
					<br />
					<button
						type='submit'
						className='block mt-4 w-full bg-gray-600 text-gray-200 p-2 rounded-xl hover:bg-gray-500'
					>
						Sign-up
					</button>
				</form>
			</div>
		</>
	);
};

export default SignupScreen;
