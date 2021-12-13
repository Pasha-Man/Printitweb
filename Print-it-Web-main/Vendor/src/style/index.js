import background from "../login-image.png";
// import logo from "../logo.png";
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
    opacity: "0.8",
    // padding: "10px 0",
  },
  body:{
    margin: 0,
    padding: 0,
  },
  strecther: {
    padding: "0 300px",
  },
  leftAligner: {
    textAlign: "center",
    // paddingLeft: "20px",
    // marginbottom: "10px",
  },
  feilds: {
    // backgroundColor: "#e99b7f",
    // opacity: "0.7",
    justifyContent: "center",
  },

  // input:{
  //   Width: "500px",
  // },
  button: {
    borderRadius: "10px",
    padding: "5px 30px",
    backgroundColor: "#fe7f54",
    margintop: "10px",
  },
  lastLine: {
    display: "flex",
    paddingTop: "10px",
    paddingBottom: "20px",
    // textAlign: "center",
    // justifyContent: "center",
  },
  sLastLine: {
    padding: "10px 0",
  },
  topHolder: {
    fontSize: 18,
    textAlign: "left",
    paddingLeft: "40px",
    paddingTop: "10px",
    paddingBottom: "0",
  },
  bottomHolder: {
    fontSize: 18,
    padding: "10px 5px 0 40px",
    textAlign: "left",
  },
};
export default style;