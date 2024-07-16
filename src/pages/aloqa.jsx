import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import HeaderToPhones from "../components/headerToPhones";
import ContactImg from "../assets/contact.png";

const aloqa = () => {
  return (
    <div className="contact-page">
      <Header />
      <div className="aloqa-container flex justify-center align-center">
        <div className="img">
          <img src={ContactImg} alt="contact image" />
        </div>
        <div className="contact">
          <h2>BORGO.UZ ga xush kelibsiz!</h2>
          <p>Biz blan bog'laning</p>
          <form>
            <input type="text" placeholder="Ism" className="user-name" />
            <div className="phone-number">
              <input type="text" value="+998" readOnly />
              <input
                type="number"
                placeholder="Telefon raqam"
                className="user-phoneNumber"
              />
            </div>
            <textarea
              cols="30"
              rows="4"
              className="user-message"
              placeholder="Xabaringizni yozing"
            ></textarea>
            <br />
            <div className="send-button">
              <button type="submit">Yuborish</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
      <HeaderToPhones/>
    </div>
  );
};

export default aloqa;
