import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faEnvelope, faCheck, faUser, faAddressBook } from '@fortawesome/free-solid-svg-icons'

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
				<h4 class="title is-4">
					Welcome to ChaT app
      			</h4>
				<form autoComplete="off" onSubmit={handleSubmit}>
					<div class="tabs is-boxed">
						<ul>
							<li class="is-active">
								<a href="/">
									<span class="icon is-small"><FontAwesomeIcon icon={faUser} aria-hidden="true" /></span>
									<span>Login</span>
								</a>
							</li>
							<li>
								<a href="/">
									<span class="icon is-small"><FontAwesomeIcon icon={faAddressBook} aria-hidden="true" /></span>
									<span>Register</span>
								</a>
							</li>
						</ul>
					</div>
					<div class="field">
						<label class="label">Email</label>
						<div class="control has-icons-left has-icons-right">
							<input className="input"
								type="email"
								placeholder="Email"
								autoFocus
								onChange={handleEmailChange}
								value={email}
								required />
							<span class="icon is-small is-left">
								<FontAwesomeIcon icon={faEnvelope} />
							</span>
							<span class="icon is-small is-right">
								<FontAwesomeIcon icon={faCheck} />
							</span>
						</div>
						<p class="help is-danger">This email is invalid</p>
					</div>
					<div class="field">
						<div class="control has-icons-left">
							<input className="input" id="password"
								name="password"
								type="password"
								placeholder="Password"
								onChange={handlePasswordChange}
								value={password}
								required
							/>
							<span class="icon is-small is-left">
								<FontAwesomeIcon icon={faLock} />
							</span>
						</div>
					</div>
					<div class="field is-grouped">
						<div class="control">
							<button type="submit" class="button is-success">Login</button>
						</div>
						<div class="control">
							<button class="button is-danger is-light">Cancel</button>
						</div>
					</div>
				</form>
			</FormWrapper>
		</CenteredContainer>
	);
};

export default Login;
