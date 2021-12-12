import React from "react";
import Header from "./header";
import  "./style.css";
function Home(){

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
            <h3 className="service-h3">Admin Panel</h3>
          </div>
        </div>
        <div style={{ padding: "0 10%" }} className="mt-5 mb-5">
          <h4 className="boldspan mb-5">See how the shops are doing</h4>
          <div className="row mt-3 mb-3">
            <div className="col-md-3" style={{ width: "40%" }}>
              <div className="print-inner">
                <i className="fa fa-user-o"></i>
                <span>40</span>
                <p className="boldspan">Registered Customer</p>
              </div>
            </div>

            <div className="col-md-4" style={{ width: "40%" }}>
              <div className="print-inner">
                <i className="fa fa-home"></i>
                <span>5</span>
                <p className="boldspan">Registered Print shops</p>
              </div>
            </div>
          </div>
          <h4 className="boldspan mb-5 mt-5">Track Orders</h4>
          <div id="chart_div"></div>
        </div>
      </div>
    </div>
  );
}
export default Home;
