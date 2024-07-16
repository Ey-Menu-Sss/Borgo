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
  const [btnDisplay, setBtnDisplay] = useState("d-none");
  const [isReadonly, setIsReadonly] = useState(true);

  return (
    <div>
      <Header />
      <div className="flex justify-center">
        <div className="flex container dash pppedding">
          <UserProfile />
          <div className="dashboard">
            <h1>Boshqaruv Paneli</h1>
            <br />
            <ul className="user-informations">
              <Link className="page-link" to={"/profile/approved"}>
                <div className="img">
                  <img src={approved_box} alt="approved box" />
                </div>
                <div className="link-name">
                  <p>Tasdiqlangan E'lonlar</p>
                  <h2>0</h2>
                </div>
              </Link>
              <Link className="page-link" to={"/profile/pending"}>
                <div className="img">
                  <img src={pending_box} alt="pending box" />
                </div>
                <div className="link-name">
                  <p>Kutilayotgan E'lonlar</p>
                  <h2>0</h2>
                </div>
              </Link>
              <Link className="page-link" to={"/profile/favorites"}>
                <div className="img">
                  <img src={favorites} alt="favourites image" />
                </div>
                <div className="link-name">
                  <p>Sevimli E'lonlar</p>
                  <h2>5</h2>
                </div>
              </Link>
              <li>
                <div className="img">
                  <img src={chiqarilgan} alt="mablag' yechilgan elonlar" />
                </div>
                <div className="link-name">
                  <p>Mablag' Yechilgan E'lonlar</p>
                  <h2>1</h2>
                </div>
              </li>
              <li>
                <div className="img">
                  <img src={chiqarilmagan} alt="mablag' yechilmagan elonlar" />
                </div>
                <div className="link-name">
                  <p>Mablag' Yechilmagan E'lonlar</p>
                  <h2>3</h2>
                </div>
              </li>
              <li>
                <div className="img">
                  <img src={daromad} alt="money image" />
                </div>
                <div className="link-name">
                  <p>Daromad</p>
                  <h2>0</h2>
                </div>
              </li>
            </ul>
            <div className="change_datas">
              <div className="acc_information">
                <div>
                  <h2>Hisob Ma'lumotlari</h2>
                  <span
                    onClick={() => {
                      setBtnDisplay("btns");
                      setIsReadonly(false);
                    }}
                  >
                    <p>Tahrirlash</p>
                    <i class="bx bxs-pencil"></i>
                  </span>
                </div>
                <form>
                  <div className="form_inputs">
                    <input
                      type="text"
                      className={`input-style ${btnDisplay === "btns" ? "getBorder" : ""}`}
                      placeholder="Ism"
                      readOnly={isReadonly}
                    />
                    <input
                      type="text"
                      className={`input-style ${
                        btnDisplay === "btns" ? "getBorder" : ""
                      }`}
                      placeholder="Familiya"
                      readOnly={isReadonly}
                    />
                    <input
                      type="text"
                      className={`input-style ${
                        btnDisplay === "btns" ? "getBorder" : ""
                      }`}
                      placeholder="Email"
                      readOnly={isReadonly}
                    />
                  </div>
                  <div className={btnDisplay}>
                    <button
                      className="btn_cancel"
                      type="button"
                      onClick={() => {
                        setBtnDisplay("d-none");
                        setIsReadonly(true);
                      }}
                    >
                      Bekor qilish
                    </button>
                    <button type="submit" className="button-style">
                      O'zgartirish
                    </button>
                  </div>
                </form>
              </div>

              <div className="edit_psw">
                <h2>Parolni o'zgartirish</h2>
                <form>
                  <div className="form_inputs">
                    <input
                      type="text"
                      className="input-style"
                      placeholder="Joriy parol"
                    />
                    <input
                      type="text"
                      className="input-style"
                      placeholder="Yangi parol"
                    />
                    <input
                      type="text"
                      className="input-style"
                      placeholder="Yangi parolni tasdiqlang"
                    />
                  </div>
                  <div className="btn">
                    <button type="submit" className="button-style">
                      O'zgartirish
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footter />
      <HeaderToPhones />
    </div>
  );
};

export default profile_dashboard;
