import * as  React from "react";
import Table from "react-bootstrap/Table";
import Header from "./header";
import NotificationPopup from "./NotificationPopup";
import "./style.css";
import ProgressBar from "@ramonak/react-progress-bar";
import axios from 'axios';
import db from "./config"
class Current extends React.Component {
  constructor(props){
    super(props)
    this.state={
      id:localStorage.getItem("id"),
      contentType:"pdf_base64",
      requirements:["5NNeVLp5h3dwYNAwddUt"],
      require:[],
      copies:0,
      printcolor:"",
      fileurl:"",
      printtype:"",
    }
  }
  async componentDidMount (){
    await this.getrequirements()
    await this.getdata()
  }
  
  printingservices =  () =>{
    console.log("gggg")
  }
  getrequirements = async () => {
    axios.get('http://localhost:8000/vendor/get/requirementsid/'+this.state.id)
    .then((res) => {
      console.log(res.data)
      this.setState({requirements:(this.state.requirements.concat(res.data))})
   })
   .catch(error =>{console.log(error)})
  }
  getdata = async() => {
    console.log("hello")
    this.state.requirements.forEach(e =>{
      console.log("executed")
      axios.get('http://localhost:8000/vendor/get/requirements/'+e)
      .then( (res) => {
        console.log(res.data)
        this.setState({require:(this.state.require.concat(res.data))})
     })
     .catch(error =>{console.log(error)})
    })
  }
  render(){
    return (
      <div className="cover-all">
        <div>
          <Header printer="printer" />
          <NotificationPopup />
          <div
            className="custom-container mt-5 mb-5"
            style={{ backgroundImage: "./backgroundAll.png" }}
          >
            <div
              className="row"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div className="col-md-4" style={{ textAlign: "center" }}>
                <h3 className="service-h33">Current Order</h3>
              </div>
            </div>
            <div style={{ padding: "0 10%" }} className="mt-5 mb-5">
              <h3 className="boldspan mb-5">See Current Progress of order</h3>
              <div
                style={{
                  background: "#F6F6F6",
                  borderRadius: "8px",
                  padding: "20px 15px",
                }}
              >
                <div
                  style={{
                    background: "#ffffff",
                    borderRadius: "5px",
                    padding: "50px 30px",
                    border: "1px solid #F6F6F6",
                  }}
                >
                  <div className="row mt-3 mb-3">
                    <div className="col-md-4">
                      <div className="print-inner">
                        <span>8</span>
                        <p className="boldspan">Order in Queue</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="print-inner">
                        <span>1</span>
                        <p className="boldspan">Order Completed</p>
                      </div>
                    </div>
  
                    <h5 className="boldspan mb-5 mt-5">
                      Order of Turn #1 is currently printing
                    </h5>
  
                    <ProgressBar
                      completed={60}
                      maxCompleted={100}
                      bgColor="#008000"
                    />
                    {/* Check the link bellow for progressbar details and dependencies */}
                    {/* https://www.npmjs.com/package/@ramonak/react-progress-bar#examples */}
                    <div
                      style={{
                        background: "#F6F6F6",
                        borderRadius: "8px",
                        padding: "20px 20px",
                        marginTop: "20px",
                      }}
                    >
                      <h5 className="boldspan ">Order Details:</h5>
                      <div className="d-flex flex-row">
                        <ul
                          style={{
                            padding: "5px 15px",
                            marginLeft: "130px",
                          }}
                        >
                          <li>{"File Name   "+this.state.require.filename}</li>
                          <li>{"Print Type  "+this.state.require.printtype}</li>
                          <li>{"Print Color "+this.state.require.printcolor}</li>
                          <li>{"Customer ID "+this.state.require.customerid}</li>
                          <li>{"Copies      "+this.state.require.copies}</li>
                        </ul>
                        <div
                          style={{
                            padding: "5px 15px",
                            marginLeft: "130px",
                          }}
                        >
                          <i class="fas fa-copy fa-8x"></i>
                          <button
                          onClick={() => this.printingservices()}
                          >
                            press
                          </button>
                          {/* <img src={document} alt="document" /> */}
                        </div>
                      </div>
                    </div>
  
                    {/* <progress id="file" value="32" max="100">
                      {" "}
                      32%{" "}
                    </progress> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Current;
