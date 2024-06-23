import React from "react";
import { useNavigate } from "react-router-dom";

const footer = () => {
  const navigate = useNavigate();

  function toInsta() {
    window.open("https://www.instagram.com", "_blank");
  }
  function toTg() {
    window.open("https://www.telegram.com/", "_blank");
  }
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="f-logo">
          <h1>BORGO</h1>
          <p>Samarali e'lonlar sayti</p>
        </div>
        <div className="social-madias">
          <h3>IJTIMOIY TARMOQLAR</h3>
          <div>
            <i class="bx bxl-instagram insta" onClick={toInsta}></i>
            <i class="bx bxl-telegram tg" onClick={toTg}></i>
          </div>
        </div>
      </div>
      <br />
      <hr className="footer-hr" />
      <p className="bhh">© Barcha huquqlar himoyalangan</p>
    </footer>
  );
};

export default footer;
