import { React, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Link } from "react-router-dom";
import Login from "../Login/Login";

const firebaseConfig = {
  apiKey: "AIzaSyBu1TrkCcdfG-1H3y935QFfMG-B8MWlUHY",
  authDomain: "enftora.firebaseapp.com",
  projectId: "enftora",
  storageBucket: "enftora.appspot.com",
  messagingSenderId: "712951321423",
  appId: "1:712951321423:web:be2c081584d5d80d8d2b3a",
  measurementId: "G-0LWT8NS7NZ",
};
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider(app);
const auth = getAuth(app);

export const Auth = () => {
  let storID = localStorage.getItem("usID");
  const [sesID, setsesID] = useState(storID);
  // console.log(sesID);
  function redirect() {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        setsesID(user.uid);
        localStorage.setItem("usID", user.uid);
        localStorage.setItem("usName", user.displayName);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  }

  return (
    <div>
      <Login rd={redirect} sID={sesID} />
    </div>
  );
};
