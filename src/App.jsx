import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import { GlobalStyles } from './theme';
import Login from './routes/Login';
import ChatDashboard from './routes/ChatDashboard';
import { Navbar } from './components';

// const AppContainer = styled.div`
// 	border: 1px solid red; // For visual; TODO: remove this afterwards
// 	display: flex;
// 	height: 100vh;
// 	padding-top: 3rem;
// 	width: 100%;
// `;

const App = () => {
	return (
		<div>
			<GlobalStyles />
			{/* NavigationBar goes here */}
			<BrowserRouter>
				<Navbar />
				<Switch>
					<Route path="/login" exact component={Login} />
					<Route path="/chat" exact component={ChatDashboard} />
				</Switch>
			</BrowserRouter>
		</div>

	);
};

export default App;
