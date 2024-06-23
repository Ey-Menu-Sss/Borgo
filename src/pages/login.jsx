import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import HeaderToPhones from "../components/headerToPhones";
import LoginImg from "../assets/login.png";

const login = () => {
  const navigate = useNavigate()
  function handleEnterToProfile() {
    // backga zapros jo'natip token olp, localstoragega saqlar edim
    navigate('/profile/dashboard')
  }

  return (
    <div>
      <Header />
      <div className="register-container">
        <img src={LoginImg} alt="sign up image" />
        <form>
          <h2>Borgo.uz ga xush kelibsiz</h2>
          <p>Ro'yhatdan o'tish</p>
          <div className="phone-number">
            <input type="text" value="+998" readOnly />
            <input
              type="number"
              placeholder="Telefon raqam"
              className="user-phoneNumber"
              required
            />
          </div>
          <input type="text" placeholder="Parol" required />
          <Link to={'/'} className="forgot-psw">Parolni unutdingizmi?</Link>
          <button type="submit" onClick={handleEnterToProfile}>Kirish</button>
          <div className="or">
            <div></div>
            <p>Yoki</p>
            <div></div>
          </div>
          <div className="link-to-login">
            <p>Sizning hisobingiz yoqmi?</p>
            <Link className="link" to={"/register"}>
              Ro'yhatdan o'tish
            </Link>
          </div>
        </form>
      </div>
      <Footer />
      <HeaderToPhones/>
    </div>
  );
};

export default login;
