import  React, {useState} from "react";
import style from "./style";
import {db} from "./config";
import firebase from 'firebase'
import { Redirect } from "react-router-dom";

function NewSignUp() {
  const [isUser, setIsUser] = useState();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  // const [passwordAgain, setPasswordAgain] = useState("");
  const [number, setNumber] = useState("");
  const [long, setlong] = useState(0);
  const [lat, setlat] = useState(0);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData();
    // eslint-disable-next-line no-console
    console.log({
      email: data.get("email"),
      password: data.get("password"),
      number: data.get("number"),
      // passwordAgain: data.get("passwordAgain"),
    });
    data.append("email", email);
    data.append("password", password);
    // data.append("passwordAgain", passwordAgain);
    data.append("number", number);

    firebase
      .auth()
      .createUserWithEmailAndPassword(data.get("email"), data.get("password"))
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log("User is", user);
        setIsUser(true);
        db.collection('printshops').add({
          email: email,
          password:password,
          number:number,
          longitute: long, 
          latitute: lat,
          availablityStatus: false,
          uid: user.uid
        })
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("Error is", errorMessage);
        console.log("Error code is", errorCode);
      });
  };

  if (isUser) return <Redirect to="/NewSignIn" />;
  return (
    <div style={style.fullContainer}>
      {/* <div style={style.image}></div> */}
      <div style={style.container}>
        <div style={style.strecther}>
          <p style={{ color: "white" }}>Print it</p>
        </div>
        <div>
          <h3>Sign Up</h3>
        </div>
        <div style={style.leftAligner}>
          <p style={style.topHolder}>Email</p>
          <input
            style={style.feilds}
            type="text"
            placeholder="Enter your Email"
            size="70"
            onChange={(event) => setEmail(event.target.value)}
          ></input>
          <p style={style.bottomHolder}>Password</p>
          <input
            style={style.feilds}
            type="password"
            placeholder="Enter your password"
            size="70"
            onChange={(event) => setPassword(event.target.value)}
          ></input>
          {/* <p style={style.bottomHolder}>Confirm Password</p>
          <input
            style={style.feilds}
            type="password"
            placeholder="Enter your password "
            size="70"
            // onChange={(event) => setPasswordAgain(event.target.value)}
          ></input> */}
          <p style={style.topHolder}>Phone Number</p>
          <input
            style={style.feilds}
            type="text"
            placeholder="Enter your phone number"
            size="70"
            onChange={(event) => setNumber(event.target.value)}
          ></input>
          <p style={style.topHolder}>Enter Longitutue</p>
          <input
            style={style.feilds}
            type="text"
            placeholder="Enter longitute of your location"
            size="70"
            onChange={(event) => setlong(event.target.value)}
          ></input>
          <p style={style.topHolder}>Enter Latitude</p>
          <input
            style={style.feilds}
            type="text"
            placeholder="Enter longitute of your location"
            size="70"
            onChange={(event) => setlat(event.target.value)}
          ></input>
        </div>
        <div style={{margintop:"10px"}}>
          <button type="button" style={style.button} onClick={handleSubmit}>
            Sign Up{" "}
          </button>
        </div>
        <div style={style.sLastLine}>
          <a href="./NewSignIn" style={{ color: "#cf4415" }}>
            Already have an account? Sign In
          </a>
        </div>
      </div>
    </div>
  );
}
export default NewSignUp;
