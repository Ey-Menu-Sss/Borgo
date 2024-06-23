import React, { useEffect, useRef, useState } from "react";
import userImg from "../assets/userImg.jpg";
import { Link, useLocation } from "react-router-dom";

const userProfile = () => {
  const [left, setLeft] = useState("");
  const [display, setDisplay] = useState("d-block");
  const elementRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const location = useLocation();

  // ABOUT MY CODE ....
  // ref.current Link tegini yani render bo'lagandan so'ng html filedi a tegini olp beradi
  // va u orqali uni attribute larini olish imkon boladi
  // href attrebtini olp pageni pathname blan birhil bo'lsa
  // active degan class qoshadi.
  // va boshqa pagega otayotkanda revome qlish shart emas!
  // chunki render bo'lganida faqat ozini default berilgan classlari boladi

  useEffect(() => {
    elementRefs.forEach((ref, i) => {
      if (ref.current.getAttribute("href") === location.pathname) {
        ref.current.className += " active";
      }
    });
  });
  function handleCloseDd() {
    setLeft("");
    setDisplay("d-block");
  }
  function handleOpenDd() {
    setLeft("left0");
    setDisplay("d-none");
  }

  return (
    <div className={`user-profile ${left}`}>
      <div className="aqua-color">
        <i class="bx bx-x" onClick={handleCloseDd}></i>
        <i class={`bx bx-menu ${display}`} onClick={handleOpenDd}></i>
      </div>
      <div className="user-image">
        <div>
          <img src={userImg} alt="" />
        </div>
      </div>
      <div className="change-profile-img">
        <div className="label-border">
          <label htmlFor="fileInput" className="file-upload">
            <i class="bx bxs-pencil"></i>
          </label>
        </div>
        <input type="file" id="fileInput" className="file-input" />
      </div>
      <div className="user-name-and-ph-num">
        <h2>Noname Nonameov</h2>
        <p>+998999099999</p>
      </div>
      <br />

      {/* pages */}

      {/* to dashboard page*/}
      <Link className="dash" to={"/profile/dashboard"} ref={elementRefs[0]}>
        <i class="bx bxs-home"></i>
        <p>Boshqaruv Paneli</p>
      </Link>
      {/* to approved page*/}
      <Link className="approved" to={"/profile/approved"} ref={elementRefs[1]}>
        <i class="bx bx-calendar-check"></i>
        <p>Tasdiqlangan E'lonlar</p>
      </Link>
      {/* to pending page */}
      <Link to={"/profile/pending"} className="pending" ref={elementRefs[2]}>
        <i class="bx bx-time-five"></i>
        <p>Kutilayotgan E'lonlar</p>
      </Link>
      {/* to favourites page */}
      <Link
        to={"/profile/favorites"}
        className="favourites"
        ref={elementRefs[3]}
      >
        <i class="bx bx-heart"></i>
        <p>Sevimli E'lonlar</p>
      </Link>
      <Link to={"/login"} className="exit">
        <i class="bx bx-exit"></i>
        <p>Chiqish</p>
      </Link>
    </div>
  );
};

export default userProfile;
