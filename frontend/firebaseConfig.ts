import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB__yOHhxc8dr4as7P6QmjZqdnRSaC-3Po",
  authDomain: "ai-document-analyzer-f9147.firebaseapp.com",
  projectId: "ai-document-analyzer-f9147",
  storageBucket: "ai-document-analyzer-f9147.firebasestorage.app",
  messagingSenderId: "977130048885",
  appId: "1:977130048885:web:2c0badaa7a81920c6dd73c",
  measurementId: "G-NWPRM659GC",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
const auth = getAuth(app);

export { auth };
