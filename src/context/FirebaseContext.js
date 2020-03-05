import { createContext } from 'react';
import FirebaseService from '../config/firebaseConfig';

const firebaseService = new FirebaseService();

// Create a globally-available instance of `FirebaseService` via hooks and the context API
const FirebaseContext = createContext(firebaseService);

export default FirebaseContext;
