import React from "react";

import Header from "../components/header";
import Footter from "../components/footer";
import HeaderToPhones from "../components/headerToPhones";

import UserProfile from "../components/userProfile";

const profile_approved = () => {
  return (
    <div className="profile-approved">
      <Header />
      <div className="flex justify-center">
        <div className="container flex">
          <UserProfile />
          <div className="approved-dep">
            <h1>Tasdiqlangan E'lonlar</h1>
            <h2 className="empty">Hech narsa topilmadi!</h2>
          </div>
        </div>
      </div>
      <Footter />
      <HeaderToPhones />
    </div>
  );
};

export default profile_approved;
