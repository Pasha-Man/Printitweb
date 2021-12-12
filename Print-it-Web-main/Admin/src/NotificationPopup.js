import React, { useContext, useState } from "react";
import NotificationContext from "./NotificationContext";

function NotificationPopup() {

   const [Notifications, setNotifications] = useState([
     { id: 1, text: "Ibrahim karim placed an order!" },
     { id: 2, text: "Waqas placed an order!" },
     { id: 3, text: "Saim placed an order!" },
     { id: 4, text: "Haseeb placed an order!" },
   ]);

   const handleDelete = (id) => {
     setNotifications((item) => item.filter((value) => value.id !== id));
   };
  const { popUpActive } = useContext(NotificationContext);
  return (
    <>
      {popUpActive && (
        <div
          style={{
            width: "450px",
            height: "600px",
            background: "white",
            position: "absolute",
            right: 20,
            top: "110px",
            borderRadius: 10,
            background: "#f4f4f4",
            zIndex: 1000,
            border: "1px solid #ccc",
            borderColor: " rgba(0,0,0,.2)",
          }}
        >
          {Notifications.map((item) => (
            <div
              key={item.id}
              style={{
                width: "100%",
                height: 80,
                background: "white",
                display: "flex",
                alignItems: "center",
                padding: "0px 20px",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "30px",
                    background: "orange",
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                    marginRight: "20px",
                  }}
                >
                  <i
                    style={{ color: "white" }}
                    className="fa fa-bell fa-1x"
                  ></i>
                </div>
                <p style={{ fontSize: 18, marginTop: 10 }}>{item.text}</p>
              </div>
              <div
                style={{
                  width: "fit-content",
                  height: "fit-content",
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                <i
                  style={{ color: "grey" }}
                  className="fas fa-trash fa-2x"
                  onClick={() => handleDelete(item.id)}
                ></i>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
export default NotificationPopup;
