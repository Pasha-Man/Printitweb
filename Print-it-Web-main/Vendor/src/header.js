import React, { useContext } from "react";
import firebase, { db } from "./config";
import NotificationContext from "./NotificationContext";
import { useHistory } from "react-router-dom";

function Header(props) {
  const { popUpActive, setPopUpActive } = useContext(NotificationContext);
  const history = useHistory();
  const handleSignOut = () => {
    firebase.auth().signOut();
    history.replace("/NewSignIn");
  };
  return (
    <div>
      <div class="container-scroller" id="app">
        <nav className="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
          <div class="text-center navbar-brand-wrapper d-flex align-items-top justify-content-center">
            <button
              style={{ fontSize: "2.5rem" }}
              class="navbar-toggler navbar-toggler align-self-center"
              type="button"
              data-toggle="minimize"
            >
              <span class="fa fa-bars" style={{ color: "white" }}></span>
            </button>
          </div>
          <div class="navbar-menu-wrapper d-flex align-items-center">
            <i
              className="fa fa-long-arrow-alt-left fa-2x"
              onClick={handleSignOut}
            ></i>
            <h1>Print it</h1>
            <i
              className="fa fa-comments-o fa-2x"
              onClick={() => {
                window.location.href = "/Chat";
              }}
            ></i>
            <i
              className="fa fa-bell fa-2x"
              onClick={() => {
                setPopUpActive(!popUpActive);
              }}
            ></i>
          </div>
        </nav>
        <div
          class="container-fluid page-body-wrapper"
          style={{
            paddingRight: "0px",
            paddingLeft: "0px",
            paddingTop: "100px",
          }}
        >
          <nav class="sidebar sidebar-offcanvas">
            <ul class="nav">
              <li class="nav-item center-item" className={props.printer}>
                <a class="nav-link" href="/home">
                  <i class="fa fa-home fa-2x center-icon"></i>
                </a>
              </li>
              <li class="nav-item center-item">
                <a class="nav-link" href="/Order">
                  <i class="fa fa-file-alt fa-2x center-icon"></i>
                </a>
              </li>
              <li class="nav-item center-item" className={props.service}>
                <a class="nav-link" href="/service">
                  <i class="fa fa-calendar fa-2x center-icon"></i>
                </a>
              </li>
              <li class="nav-item center-item">
                <a class="nav-link" href="/Wallet">
                  <i class="fa fa-briefcase fa-2x center-icon"></i>
                </a>
              </li>
              <li class="nav-item center-item" className={props.setting}>
                <a class="nav-link" href="/settings">
                  <i class="fa fa-cog fa-2x center-icon"></i>
                </a>
              </li>
              {/* <li class="nav-item center-item" className={props.setting}>
                <a class="nav-link" href="/chat">
                  <i class="fa fa-comments fa-2x center-icon"></i>
                </a>
              </li> */}
            </ul>
          </nav>
          <div class="main-panel">
            <div class="content-wrap">
              {/* <div>
                <div class="col-md-12"></div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
