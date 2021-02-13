import { USER_LOGIN_FAILED, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from './userConstatns';

const userReducer = (state = {}, action) => {
	switch (action.type) {
		case USER_LOGIN_REQUEST:
			return { loading: true };
		case USER_LOGIN_SUCCESS:
			return { loading: false, details: action.payload };
		case USER_LOGIN_FAILED:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export default userReducer;
