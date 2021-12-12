import React from "react";
import Header from "./header";
import NotificationPopup from "./NotificationPopup";
import "./style.css";
import firebase from "firebase";
import {Bar, Line, Pie} from 'react-chartjs-2';
import axios from 'axios';
class Home extends React.Component {
  constructor(props){
    super(props)
    this.state={
      order:0,
      cancel:0,
    }
  }
  async componentDidMount(){
     this.createSome()
     this.trySome()
    

  }
  trySome = () => {
  axios.get('http://localhost:8000/vendor/home/stats')
    .then( (res) => {
      console.log(res.data)
      this.setState({order: Number(res.data[1]), cancel: Number(res.data[0])})})
    .catch(error =>{console.log(error)})
  }
  createSome = async () =>{
    let a=0
    let b=0
   firebase.firestore().collection('orders').get().then((values)=>{        
      values.docs.forEach( async (d)=>{ 
        if(d.data().payment=="paid"){
          a =a+1
        }
        else{
          b=b+1
        }
        var refe = firebase.database().ref("New")
        refe.update({orderToday:a,canceledToday:b})
        
    })})
    await this.trySome()
    
  }
  render(){
    return (
      <div>
        <Header printer="printer" />
        <NotificationPopup />
        <div className="custom-container mt-5 mb-5" style={{ backgroundImage: "./backgroundAll.png"}}>
          <div
            className="row"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div className="col-md-4" style={{ textAlign: "center" }}>
              <h3 className="service-h3">Printer Shop 2</h3>
            </div>
          </div>
          <div style={{ padding: "0 10%" }} className="mt-5 mb-5">
            <h4 className="boldspan mb-5">Show how your business is going</h4>
            <div className="row mt-3 mb-3">
              <div className="col-md-4">
                <div className="print-inner">
                  <i className="fa fa-file"></i>
                  <span>{this.state.order}</span>
                  <p className="boldspan">Paid Orders</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="print-inner">
                  <i className="fa fa-times"></i>
                  <span>{this.state.cancel}</span>
                  <p className="boldspan">Cancelled Orders</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="print-inner">
                  <i className="fa fa-file"></i>
                  <span>{Number(this.state.order)+Number(this.state.cancel)}</span>
                  <p className="boldspan">Total Order</p>
                </div>
              </div>
            </div>
            <h4 className="boldspan mb-5 mt-5">
              Show how your business is going
            </h4>
            <div id="chart_div">
           </div>
          </div>
        </div>
      </div>
    )}
}
export default Home;
