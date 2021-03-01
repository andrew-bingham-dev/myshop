import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { auth } from './apis/firebase';
import { userLogout } from './redux/user/userActions';
import Header from './components/header/Header';
import LoginScreen from './screens/LoginScreen';
import ProductsScreen from './screens/ProductsScreen';
import { USER_LOGIN_SUCCESS } from './redux/user/userConstants';
import CartScreen from './screens/CartScreen';
import SignupScreen from './screens/SignupScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
	const dispatch = useDispatch();
	const userId = useSelector(state => state.user.id);

	useEffect(() => {
		auth.onAuthStateChanged(user => {
			if (user) {
				dispatch({ type: USER_LOGIN_SUCCESS, payload: user.uid });
			} else {
				dispatch(userLogout());
			}
		});
	}, []);

	return (
		<>
			<Router>
				<Header />
				<Switch>
					<Route path='/' exact component={ProductsScreen} />
					<Route path='/product/:id' component={ProductScreen} />
					<Route path='/login' component={LoginScreen} />
					<Route path='/signup' component={SignupScreen} />
					<Route path='/cart' component={CartScreen} />
				</Switch>
			</Router>
		</>
	);
}

export default App;
