import React, { useState } from "react";

// importing components ....
import Header from "../components/header";
import Footter from "../components/footer";
import UserProfile from "../components/userProfile";
import HeaderToPhones from "../components/headerToPhones";

// importing images .....
import approved_box from "../assets/approved-box.png";
import pending_box from "../assets/pending-box.png";
import favorites from "../assets/favorites.png";
import chiqarilgan from "../assets/chiqarilgan.png";
import chiqarilmagan from "../assets/chiqarilmagan.png";
import daromad from "../assets/daromad.png";
import { Link } from "react-router-dom";

const profile_dashboard = () => {
  return (
    <div className="profile-dashboard">
      <Header />
      <div className="p_dash_container">
        <UserProfile />
        <div className="dashboard-container">
          <h1>Boshqaruv Paneli</h1>
          <br />
          <ul className="user-informations">
            <Link className="page-link" to={"/profile/approved"}>
              <div className="img">
                <img src={approved_box} alt="approved box" />
              </div>
              <div>
                <p>Tasdiqlangan E'lonlar</p>
                <h2>0</h2>
              </div>
            </Link>
            <Link className="page-link" to={"/profile/pending"}>
              <div className="img">
                <img src={pending_box} alt="pending box" />
              </div>
              <div>
                <p>Kutilayotgan E'lonlar</p>
                <h2>0</h2>
              </div>
            </Link>
            <Link className="page-link" to={"/profile/favorites"}>
              <div className="img">
                <img src={favorites} alt="favourites image" />
              </div>
              <div>
                <p>Sevimli E'lonlar</p>
                <h2>5</h2>
              </div>
            </Link>
            <li>
              <div className="img">
                <img src={chiqarilgan} alt="mablag' yechilgan elonlar" />
              </div>
              <div>
                <p>Mablag' Yechilgan E'lonlar</p>
                <h2>1</h2>
              </div>
            </li>
            <li>
              <div className="img">
                <img src={chiqarilmagan} alt="mablag' yechilmagan elonlar" />
              </div>
              <div>
                <p>Mablag' Yechilmagan E'lonlar</p>
                <h2>3</h2>
              </div>
            </li>
            <li>
              <div className="img">
                <img src={daromad} alt="money image" />
              </div>
              <div>
                <p>Daromad</p>
                <h2>0</h2>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <Footter />
      <HeaderToPhones/>
    </div>
  );
};

export default profile_dashboard;
