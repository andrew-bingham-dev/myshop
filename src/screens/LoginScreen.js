import React from 'react';

import './LoginScreen.css';

const LoginScreen = () => {
	return (
		<>
			<div className='login-screen'>
				<form className='login-screen__form'>
					<label htmlFor='email'>Email</label>
					<input type='text' name='email' placeholder='Enter email' />
					<br />
					<label htmlFor='password'>Password</label>
					<input type='password' name='password' placeholder='Enter password' />
					<br />
					<button type='submit'>Login</button>
				</form>
			</div>
		</>
	);
};

export default LoginScreen;
