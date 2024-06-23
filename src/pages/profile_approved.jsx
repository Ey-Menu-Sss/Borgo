import React from "react";

import Header from "../components/header";
import Footter from "../components/footer";
import HeaderToPhones from "../components/headerToPhones";

import UserProfile from "../components/userProfile";

const profile_approved = () => {
  return (
    <div className="profile-approved">
      <Header />
      <div className="p_approved_container">
        <UserProfile />
        <div className="approved-dep">
          <h1>Tasdiqlangan E'lonlar</h1>
          <br />
          <h2>Hech narsa topilmadi!</h2>
        </div>
      </div>
      <Footter />
      <HeaderToPhones/>
    </div>
  );
};

export default profile_approved;
