import React from "react";
import Header from "../components/header";
import Footter from "../components/footer";
import UserProfile from "../components/userProfile";
import HeaderToPhones from "../components/headerToPhones";

const profile_pending = () => {
  return (
    <div className="profile-pending">
      <Header />
      <div className="p_pending_container">
        <UserProfile />
        <div className="pending-dep">
          <h1>Kutilayotgan E'lonlar</h1>
          <br />
          <h2>Hech narsa topilmadi!</h2>
        </div>
      </div>
      <Footter />
      <HeaderToPhones/>
    </div>
  );
};

export default profile_pending;
