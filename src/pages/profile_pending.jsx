import React, { useEffect, useState } from "react";
import Header from "../components/header";
import Footter from "../components/footer";
import UserProfile from "../components/userProfile";
import HeaderToPhones from "../components/headerToPhones";

const profile_pending = () => {
  const [emptydisplay, setEmptyDisplay] = useState("d-none");
  const [loadingdisplay, setLoadingDisplay] = useState("flex");
  useEffect(() => {
    setTimeout(() => {
      setEmptyDisplay("d-block");
      setLoadingDisplay("d-none");
    }, 500);
  });

  return (
    <div>
      <Header />
      <div className="flex justify-center">
        <div className="container flex pppedding">
          <UserProfile />
          <div className="pending-dep">
            <h1>Kutilayotgan E'lonlar</h1>
            <h2 className={`empty ${emptydisplay}`}>Hech narsa topilmadi!</h2>
            <div className={`${loadingdisplay} justify-center`}>
              <div className="loading"></div>
            </div>
          </div>
        </div>
      </div>
      <Footter />
      <HeaderToPhones />
    </div>
  );
};

export default profile_pending;
