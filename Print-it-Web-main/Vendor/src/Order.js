import React from "react";
import Header from "./header";
import firebase from "firebase";
import NotificationPopup from "./NotificationPopup";
import "./style.css";
import axios from 'axios';
class Order extends React.Component{
  constructor(props){
    super(props)
    this.state = {
    totalorder:0,
    pending:0,
    delivered:0,
    }
  }
  componentDidMount(){
    this.trySome()
  }
  trySome = () => {
    axios.get('http://localhost:8000/vendor/home/stats')
    .then( (res) => {
      console.log(res.data)
      this.setState({pending: Number(res.data[1]), delivered: Number(res.data[0])})})
    .catch(error =>{console.log(error)})
  }
  createSome =  () =>{
    var refe = firebase.database().ref("Queue")
    refe.child("delivered").set("5")
    refe.child("pending").set("1")
  }
  render(){
    return (
      <div>
        <Header printer="printer" />
        <NotificationPopup />
        <div className="custom-container mt-5 mb-5">
          <div
            className="row"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div className="col-md-4" style={{ textAlign: "center" }}>
              <h3 className="service-h3">Orders</h3>
            </div>
          </div>
          <div style={{ padding: "0 10%" }} className="mt-5 mb-5">
            <h4 className="boldspan mb-5">See orders of the Shop</h4>
            <div className="row mt-3 mb-3">
              <div className="col-md-4">
                <div className="print-inner">
                  <span>{Number(this.state.pending)+Number(this.state.delivered)}</span>
                  <p className="boldspan">Total Order</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="print-inner">
                  <span>{this.state.pending}</span>
                  <p className="boldspan">Pending Order</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="print-inner">
                  <span>{this.state.delivered}</span>
                  <p className="boldspan">Orders Delivered</p>
                </div>
              </div>
            </div>
            <h4 className="boldspan mb-5 mt-5">Check Order</h4>
            <div
              className="d-flex flex-row"
              style={{
                padding: "10px 0px",
              }}
            >
              <button
                className="greenButton"
                onClick={() => {
                  window.location.href = "/CurrentOrder";
                }}
              >
                Current Order
              </button>
              <div
                style={{
                  background: "#F6F6F6",
                  borderRadius: "8px",
                  padding: "20px 20px",
                  width: "50%",
                  marginLeft: "295px",
                }}
              >
                <h4>check current order</h4>
              </div>
            </div>
            <div
              className="d-flex flex-row"
              style={{
                padding: "10px 0px",
              }}
            >
              <button
                className="yellowButton"
                onClick={() => {
                  window.location.href = "/OrderHistory";
                }}
              >
                Order History
              </button>
              <div
                style={{
                  background: "#F6F6F6",
                  borderRadius: "8px",
                  padding: "20px 20px",
                  width: "50%",
                  marginLeft: "300px",
                }}
              >
                <h4> See the details of orders</h4>
              </div>
            </div>
            <div
              className="d-flex flex-row"
              style={{
                padding: "10px 0px",
              }}
            >
              <button
                className="redButton"
                onClick={() => {
                  window.location.href = "/CancelledOrder";
                }}
              >
                Cancelled Order
              </button>
              <div
                style={{
                  background: "#F6F6F6",
                  borderRadius: "8px",
                  padding: "20px 20px",
                  width: "50%",
                  marginLeft: "270px",
                }}>
                <h4> See the details of Cancelled orders</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Order;
