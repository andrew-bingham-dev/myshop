import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { auth } from './apis/firebase';
import Header from './components/Header';
import LoginScreen from './screens/LoginScreen';
import ProductsScreen from './screens/ProductsScreen';

function App() {
	auth.onAuthStateChanged(user => {
		if (user) {
			console.log(`User ${user.email} is logged on`);
		} else {
			console.log('No user logged in');
		}
	});

	return (
		<>
			<Router>
				<Header />
				<Switch>
					<Route path='/' exact component={ProductsScreen} />
					<Route path='/login' component={LoginScreen} />
				</Switch>
			</Router>
		</>
	);
}

export default App;
