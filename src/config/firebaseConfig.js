import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID,
	appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

class FirebaseService {
	constructor() {
		firebase.initializeApp(firebaseConfig);

		this.auth = firebase.auth();
		this.database = firebase.database();
	}

	async createUser(email, password) {
		await this.auth.createUserWithEmailAndPassword(email, password);
	}

	async loginUser(email, password) {
		await this.auth.signInWithEmailAndPassword(email, password);
	}

	async logoutUser() {
		await this.auth.signOut();
	}

	async resetUserPassword(email) {
		await this.auth.sendPasswordResetEmail(email);
	}

	async updateUserPassword(password) {
		await this.auth.currentUser.updatePassword(password);
	}

	getUserById(id) {
		return this.database.ref(`users/${id}`);
	}

	getAllUsers() {
		return this.database.ref(`users`);
	}

	getMessageById(id) {
		return this.database.ref(`messages/${id}`);
	}

	getAllMessages() {
		return this.database.ref(`messages`);
	}
}

export default FirebaseService;
