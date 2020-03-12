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
	const [error, setError] = useState();
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
		setError();
		console.log(`Email: ${email} | Password: ${password}`);

		try {
			const result = await firebaseService.loginUser(email, password);
			console.log(result);
		} catch (err) {
			setError(err.message);
			console.error(err);
		}
		setEmail('');
		setPassword('');
	};

	return (
		<CenteredContainer>
			<FormWrapper>
				<h4 className="title is-4">
					Welcome to ChaT app
      			</h4>
				<form autoComplete="off" onSubmit={handleSubmit}>
					<div className="tabs is-boxed">
						<ul>
							<li className="is-active">
								<a href="/">
									<span className="icon is-small"><FontAwesomeIcon icon={faUser} aria-hidden="true" /></span>
									<span>Login</span>
								</a>
							</li>
							<li>
								<a href="/">
									<span className="icon is-small"><FontAwesomeIcon icon={faAddressBook} aria-hidden="true" /></span>
									<span>Register</span>
								</a>
							</li>
						</ul>
					</div>
					<div className="field">
						<label className="label">Email</label>
						<div className="control has-icons-left has-icons-right">
							<input className="input"
								type="email"
								placeholder="Email"
								autoFocus
								onChange={handleEmailChange}
								value={email}
								required />
							<span className="icon is-small is-left">
								<FontAwesomeIcon icon={faEnvelope} />
							</span>
							<span className="icon is-small is-right">
								<FontAwesomeIcon icon={faCheck} />
							</span>
						</div>
						<p className="help is-danger is-hidden">This email is invalid</p>
					</div>
					<div className="field">
						<div className="control has-icons-left">
							<input className="input" id="password"
								name="password"
								type="password"
								placeholder="Password"
								onChange={handlePasswordChange}
								value={password}
								required
							/>
							<span className="icon is-small is-left">
								<FontAwesomeIcon icon={faLock} />
							</span>
						</div>
						<p className="help is-danger is-hidden">This password is invalid</p>
					</div>
					<div className="field">
						<p className={"help is-danger" + ((error == undefined) ? " is-hidden" : "")}>{error}</p>
					</div>
					<div className="field is-grouped">
						<div className="control">
							<button type="submit" className="button is-success">Login</button>
						</div>
						<div className="control">
							<button className="button is-danger is-light">Cancel</button>
						</div>

					</div>
				</form>
			</FormWrapper>
		</CenteredContainer>
	);
};

export default Login;
