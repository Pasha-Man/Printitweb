import React, { useEffect, useState } from "react";
import Header from "./header";
import "./style.css";
import Table from "react-bootstrap/Table";
import firebase, { db } from './config'
import { lang } from "moment";

function Shops () {


  const [IsLoading, setIsLoading] = useState(true)
  const [Data, setData] = useState([])
  useEffect(() => {

    const getData = async () => {
      if (IsLoading) {
        const snapshot = await db.collection('printshops').get()
        // console.log(snapshot.docs.map(doc => doc.data()));
        // var snapRef = db.collection("printshops");
        // var query = snapRef.where('allowed', '==', "true");
        // console.log("query is ", query);

        snapshot.forEach(doc => {
          if(doc.data().allowed === false ){
          // if(db.collection('printshops').where('allowed', '==', "false")  == "true"){
          const shopData = {
            id: doc.id,
            name: doc.data().name,
            number: doc.data().phonenumber,
            startDate: doc.data().joinedDate,
            review: doc.data().feedback,
            long: doc.data().longitude,
            lat: doc.data().latitude,
          };
          setData((props) => {
            return [...props, shopData];
          });
          }

          // console.log("Data is", shopData)
        })
        setIsLoading(false)
      }
    }
    if (IsLoading) {
      getData()
    }
  }, [])

// 
  const handleAllow = (id) => {
    db.collection('printshops').doc(id).update({
      allowed: true
      

  }
  )
//   alert(`${id} has been added`);
}
  const handleBlock = async (id) => {
    try {
      await db.collection('printshops').doc(id).update({ allowed: false })
      alert(`${id} has been blocked`);
    } catch (error) {
      alert("Error while blocking block")
    }


  }
  // const handleAllow = async (id) => {
  //   try {
  //     await db.collection("printshops").doc(id).update({allowed: true})
  //   alert(`${id} has been allowed`);
  // } catch (error) {
  //   alert("Error while allowing");
  // }
  // }



  if (IsLoading) {
    return (
      <div>
        <p>Loading</p>
      </div>

    )
  }

  return (
    <div>
      <Header printer="printer" />
      <div className="custom-container mt-5 mb-5">
        <div
          className="row"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div
            className="col-md-2"
            style={{ textAlign: "center", width: "20%" }}
          >
            <h3 className="service-h3">Print Shops</h3>
          </div>
        </div>
        <div style={{ padding: "0 10%" }} className="mt-5 mb-5">
          <h4 className="boldspan mb-5">See how the shops are doing</h4>
          <div className="row mt-3 mb-3">
            <div className="col-md-4">
              <div className="print-inner">
                <i className="fa fa-home"></i>
                <span>5</span>
                <p className="boldspan">Active Print shops</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="print-inner">
                <i className="fa fa-times"></i>
                <span>0</span>
                <p className="boldspan">Blocked Print shops</p>
              </div>
            </div>
          </div>
          <h4 className="boldspan mb-5 mt-5">Manage Print Shops</h4>
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
                  <th>Shop Name</th>
                  <th>Joined on</th>
                  <th>Contact No.</th>
                  <th>Latitude</th>
                  <th>Longitude</th>
                  <th>Add</th>
                  <th>Block</th>
                </tr>
              </thead>
              <tbody>
                {Data.map((data, id) => {
                  console.log("latitude is", data.lat);
                  console.log("longitude is", data.long);
                  return (
                    <tr>
                      <td>{data.name}</td>
                      <td>{data?.startDate?.toDate().toDateString()}</td>
                      <td>{data.number}</td>
                      <td>{data.lat}</td>
                      <td>{data.long}</td>
                      <td>
                        <button className="blue-button" onClick={handleAllow(data.id)}> Add</button>
                      </td>
                      <td>
                        <button
                          className="blue-button"
                          onClick={(e) =>
                            handleBlock(data.id)
                            .then(() =>
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
export default Shops;
