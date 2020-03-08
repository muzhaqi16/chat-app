import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import { GlobalStyles } from './theme';
import AuthGateway from './routes/AuthGateway';
import ChatDashboard from './routes/ChatDashboard';

const AppContainer = styled.div`
	border: 1px solid red; // For visual; TODO: remove this afterwards
	display: flex;
	height: 100vh;
	padding-top: 3rem;
	width: 100%;
`;

const App = () => {
	return (
		<AppContainer>
			<GlobalStyles />
			{/* NavigationBar goes here */}
			<BrowserRouter>
				<Switch>
					<Route path="/" exact component={AuthGateway} />
					<Route path="/chat" exact component={ChatDashboard} />
				</Switch>
			</BrowserRouter>
		</AppContainer>
	);
};

export default App;
