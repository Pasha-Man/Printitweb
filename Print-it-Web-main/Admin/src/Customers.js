import React, { useEffect, useState } from "react";
import Header from "./header";
import "./style.css";
import Table from "react-bootstrap/Table";
import firebase, { db } from "./config";
import moment from "moment";
function Customer() {
  var moment = require("moment");

  const[IsLoading, setIsLoading] = useState(true);
  const [Data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      if (IsLoading) {
        const snapshot = await db.collection("customers").get();
        snapshot.forEach((doc) => {
          const customer = {
            id: doc.id,
            name: doc.data().username,
            address: doc.data().location,
            number: doc.data().phonenumber,
            joinedDate: doc.data().joinedDate,
          };
          setData((props) => {
            return [...props, customer];
          });

          console.log("Data is", customer);
          console.log("Date is", customer.phonenumber);
        });
        setIsLoading(false);
      }
    };
    if (IsLoading) {
      getData();
    }
  }, []);

  const handleBlock = async (id) => {
    try {
      await db.collection("Customer").doc(id).delete();
      alert(`${id} has been deleted`);
    } catch (error) {
      alert("Error while deleting block");
    }
  };

  if (IsLoading) {
    return (
      <div>
        <p>Loading</p>
      </div>
    );
  }

  return (
    <div>
      <Header printer="printer" />
      <div className="custom-container mt-5 mb-5">
        <div
          className="row"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className="col-md-2" style={{ textAlign: "center",width:"20%" }}>
            <h3 className="service-h3">Customers</h3>
          </div>
        </div>
        <div style={{ padding: "0 10%" }} className="mt-5 mb-5">
          <h4 className="boldspan mb-5">See how the Customers are doing</h4>
          <div className="row mt-3 mb-3">
            <div className="col-md-4">
              <div className="print-inner">
                <i className="fa fa-user-o"></i>
                <span>5</span>
                <p className="boldspan">Registered Customers</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="print-inner">
                <i className="fa fa-times"></i>
                <span>0</span>
                <p className="boldspan">Blocked Custoemrs</p>
              </div>
            </div>
          </div>
          <h4 className="boldspan mb-5 mt-5">Manage Customers</h4>
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
                  <th>Customer Name</th>
                  <th>Joined on</th>
                  <th>Contact No.</th>
                  <th>Location</th>
                  <th>Details</th>
                  <th>Block</th>
                </tr>
              </thead>
              <tbody>
                {Data.map((data) => {
                  return (
                    <tr>
                      <td>{data.name}</td>  
                      <td>{data.joinedDate.toDate().toDateString()}</td>
                      {/* <td>{ data.joinedDate.moment().toString()}</td> */}
                      <td>{data.number}</td>
                      <td>{data.address}</td>
                      <td>
                        <button className="blue-button"> Details</button>
                      </td>
                      <td>
                        <button
                          className="blue-button"
                          onClick={(e) =>
                            handleBlock(data.id).then(() =>
                              window.location.reload()
                            )
                          }
                        >
                          Block
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
  );
}
export default Customer;
