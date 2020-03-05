import React from 'react';

//using react router to handle the routing for the application
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

import Nav from './components/Nav';

const App = () => {
	return (
		//in order to use Link from react router we need to wrap it in <Router> tags
		<Router>
			<header>
				<h1>Chat Application</h1>
				<Nav />
			</header>
			<main>
				{/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
				<Switch>
					<Route path="/login">
						<h2>Log in</h2>
					</Route>
					<Route path="/signup">
						<h2>Sign Up</h2>
					</Route>
					<Route path="/">
						<h2>Main Chat</h2>
					</Route>
				</Switch>
			</main>
		</Router>
	);
};

export default App;
