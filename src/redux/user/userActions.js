import { auth } from '../../apis/firebase';

import {
	USER_LOGIN_SUCCESS,
	USER_LOGIN_REQUEST,
	USER_LOGIN_FAILED,
	USER_LOGOUT,
} from './userConstatns';

export const userLogin = (email, password) => async dispatch => {
	try {
		dispatch({ type: USER_LOGIN_REQUEST });

		const response = await auth.signInWithEmailAndPassword(email, password);
		auth.onAuthStateChanged(user => {
			dispatch({ type: USER_LOGIN_SUCCESS, payload: user });
		});
	} catch (error) {
		alert(`Error: ${error}`);
	}
};
