import React from "react";

const SuccessMessage = () => {
  return (
    <div className="toast-succeess">
      <div className="toast-container">
        <i className="fas fa-solid fa-check check"></i>
        <div className="message">
          <span className="text text-1">Success</span>
          <span className="text text-2">Messages sent successfully</span>
        </div>
      </div>
      <i className="fa-solid fa-xmark"></i>
      <div className="progress"></div>
    </div>
  );
};

export default SuccessMessage;
