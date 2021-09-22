import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider, TwitterAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore";

// Initialize Firebase
const config = {
  apiKey: "AIzaSyAz-GPfA-hN74oFh3XvXsF9vQrlE5xpU10",
  authDomain: "wieldy-4f59c.firebaseapp.com",
  databaseURL: "https://wieldy-4f59c.firebaseio.com",
  projectId: "wieldy-4f59c",
  storageBucket: "wieldy-4f59c.appspot.com",
  messagingSenderId: "81949884261"
};

const firebaseApp = initializeApp(config);
const auth = getAuth(firebaseApp);

const googleAuthProvider = new GoogleAuthProvider(auth);
const facebookAuthProvider = new FacebookAuthProvider(auth);
const githubAuthProvider = new GithubAuthProvider(auth);
const twitterAuthProvider = new TwitterAuthProvider(auth);

const database = getFirestore(firebaseApp);

export {
  database,
  auth,
  googleAuthProvider,
  githubAuthProvider,
  facebookAuthProvider,
  twitterAuthProvider
};
