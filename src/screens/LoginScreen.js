import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../redux/user/userActions';

const LoginScreen = ({ history }) => {
	const dispatch = useDispatch();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const user = useSelector(state => state.user);

	function handleSubmit(e) {
		e.preventDefault();
		dispatch(userLogin(email, password));
	}

	useEffect(() => {
		console.log(user.email);
		if (user.email) {
			history.push('/');
		}
	}, [user, dispatch]);

	return (
		<>
			<div className='login-screen'>
				<form className='login-screen__form' onSubmit={handleSubmit}>
					<label htmlFor='email'>Email</label>
					<input
						type='text'
						name='email'
						placeholder='Enter email'
						onChange={e => setEmail(e.target.value)}
						value={email}
					/>
					<br />
					<label htmlFor='password'>Password</label>
					<input
						type='password'
						name='password'
						placeholder='Enter password'
						onChange={e => setPassword(e.target.value)}
						value={password}
					/>
					<br />
					<button type='submit'>Login</button>
				</form>
			</div>
		</>
	);
};

export default LoginScreen;
