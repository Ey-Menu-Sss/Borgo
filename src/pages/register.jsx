import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import HeaderToPhones from "../components/headerToPhones";
import SignUpImg from "../assets/signup.png";

const register = () => {
  const navigate = useNavigate();
  function navigateToLogin() {
    navigate("/login");
  }
  return (
    <div>
      <Header />
      <div className="register-container">
        <img src={SignUpImg} alt="sign up image" />
        <form>
          <h2>Borgo.uz ga xush kelibsiz</h2>
          <p>Ro'yhatdan o'tish</p>

          <input type="text" placeholder="Ism" />
          <input type="text" placeholder="Familiya" />
          <div className="phone-number">
            <input type="text" value="+998" readOnly />
            <input
              type="number"
              placeholder="Telefon raqam"
              className="user-phoneNumber"
            />
          </div>
          <input type="text" placeholder="Elektron pochta (Majburiy emas)" />
          <input type="text" placeholder="Parol" />
          <input type="text" placeholder="Parolni tasdiqlang" />
          <button type="submit" onClick={navigateToLogin}>
            Royhatdan o'tish
          </button>
          <div className="or">
            <div></div>
            <p>Yoki</p>
            <div></div>
          </div>
          <div className="link-to-login">
            <p>Hisobingiz bormi?</p>
            <Link className="link" to={"/login"}>
              Hisobga kirish
            </Link>
          </div>
        </form>
      </div>
      <Footer />
      <HeaderToPhones/>
    </div>
  );
};

export default register;
