import { useEffect, useState } from "react";
import React from "react";
import AppRouter from "./Router";
import firebase from "../firebase";
function App() {
  const authService = firebase.auth()
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
      <footer>&copy; {new Date().getFullYear()}twitter</footer>
    </>
  );
}

export default App;
