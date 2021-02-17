import { auth, db } from '../../apis/firebase';

import {
	USER_LOGIN_SUCCESS,
	USER_LOGIN_REQUEST,
	USER_LOGIN_FAILED,
	USER_LOGOUT,
	USER_SIGNUP_REQUEST,
	USER_SIGNUP_SUCCESS,
	USER_SIGNUP_FAILED,
} from './userConstants';

// action to log user in
export const userLogin = (email, password) => async dispatch => {
	try {
		dispatch({ type: USER_LOGIN_REQUEST });
		const loginResponse = await auth.signInWithEmailAndPassword(email, password);
		if (loginResponse) {
			// get the users name from the users collection
			const getUsersNameResponse = await db
				.collection('users')
				.doc(`${loginResponse.user.uid}`)
				.get();
			dispatch({
				type: USER_LOGIN_SUCCESS,
				payload: { id: loginResponse.user.uid, name: getUsersNameResponse.data().name },
			});
		}
	} catch (error) {
		dispatch({ type: USER_LOGIN_FAILED, payload: error.message });
	}
};

// action to log user out
export const userLogout = () => async dispatch => {
	await auth.signOut();
	dispatch({ type: USER_LOGOUT });
	console.log('user logged out');
};

// action to sign-up a new user
export const userSignup = (email, password, name) => async dispatch => {
	try {
		dispatch({ type: USER_SIGNUP_REQUEST });
		const signupResponse = await auth.createUserWithEmailAndPassword(email, password);
		if (signupResponse) {
			dispatch({ type: USER_SIGNUP_SUCCESS, payload: { id: signupResponse.user.uid, name: name } });

			// Create a document for the users details
			const createUserDocumentResponse = await db
				.collection('users')
				.doc(`${signupResponse.user.uid}`)
				.set({ name: name });
			console.log('signup response: ', signupResponse.user.uid);
			console.log('name: ', name);
		}
	} catch (error) {
		dispatch({ type: USER_SIGNUP_FAILED, payload: error.message });
	}
};
