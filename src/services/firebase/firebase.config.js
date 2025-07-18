import { initializeApp } from 'firebase/app';
const firebaseConfig = {
  apiKey: 'AIzaSyA_ToYjvh3brCIHBDGo-Sh2aptpk4S9mtQ',
  authDomain: 'craftedroots-project.firebaseapp.com',
  databaseURL: 'https://craftedroots-project-default-rtdb.firebaseio.com',
  projectId: 'craftedroots-project',
  storageBucket: 'craftedroots-project.firebasestorage.app',
  messagingSenderId: '200529538207',
  appId: '1:200529538207:web:9de7743f20ccaf796b06aa',
};
const app = initializeApp(firebaseConfig);

export default app;
