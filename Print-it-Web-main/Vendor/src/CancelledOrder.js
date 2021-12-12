import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Header from "./header";
import NotificationPopup from "./NotificationPopup";
import "./style.css";
import firebase, { db } from "./config";
import axios from 'axios';
class Cancelled extends React.Component{
  constructor(){
    super()
    this.state={
      data:[]
    }
  }
  componentDidMount(){
    this.getdata()
  }
  getdata= async()=>{
    console.log("wait")
   axios.get('http://localhost:8000/vendor/display/canceledhistory')
    .then( (res) => {
      console.log(res.data)
      this.setState({data:(this.state.data.concat(res.data))})
   })
   .catch(error =>{console.log(error)}) 
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
                <h3 className="service-h31">Cancelled Order</h3>
              </div>
            </div>
            <div style={{ padding: "0 10%" }} className="mt-5 mb-5">
              <h3 className="boldspan mb-5">
                See the history of orders that were not paid
              </h3>
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
                        <th>Customer Name</th>
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
                          <td>{d.payment}</td>
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
    );

  }
  
}
export default Cancelled;
