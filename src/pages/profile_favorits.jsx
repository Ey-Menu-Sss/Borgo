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
    <div>
      <Header />
      <div className="flex justify-center">
        <div className="container flex">
          <UserProfile />
          <div className="favorites">
            <h1>Sevimli E'lonlar</h1>
            <div className="favorite-cards">
              {favorites?.map((f, i) => (
                <div className="favorite-card flex">
                  <div className="card-img">
                    <img
                      src={f.img}
                      alt="your favorite announcement image"
                      onClick={() => NavToPrductDet(f.id)}
                    />
                  </div>
                  <div className="card-datas flex justify-between align-center">
                    <div className="info flex FDColumn justify-between">
                      <div>
                        <h2 className="card_name">{f.name}</h2>
                        <h2 className="card_price">
                          {f.price} {f.price_type}
                        </h2>
                        <p className="category">{f.category}</p>
                      </div>
                      <div className="addressAndDate flex">
                        <p>{f.owner_address}</p>
                        <p> / {f.date}</p>
                      </div>
                    </div>
                    <div className="btns flex">
                      <button
                        className="show"
                        onClick={() => NavToPrductDet(f.id)}
                      >
                        <i class="bx bx-show"></i>
                        <span>Ko'rish</span>
                      </button>
                      <br />
                      <button
                        className="delete"
                        onClick={() => handleDeleteDepartment(f.id)}
                      >
                        <i class="bx bxs-trash-alt"></i>
                        <span>O'chirish</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footter />
      <HeaderToPhones />
    </div>
  );
};

export default profile_favourites;
