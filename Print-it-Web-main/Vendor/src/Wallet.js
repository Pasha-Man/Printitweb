import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Header from "./header";
import { Secret_key, STRIPE_PUBLISHABLE_KEY } from './keys';
import NotificationPopup from "./NotificationPopup";
import "./style.css";
import firebase, { db } from "./config";
import axios from 'axios';
const CURRENCY = 'USD';
var CARD_TOKEN = null;

class Wallet extends React.Component{
  constructor(props){
    super(props)
    this.state={
      id:"Zj4AbtnFYnPwceyeF6cW",
      data:[],
      status:"",
      amount:0,
      balance:0,
      tBalance:0,
      prevPayment:0,
      creditcard:"",
      his:[],
      filter:"wallet"
    }
  }
  async componentDidMount(){
    this.getdata()
    let pament_data = await this.balances(); 
    this.setState({balance:(this.state.balance=(pament_data.available[0].amount))})
    console.log('pament_data', pament_data.available[0].amount) 
  }
  getdata = () => {
    console.log("wait")
    axios.get('http://localhost:8000/vendor/display/WalletStatus')
    .then( (res) => {
      console.log(res.data)
      this.setState({data:(this.state.data.concat(res.data))})
   })
   .catch(error =>{console.log(error)})   
  }
  details =  async() => {
    try{
     db.collection('vendor').get().then((values)=>{         
       values.docs.forEach((d)=>{           
         if(d.id==this.state.id){ 
           this.setState({creditcard:(this.state.creditcard=d.data().creditcard)})
       }})})
        console.log('req done')
    }catch(e){
      console.log(e)
   }}
   getCreditCardToken = () => {
   // alert()
   const card = {
     'card[number]': '4242 4242 4242 4242',
     'card[exp_month]': '9', 
     'card[exp_year]': '22',
     'card[cvc]': '555'
   };
   return fetch('https://api.stripe.com/v1/tokens', {
     headers: {
       // Use the correct MIME type for your server
       Accept: 'application/json',
       // Use the correct Content Type to send data to Stripe
       'Content-Type': 'application/x-www-form-urlencoded',
       // Use the Stripe publishable key as Bearer
       Authorization: `Bearer ${STRIPE_PUBLISHABLE_KEY}`
     },
     // Use a proper HTTP method
     method: 'post',
     // Format the credit card data to a string of key-value pairs
     // divided by &
     body: Object.keys(card)
       .map(key => key + '=' + card[key])
       .join('&')
   }).
   then(response => response.json())
   .catch((error)=>console.log(error))
 }
 /**
  * The method imitates a request to our server.
  *
  * @param creditCardToken
  * @return {Promise<Response>}
  */
  subscribeUser = (creditCardToken) => { 
   return new Promise((resolve) => { 
     console.log('Credit card token\n', creditCardToken);
     CARD_TOKEN = creditCardToken.id;
     setTimeout(() => {
       resolve({ status: true });
     }, 1000);
   });
  }
  setValues= async () => {
     console.log("called")
    let creditCardToken;
     try {
       // Create a credit card token
       creditCardToken = await this.getCreditCardToken();
       // console.log("creditCardToken", creditCardToken)
       if (creditCardToken.error) {
         alert("creditCardToken error");
         return;
       }
     } catch (e) {
       console.log("e",e);
       return;
     }
     // Send a request to your server with the received credit card token
     const { error } = await this.subscribeUser(creditCardToken);
     // Handle any errors from your server
     if (error) {
       alert(error)
     } 
     else {     
       let pament_data = await this.charges();
       console.log('pament_data', pament_data); 
       if(pament_data.status == 'succeeded'){
         console.log("Payment Successfully"); 
         alert('Payment Successful'); 
        try{        
           db.collection('ventransactions').add({
               'id':this.state.id,
               'prev': this.state.amount,
               'status': "Transfered"
           })
        console.log('req done')
        }catch(e){
         console.log(e)
        }
       }
       else{
         alert('Payment failed'); 
       }}
     }
  charges = async () => {
     const card = {
         'amount': Math.ceil(Number(this.state.amount)*100), 
         'currency': CURRENCY,
         'source': CARD_TOKEN,
         'description': "Print it Customer"
       };
        
       return fetch('https://api.stripe.com/v1/charges', {
         headers: {
           // Use the correct MIME type for your server
           Accept: 'application/json',
           // Use the correct Content Type to send data to Stripe
           'Content-Type': 'application/x-www-form-urlencoded',
           // Use the Stripe publishable key as Bearer
           Authorization: `Bearer ${Secret_key}`
         },
         // Use a proper HTTP method
         method: 'post',
         // Format the credit card data to a string of key-value pairs
         // divided by &
         body: Object.keys(card)
           .map(key => key + '=' + card[key])
           .join('&')
       }).then(response => response.json());
  };
  balances = async () => { 
    return fetch('https://api.stripe.com/v1/balance', {
      headers: {
        // Use the correct MIME type for your server
        Accept: 'application/json',
        // Use the correct Content Type to send data to Stripe
        'Content-Type': 'application/x-www-form-urlencoded',
        // Use the Stripe publishable key as Bearer
        Authorization: `Bearer ${Secret_key}`
      },
      // Use a proper HTTP method
      method: 'get',
      // Format the credit card data to a string of key-value pairs
      // divided by &
      
    }).then(response => response.json());
  }
  updateval = async (i) =>{
    await axios.put('http://localhost:8000/vendor/status/'+this.state.data[i].reqid, this.state.data[i].reqid).then(response => {
      console.log(response)
  }).catch(err =>{
    console.log(err)
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
          style={{ backgroundImage: "./backgroundAll.png" }}>
          <div
            className="row"
            style={{ display: "flex", justifyContent: "center" }}>
            <div className="col-md-4" style={{ textAlign: "center" }}>
              <h3 className="service-h3"> Wallet</h3>
            </div>
          </div>
          <div style={{ padding: "0 10%" }} className="mt-5 mb-5">
            <h3 className="boldspan1 mb-5">See and manage your wallet</h3>
            <div className="row mt-3 mb-5 ">
              <div className="col-md-4 mx-auto">
                <div className="print-inner1">
                  <p className="boldspan">Add money to Customer Wallet</p>
                  <div
                    style={{
                      display: "flex",
                    }}>
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
                          placeholder={this.state.amount}
                          onChange={(val)=>{
                          this.setState({amount:this.state.amount = val.target.value})
                          console.log(this.state.amount)
                          }}/>
                          <button className="service-h2" style={{ border: "none" }}
                            onClick={() => this.setValues()}>
                             ADD
                          </button>
                    </div>
                </div>
              </div>

              <div className="col-md-4 mx-auto">
                <div className="print-inner1">
                  <h5 className="boldspan">Balance in Wallet</h5>
                  <p className="boldspan">{this.state.balance+ " Rs"}</p>
                </div>
              </div>
            </div>

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
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr className="Top-Table-Bar">
                      <th>Order ID</th>
                      <th>Ordered</th>
                      <th>Delivered</th>
                      <th>Status</th>
                      <th>Details</th>
                    </tr>
                  </thead>
                  <tbody>
                  {this.state.data.map((d,i) => {
                      return (
                        <tr>
                          <td>{d.reqid}</td>
                          <td>Dec 14, 2020</td>
                          <td>Dec 14, 2020</td>
                          <td>
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
                              placeholder={d.payment}
                              onChange={(val)=>{ 
                               this.setState({status:this.state.status = val.target.value})
                              }}/>
                          <button
                             onClick={(val)=>{ 
                                this.updateval(i)
                              }}
                            >SAVE
                            </button>
                          </td>
                          <td>
                            <button
                              className="blue-button"
                              // onClick={(e) =>
                              //   handleBlock(data.id).then(() =>
                              //     window.location.reload()
                              // )</td>
                              // }
                            >
                              details
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
 }}
export default Wallet;
