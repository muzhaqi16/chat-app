import React, { useContext, useState } from 'react';
import styled from 'styled-components';

import FirebaseContext from '../context/FirebaseContext';

const CenteredContainer = styled.div`
	display: flex;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

const FormWrapper = styled.div`
	border: 1px solid blue;
	flex-direction: column;
	padding: 1.25rem;
	width: 600px;
`;

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const firebaseService = useContext(FirebaseContext);

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};

	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		console.log(`Email: ${email} | Password: ${password}`);

		try {
			await firebaseService.loginUser(email, password);
		} catch (err) {
			console.error(err);
		}
		setEmail('');
		setPassword('');
	};

	return (
		<CenteredContainer>
			<FormWrapper>
				<form autoComplete="off" onSubmit={handleSubmit}>
					<header>Login to Chat App</header>
					<div>
						<label>Email</label>
						<input
							autoFocus
							id="email"
							type="email"
							name="email"
							onChange={handleEmailChange}
							value={email}
							required
						/>
					</div>
					<div>
						<label>Password</label>
						<input
							id="password"
							name="password"
							type="password"
							onChange={handlePasswordChange}
							value={password}
							required
						/>
					</div>
					<div>
						<button type="submit" onSubmit={handleSubmit}>
							Submit
						</button>
					</div>
				</form>
			</FormWrapper>
		</CenteredContainer>
	);
};

export default Login;
