import React from "react";
import Header from "../components/header";
import Footter from "../components/footer";
import UserProfile from "../components/userProfile";
import HeaderToPhones from "../components/headerToPhones";

const profile_pending = () => {
  return (
    <div>
      <Header />
      <div className="flex justify-center">
        <div className="container flex">
          <UserProfile />
          <div className="pending-dep">
            <h1>Kutilayotgan E'lonlar</h1>
            <h2 className="empty">Hech narsa topilmadi!</h2>
          </div>
        </div>
      </div>
      <Footter />
      <HeaderToPhones />
    </div>
  );
};

export default profile_pending;
