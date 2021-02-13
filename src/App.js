import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import LoginScreen from './screens/LoginScreen';
import ProductsScreen from './screens/ProductsScreen';

function App() {
	return (
		<>
			<Router>
				<Header />
				<Switch>
					<Route path='/' exact>
						<ProductsScreen />
					</Route>
					<Route path='/login'>
						<LoginScreen />
					</Route>
				</Switch>
			</Router>
		</>
	);
}

export default App;
