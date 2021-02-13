import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import userReducer from '../redux/user/userReducer';
import cartReducer from '../redux/cart/cartReducer';

const rootReducer = combineReducers({
	user: userReducer,
	cart: cartReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
