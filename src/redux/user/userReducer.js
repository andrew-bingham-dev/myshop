import {
	USER_ALREADY_LOGGED_IN,
	USER_LOGIN_FAILED,
	USER_LOGIN_REQUEST,
	USER_LOGIN_SUCCESS,
	USER_LOGOUT,
	USER_SIGNUP_FAILED,
	USER_SIGNUP_REQUEST,
	USER_SIGNUP_SUCCESS,
} from './userConstants';

const userReducer = (state = { loading: false, id: null, name: null }, action) => {
	switch (action.type) {
		case USER_LOGIN_REQUEST:
			return { loading: true };
		case USER_LOGIN_SUCCESS:
			return { loading: false, id: action.payload.id, name: action.payload.name };
		case USER_LOGIN_FAILED:
			return { ...state, loading: false, error: action.payload };
		case USER_LOGOUT:
			return { loading: false, id: null, name: null };
		case USER_SIGNUP_REQUEST:
			return { ...state, loading: true };
		case USER_SIGNUP_SUCCESS:
			return { ...state, loading: false, id: action.payload.id, name: action.payload.name };
		case USER_SIGNUP_FAILED:
			return { ...state, loading: false, error: action.payload };
		default:
			return state;
	}
};

export default userReducer;
