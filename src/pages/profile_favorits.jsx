import React from "react";

import Header from "../components/header";
import Footter from "../components/footer";
import UserProfile from "../components/userProfile";
import HeaderToPhones from "../components/headerToPhones";

// api bo'lganida backga zapros jo'natip current userni favorite larini olgan bo'lardm
import { favorites } from "../JsonDatas";
import { useNavigate } from "react-router-dom";

const profile_favourites = () => {
  const navigate = useNavigate();

  function NavToPrductDet(id) {
    navigate(`/product-detail/${id}`);
  }

  function handleDeleteDepartment(id) {
    // serverga delete zapros jo'nataman
    // parametrdi id ni bervorip
  }

  return (
    <div className="profile-favourites">
      <Header />
      <div className="p_favourites_container">
        <UserProfile />
        <div className="favorites-dep">
          <h1>Sevimli E'lonlar</h1>
          <br />
          <div className="favorite-cards">
            {favorites?.map((f, i) => (
              <div className="favorite-card">
                <div className="card-img">
                  <img
                    src={f.img}
                    alt="your favorite announcement image"
                    onClick={() => NavToPrductDet(f.id)}
                  />
                </div>
                <div className="card-datas">
                  <h2>{f.name}</h2>
                  <h2>
                    {f.price} {f.price_type}
                  </h2>
                  <p className="category">{f.category}</p>
                  <div className="addressAndDate">
                    <p>{f.owner_address}</p>
                    <span> / </span>
                    <p>{f.date}</p>
                  </div>
                  <div className="btns">
                    <button
                      className="show"
                      onClick={() => NavToPrductDet(f.id)}
                    >
                      <i class="bx bx-show"></i>
                      <span>Show more</span>
                    </button>
                    <br />
                    <button
                      className="delete"
                      onClick={() => handleDeleteDepartment(f.id)}
                    >
                      <i class="bx bxs-trash-alt"></i>
                      <span>Delete</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footter />
      <HeaderToPhones />
    </div>
  );
};

export default profile_favourites;
