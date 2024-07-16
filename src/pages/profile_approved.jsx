import React, { useEffect, useState } from "react";

import Header from "../components/header";
import Footter from "../components/footer";
import HeaderToPhones from "../components/headerToPhones";

import UserProfile from "../components/userProfile";

const profile_approved = () => {
  const [emptydisplay, setEmptyDisplay] = useState("d-none");
  const [loadingdisplay, setLoadingDisplay] = useState("flex");
  useEffect(() => {
    setTimeout(() => {
      setEmptyDisplay('d-block')
      setLoadingDisplay('d-none')
    }, 500) 
  })

  return (
    <div className="profile-approved">
      <Header />
      <div className="flex justify-center">
        <div className="container flex pppedding">
          <UserProfile />
          <div className="approved-dep">
            <h1>Tasdiqlangan E'lonlar</h1>
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

export default profile_approved;
