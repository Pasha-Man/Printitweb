import React, { useState } from "react";
import style from "./style";
import firebase from "./config";
import { Redirect } from "react-router-dom";

function NewSignIn() {
  const [isLoggedIn, setisLoggedIn] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Button has been clicked");
    const data = new FormData();
    // eslint-disable-next-line no-console

    data.append("email", email);
    data.append("password", password);

    console.log(data.get("email"));

    firebase
      .auth()
      .signInWithEmailAndPassword(data.get("email"), data.get("password"))
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log("User is", user);
        setisLoggedIn(true);
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
        console.log("Error is", errorMessage);
        console.log("Error code is", errorCode);
      });
  };

  if (isLoggedIn) return <Redirect to="/home" />;

  return (
    <div style={style.fullContainer}>
      {/* <div style={style.image}></div> */}
      <div style={style.container}>
        <div style={style.strecther}>
          <p style={{ color: "white" }}>Print it</p>
        </div>
        <div>
          <h3>Hi there! Nice to see you again!</h3>
        </div>
        <div>
          <h5>Login to your account</h5>
        </div>
        <div style={style.leftAligner}>
          <p style={style.topHolder}>Email</p>
          <input
            style={style.feilds}
            type="text"
            placeholder="Enter your Email"
            onChange={(event) => setEmail(event.target.value)}
          ></input>
          <p style={style.bottomHolder}>Password</p>
          <input
            style={style.feilds}
            type="password"
            placeholder="Enter your password"
            onChange={(event) => setPassword(event.target.value)}
          ></input>
        </div>
        <div>
          <button type="button" style={style.button} onClick={handleSubmit}>
            Login
          </button>
        </div>
        <div style={style.lastLine}>
          <a style={{ padding: "0 120px" }}>Forgot password?</a>
          {/* <a
            href="./NewSignUp"
            style={{ paddingLeft: "80px", color: "#ff976d" }}
          >
            Sign up
          </a> */}
        </div>
      </div>
    </div>
  );
}
export default NewSignIn;
