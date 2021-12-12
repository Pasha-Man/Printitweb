import React from "react";
import Header from "./header";
import firebase, { db } from "./config";
import NotificationPopup from "./NotificationPopup";
import axios from 'axios';
class Settings extends React.Component{
  constructor(props){
    super(props)
    this.state={
      id:localStorage.getItem("id"),
      photo:String,
      data:{},
      email:'', 
      password:'',
      phonenumber:'',
      creditcard:'',
      upaisa:'',
      name:'',
      edisable:true,
      pdisable:true,
      phdisable:true,
      crdisable:true,
      udisable:true,
      ddisable:true,
      ewrite:'',
      pwrite:'', 
      cwrite:'',
      phwrite:'',
      crwrite:'', 
      uwrite:'', 
      emsg:'',
      pmsg:'',
      cmsg:'', 
      phmsg:'',
      crmsg:'', 
      umsg:'',
    }
  }
  componentDidMount(){ 
    console.log("wait")
    axios.get('http://localhost:8000/vendor/settings/'+this.state.id)
    .then( (res) => {
      console.log(res.data)
      this.setState({data:(this.state.data=res.data)})
      console.log(this.state.data.username)
       this.setState({name:(this.state.name=this.state.data.username)})
          this.setState({email:(this.state.email=this.state.data.email)})
          this.setState({password:(this.state.password=this.state.data.password)})
          this.setState({phonenumber:(this.state.phonenumber=this.state.data.phonenumber)})
          this.setState({creditcard:(this.state.creditcard=this.state.data.creditcard)})
          this.setState({upaisa:(this.state.upaisa = this.state.data.upaisa)})

          this.setState({ewrite:(this.state.ewrite=this.state.data.email)})
          this.setState({pwrite:(this.state.pwrite=this.state.data.password)})
          this.setState({cwrite:(this.state.cwrite=this.state.data.password)})
          this.setState({phwrite:(this.state.phwrite=this.state.data.phonenumber)})
          this.setState({crwrite:(this.state.crwrite=this.state.data.creditcard)})
          this.setState({uwrite:(this.state.uwrite=this.state.data.upaisa)})
   })
   .catch(error =>{console.log(error)}) 
  
  }
  saveChanges = async ()=>{  
    console.log("called")
    if(this.state.pwrite==this.state.cwrite){
      console.log(this.state.ewrite,this.state.pwrite,this.state.phwrite,this.state.crwrite,this.state.uwrite)
        await db.collection('vendor').doc(this.state.id).update({
          email:(this.state.ewrite), 
          password:(this.state.pwrite),
          phonenumber:(this.state.phwrite),
          creditcard:(this.state.crwrite), 
          upaisa:(this.state.uwrite)
        })
      }
      this.setState({email:(this.state.email=this.state.ewrite)})
      this.setState({ewrite:(this.state.ewrite='')})
      this.setState({password:(this.state.password=this.state.pwrite)})
      this.setState({pwrite:(this.state.pwrite='')})
      this.setState({phonenumber:(this.state.phonenumber=this.state.phwrite)})
      this.setState({phwrite:(this.state.phwrite='')})
      this.setState({creditcard:(this.state.creditcard=this.state.crwrite)})
      this.setState({crwrite:(this.state.crwrite='')})
      this.setState({upaisa:(this.state.upaisa=this.state.uwrite)})
      this.setState({uwrite:(this.state.uwrite='')})

    
  } 
  render(){
    return (
      <div>
        <Header setting="setting" />
        <NotificationPopup />
        <div className="custom-container mb-5 mt-5">
          <div
            className="row"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div className="col-md-4" style={{ textAlign: "center" }}>
              <h3 className="service-h3">Settings</h3>
            </div>
          </div>
          <div className="service-pad">
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
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "70%",
                    justifyContent: "space-between",
                  }}
                  className="mb-4"
                >
                  <label
                    for="email"
                    className="boldspan"
                    style={{ marginRight: "40px", fontSize: "20px" }}
                  >
                    Email
                  </label>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <input
                      id="email"
                      type="text"
                      style={{
                        border: "1px solid #c7c5c5",
                        borderRight: "0",
                        height: "35px",
                        outline: "none",
                        borderRadius: "4px 0 0 4px",
                        paddingLeft: "5px",
                        width: "250px",
                      }}
                      placeholder={this.state.email}
                      onChange={(value)=>{
                        let reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        this.setState({ewrite:(this.state.ewrite=value.target.value)})
                        if (reg.test(this.state.ewrite) == false) {
                            console.log("Email is Not Correct")
                            this.setState({emsg:(this.state.emsg='Wrong Information')})
                            console.log(this.state.ewrite)
                        }
                        else {
                            console.log("Email is Correct")
                            console.log(this.state.ewrite)
                            this.setState({emsg:(this.state.emsg='')})
                            
                        }
                        this.setState({ewrite:(this.state.ewrite=String(value.target.value))})
                      }}
                      
