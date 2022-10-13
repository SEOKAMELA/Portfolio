import React from "react";
import "./Success_message.css";

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const SuccessMessage = () => {

  const button = document.querySelector("btn")
  const toasts = document.querySelector(".toasts")
  const closeIcon = document.querySelector(".close")
  const progress = document.querySelector(".progress")
    

  button?.addEventListener("click", () => {
    toasts.classList.add("active");
    progress.classList.add("active");

    setTimeout(() => {
      progress.classList.remove("active")
    }, 5000);

    setTimeout(() => {
      progress.classList.remove("active")
    }, 5300);
  },);

  closeIcon?.addEventListener("click", () => {
    toasts.classList.remove("active");

    setTimeout(() => {
      progress.classList.remove("active")
    }, 300);
  },);




  return (
    <div className="toasts">
      <div className="toasts-container">
        <i className="fas fa-solid fa-check check"></i>
        <div className="message">
          <span className="text text-1"> Success</span>
          <span className="text text-2"> Message sent</span>
        </div>
      </div>
      <i className="fa-solid fa-xmark close"></i>
      <div className="porgress active"></div>
      <button className="btn"></button>
    </div>
    
  );
};

export default SuccessMessage;
