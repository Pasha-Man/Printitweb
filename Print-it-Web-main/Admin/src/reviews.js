import React, { useEffect, useState } from "react";
import Header from "./header";
import "./style.css";
import Table from "react-bootstrap/Table";
import firebase, { db } from "./config";

function Reviews() {
  const [IsLoading, setIsLoading] = useState(true);
  const [Data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      if (IsLoading) {
        const snapshot = await db.collection("printshops").get();
        snapshot.forEach((doc) => {
          var shopData = {
            id: doc.id,
            name: doc.data().name,
            // "location": doc.data().location,
            number: doc.data().phonenumber,
            startDate: doc.data().joinedDate,
            review: doc.data().feedback,
            long: doc.data().longitude,
            lat: doc.data().latitude,
          };
          setData((props) => {
            return [...props, shopData];
          });
          console.log("Data is", shopData);
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

  return (
    <div>
      <Header printer="printer" />
      <div className="custom-container mt-5 mb-5">
        <div
          className="row"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className="col-md-2" style={{ textAlign: "center" }}>
            <h3 className="service-h3">Reviews</h3>
          </div>
        </div>
        <div style={{ padding: "0 10%" }} className="mt-5 mb-5">
          <h4 className="boldspan mb-5">All the reviews received</h4>
          <div>
            <Table striped bordered hover size="sm">
              <thead>
                <tr className="Top-Table-Bar">
                  {/* <th>Customer Name</th> */}
                  <th>Reviews</th>
                  <th>Date</th>
                  <th>Print Shop</th>
                  {/* <th>Details</th> */}
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {Data.map((data) => {
                  return (
                    <tr>
                      {/* <td>{data.username}</td> */}
                      <td>{data.review +" Stars"}</td>
                      <td>{data?.startDate?.toDate().toDateString()}</td>
                      <td>{data.name}</td>
                      {/* <td>
                        <button className="blue-button"> Details</button>
                      </td> */}
                      <td>
                        <button
                          className="blue-button"
                          onClick={(e) =>
                            handleBlock(data.id).then(() =>
                              window.location.reload()
                            )
                          }
                        >
                          Delete
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
  );
}
export default Reviews;
