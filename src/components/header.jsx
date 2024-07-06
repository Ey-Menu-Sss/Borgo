import React from "react";
import { Link } from "react-router-dom";

const header = () => {
  return (
    <header>
      <div className="logo">
        <Link to={"/"} className="link-styles own-style">
          <h1>BORGO</h1>
        </Link>
      </div>
      <ul className="navbar">
        {/* navigation links */}

        <li className="navigation-links">
          <Link to={"/"} className="hovered">
            Asosiy
          </Link>
          <Link to={"/faq"} className="hovered">
            Pul ishlash
          </Link>
          <Link to={"/aloqa"} className="hovered">
            Biz blan aloqa
          </Link>
        </li>

        {/* change language (select tag) */}
        <li className="select-language">
          <select className="change-language" name="changeLenguage">
            <option value="uzbek">O'z</option>
            <option value="russian">RU</option>
            <option value="english">EN</option>
          </select>
        </li>

        {/* favourites */}
        <li className="favourites">
          <Link className="favourites-link" to={"/profile/favorites"}>
            <i class="bx bxs-heart"></i>
          </Link>
        </li>

        {/* Add elon */}
        <li className="add-elon">
          <Link className="add-elon-link" to={"/create"}>
            <div className="plus-icon">
              <i class="bx bx-plus"></i>
            </div>
            <div className="add-elon-text">E'lon qo'shish</div>
          </Link>
        </li>

        {/* user profile */}
        <li className="h-user-profile">
          <Link className="profile-img link-styles" to={"/profile/dashboard"}>
            <i className="bx bxs-user"></i>
          </Link>
          <Link
            className="user-surAndName link-styles"
            to={"/profile/dashboard"}
          >
            <p className="profile-name">Noname</p>
            <p className="profile-surname">Nonameov</p>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default header;
