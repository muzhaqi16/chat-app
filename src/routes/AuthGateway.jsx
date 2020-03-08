import React from 'react';
import styled from 'styled-components';

const CenteredContainer = styled.div`
	display: flex;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 600px;
`;

const FormWrapper = styled.div`
	flex-direction: column;
`;

const AuthGateway = () => {
	return (
		<CenteredContainer>
			<FormWrapper>
				<h1>Authentication "gateway" render success</h1>
				<h3>Login / Register Form will go here</h3>
				<small>If user is already authenticated, send them through to the chat (home) page</small>
			</FormWrapper>
		</CenteredContainer>
	);
};

export default AuthGateway;
