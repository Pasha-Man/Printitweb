import background from "../login-image.png";
import logo from "../logo.png";
const style = {
  fullContainer: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "absolute",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  // image:{
  //   backgroundImage: `url(${logo})`,
  //   zIndex: 1,
  // },
  container: {
    background: "rgb(233, 155, 127)",
    borderRadius: "60px",
    textAlign: "center",
    opcaity: "0.6",
    // padding: "10px 0",
  },
  strecther: {
    padding: "0 300px",
  },
  leftAligner: {
    textAlign: "left",
    paddingLeft: "20px",
  },
  feilds: {
    backgroundColor: "#e99b7f",
  },
  // input:{
  //   Width: "500px",
  // },
  button: {
    borderRadius: "10px",
    padding:"5px 30px",
    backgroundColor: "#fe7f54",
  },
  lastLine:{
    display: "flex",
    paddingTop: "10px",
    paddingBottom: "15px",
    // textAlign: "center",
    // justifyContent: "center",
  },
  sLastLine:{
    padding:"10px 0"
  },
  topHolder:{
    fontSize: 18,
  },
  bottomHolder:{
    fontSize: 18,
    padding:"10px 5px 0 0",
  }
};
export default style;