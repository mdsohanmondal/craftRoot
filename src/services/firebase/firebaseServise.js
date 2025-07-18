import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import app from './firebase.config';
const auth = getAuth(app);
const db = getDatabase(app);
export { auth, db };
