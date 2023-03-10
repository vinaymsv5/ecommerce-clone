import React, { useEffect } from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { Routes, Route } from "react-router-dom"
// import firebase from './firebase'
import Payment from "./Payment";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
  //   // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);


  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={[<Home />]}  /> 
        <Route path="/login" element={<Login/>} />
        <Route path="/checkout" element={[<Checkout />]} />
        <Route path="/payment" element={[ <Payment/>]} />
      </Routes>
      
    </div>
  );
}

export default App;
