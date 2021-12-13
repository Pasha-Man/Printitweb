import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import Home from "./home";
import Service from "./service";
import Settings from "./settings";
import Signin from "./Login";
import Signup from "./Signup";
import NotificationPopup from "./NotificationPopup";
import NotificationContext from "./NotificationContext";
import Cancelled from "./CancelledOrder";
import History from "./OrderHistory";
import Wallet from "./Wallet";
import Order from "./Order";
import Current from "./CurrentOrder";
import NewSignIn from "./NewSignIn";
import NewSignUp from "./NewSignUp";
import ChatRoom from '../src/pages/ChatRoom/ChatRoom';
import firebase, { db } from "./config";
function App() {
  const [popUpActive, setPopUpActive] = useState(false);
  const [isUser, setIsUser] = useState(false);

  const auth = firebase.auth();

  useEffect(() => {
    auth.onAuthStateChanged(async (User) => {
      if (User) {
        setIsUser(true);
      } else {
        setIsUser(false);
      }
    });
  }, [auth]);
  if (!isUser) {
    return (
      <div>
        <Route path="/NewSignIn" component={NewSignIn} default />
        <Route path="/NewSignUp" component={NewSignUp} />
      </div>
    );
  }


  return (
    <NotificationContext.Provider value={{ popUpActive, setPopUpActive }}>
      {/* <switch> */}
        {/* <Route path="/Signup" component={Signup} default />
        <Route path="/SignIn" component={Signin} exact /> */}
        <Route path="/NewSignIn" component={NewSignIn} exact />
        <Route path="/NewSignUp" component={NewSignUp} exact />
        <Route path="/home" component={Home} exact />
        {/* <Route path="/Chat/home" component={Homee} exact /> */}
        <Route path="/CurrentOrder" component={Current} exact />
        <Route path="/Wallet" component={Wallet} exact />
        <Route path="/Order" component={Order} exact />
        <Route path="/CancelledOrder" component={Cancelled} exact />
        <Route path="/OrderHistory" component={History} exact />
        <Route path="/service" component={Service} />
        <Route path="/chat" component={ChatRoom} />
        <Route path="/settings" component={Settings} />
      {/* </switch> */}
    </NotificationContext.Provider>
  );
}
export default App;
