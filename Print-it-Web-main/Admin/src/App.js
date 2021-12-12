import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import Customer from "./Customers";
import Home from "./home";
import Shops from "./Print_shops";
import Reviews from "./reviews";
import Service from "./service";
import Settings from "./settings";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import firebase, { db } from './config'
import { debounce } from "@material-ui/core";

function App () {

  // if not signed in 
  // then return sign in and sign up routes 
  const [isUser, setIsUser] = useState(false)

  const auth = firebase.auth()


  useEffect(() => {

    auth.onAuthStateChanged(async (User) => {
      if (User) {
        setIsUser(true)
      }
      else {
        setIsUser(false)
      }
    })
  }, [auth])
  if (!isUser) {
    return (
      <div>
        <Route path="/SignIn" component={SignIn} />
        <Route path="/SignUp" component={SignUp} />
      </div>
    )
  }
  return (
    <div>
      {/* <Route path="/" component={Home} /> */}
      <Route path="/home" component={Home} exact/>
      <Route path="/service" component={Service} />
      <Route path="/Customers" component={Customer} />
      <Route path="/Print_shops" component={Shops} />
      <Route path="/reviews" component={Reviews} />
      <Route path="/settings" component={Settings} />
    </div>
  );
}
export default App;
