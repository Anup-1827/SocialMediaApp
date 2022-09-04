import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyARoLQCGmYJqqNEeaGNkuRWwkd-87q9pFQ",
  authDomain: "socialmediaappuploadfile.firebaseapp.com",
  projectId: "socialmediaappuploadfile",
  storageBucket: "socialmediaappuploadfile.appspot.com",
  messagingSenderId: "700529177480",
  appId: "1:700529177480:web:57eb8d17f87c0f4548c03d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);

