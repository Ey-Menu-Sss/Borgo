import React from "react";
import { Link } from "react-router-dom";

const headerToPhones = () => {
  return (
    <div className="header-to-phones">
      <ul>
        <Link className="li" to={"/"}>
          <i class="bx bx-home-alt"></i>
          <p>Asosiy</p>
        </Link>
        <Link className="li" to={"/profile/favorites"}>
          <i class="bx bx-heart"></i>
          <p>Sevimlilar</p>
        </Link>
        <Link className="li center-item" to={"/create"}>
          <i class="bx bx-plus-circle"></i>
          <p>E'lon bering</p>
        </Link>
        <Link className="li" to={"/aloqa"}>
          <i class="bx bx-headphone"></i>
          <p>Yordam</p>
        </Link>
        <Link className="li" to={"/profile/dashboard"}>
          <i className="bx bxs-user"></i>
          <p>Profil</p>
        </Link>
      </ul>
    </div>
  );
};

export default headerToPhones;