                    ></input>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "70%",
                    justifyContent: "space-between",
                  }}
                  className="mb-4"
                >
                  <label
                    for="password"
                    className="boldspan"
                    style={{ marginRight: "40px", fontSize: "20px" }}
                  >
                    Password
                  </label>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <input
                      id="password"
                      type="password"
                      style={{
                        border: "1px solid #c7c5c5",
                        borderRight: "0",
                        height: "35px",
                        outline: "none",
                        borderRadius: "4px 0 0 4px",
                        paddingLeft: "5px",
                        width: "250px",
                      }}
                      placeholder={this.state.password}
                      onChange={(value)=>{
                        var reg = /^(?=.*\d)(?=.*[a-z]).{0,9}$/
                        this.setState({pwrite:(this.state.pwrite=value.target.value)})
                        if(reg.test(this.state.pwrite)==false){ 
                          this.setState({pmsg:(this.state.pmsg='Wrong Information')})
                          console.log('Wrong, try another...')
                        }
                        else{              
                          console.log("password is Correct")
                          this.setState({pmsg:(this.state.pmsg='')})
                          console.log(this.state.pwrite)
                        }
                        this.setState({pwrite:(this.state.pwrite=String(value.target.value))})
                      }}
                      
                    ></input>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "70%",
                    justifyContent: "space-between",
                  }}
                  className="mb-4"
                >
                  <label
                    for="number"
                    className="boldspan"
                    style={{ marginRight: "40px", fontSize: "20px" }}
                  >
                    Confirm Password
                  </label>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <input
                      id="number"
                      type="text"
                      style={{
                        border: "1px solid #c7c5c5",
                        borderRight: "0",
                        height: "35px",
                        outline: "none",
                        borderRadius: "4px 0 0 4px",
                        paddingLeft: "5px",
                        width: "250px",
                      }}
                      placeholder={this.state.password}
                      onChange={(value)=>{
                        var reg = /^(?=.*\d)(?=.*[a-z]).{0,9}$/
                        this.setState({cwrite:(this.state.cwrite=value.target.value)})
                        if(reg.test(this.state.cwrite) == false){ 
                          this.setState({cmsg:(this.state.cmsg='Wrong Information')})
                          console.log('Wrong, try another...')
                        }
                        else{              
                          console.log("password is Correct")
                          this.setState({cmsg:(this.state.cmsg='')})
                          console.log(this.state.cwrite)
                        }
                        this.setState({cwrite:(this.state.cwrite=String(value.target.value))})
                      }}
                    ></input>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "70%",
                    justifyContent: "space-between",
                  }}
                  className="mb-4"
                >
                  <label
                    for="shop"
                    className="boldspan"
                    style={{ marginRight: "40px", fontSize: "20px" }}
                  >
                    Phone Number
                  </label>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <input
                      id="shop"
                      type="text"
                      style={{
                        border: "1px solid #c7c5c5",
                        borderRight: "0",
                        height: "35px",
                        outline: "none",
                        borderRadius: "4px 0 0 4px",
                        paddingLeft: "5px",
                        width: "250px",
                      }}
                      placeholder={this.state.phonenumber}
                      onChange={(value)=>{
                        let reg = /^\+?([0-9]{2})\)?[ . ]?([0-9]{3})[ . ]?([0-9]{3})[ . ]?([0-9]{4})$/
                        this.setState({phwrite:(this.state.phwrite=value.target.value)})
                        if (reg.test(this.state.phwrite) == false) {
                          console.log("phone number is Not Correct")
                          this.setState({phwrite:(this.state.phwrite='')})
                          this.setState({phmsg:(this.state.phmsg='Wrong Information')})
                        }
                        else {
                          console.log("phone number is Correct")
                          this.setState({phmsg:(this.state.phmsg='')})
                          console.log(this.state.phwrite)
                        }   
                        this.setState({phwrite:(this.state.phwrite=String(value.target.value))})
                      }}
                    ></input>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "70%",
                    justifyContent: "space-between",
                  }}
                  className="mb-4"
                >
                  <label
                    for="account"
                    className="boldspan"
                    style={{ marginRight: "40px", fontSize: "20px" }}
                  >
                    Account Number
                  </label>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <input
                      id="account"
                      type="text"
                      style={{
                        border: "1px solid #c7c5c5",
                        borderRight: "0",
                        height: "35px",
                        outline: "none",
                        borderRadius: "4px 0 0 4px",
                        paddingLeft: "5px",
                        width: "250px",
                      }}
                      placeholder={this.state.creditcard}
                      onChange={(value)=>{
                        let reg = /^([0-9]{4})?[ . ]?([0-9]{4})[ . ]?([0-9]{4})[ . ]?([0-9]{4})$/
                        this.setState({crwrite:(this.state.crwrite=value.target.value)})
                        if (reg.test(this.state.crwrite) == false) {
                          console.log("credit card number is Not Correct")
                          this.setState({crwrite:(this.state.crwrite='')})
                          this.setState({crmsg:(this.state.crmsg='Wrong Information')})
                        }
                        else {
                          console.log("credit card number is Correct")
                          console.log(this.state.crwrite)
                          this.setState({crmsg:(this.state.crmsg='')})
                        }   
                        this.setState({crwrite:(this.state.crwrite=String(value.target.value))})
                      }}
                    />
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "70%",
                    justifyContent: "space-between",
                  }}
                  className="mb-4"
                >
                  <label
                    for="jazz"
                    className="boldspan"
                    style={{ marginRight: "40px", fontSize: "20px" }}
                  >
                    UPaisa Account
                  </label>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <input
                      id="jazz"
                      type="text"
                      style={{
                        border: "1px solid #c7c5c5",
                        borderRight: "0",
                        height: "35px",
                        outline: "none",
                        borderRadius: "4px 0 0 4px",
                        paddingLeft: "5px",
                        width: "250px",
                      }}
                      placeholder={this.state.upaisa}
                      onChange={(value)=>{
                        let reg = /^\+?([0-9]{2})\)?[ . ]?([0-9]{3})[ . ]?([0-9]{3})[ . ]?([0-9]{4})$/
                        this.setState({uwrite:(this.state.uwrite=value.target.value)})
                        if (reg.test(this.state.uwrite) == false) {
                          console.log("upaisa number is Not Correct")
                          this.setState({uwrite:(this.state.uwrite='')})
                          this.setState({umsg:(this.state.umsg='Wrong Information')})
                        } 
                        else {
                          console.log("upaisa is Correct")
                          console.log(this.state.uwrite)
                          this.setState({umsg:(this.state.umsg='')})
                        }   
                        this.setState({uwrite:(this.state.uwrite=String(value.target.value))})
                        console.log(this.state.umsg, this.state.uwrite)
                      }}
                    />
                  </div>
                </div>
                <div className="row" style={{ display: "flex", justifyContent: "center" }}>
                  <div className="col-md-4" style={{ textAlign: "center" }}>
                    <button className="service-h3" style={{ border: "none" }}
                    onClick={() => this.saveChanges()}>
                      Save
                    </button>
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
export default Settings;
