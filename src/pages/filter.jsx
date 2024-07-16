import React, { useEffect, useState } from "react";

import Header from "../components/header";
import Footer from "../components/footer";
import Search from "../components/search";
import Card from "../components/card";
import HeaderToPhones from "../components/headerToPhones";
import { useLocation, useParams, Link } from "react-router-dom";

const filter = () => {
  const { param1, param2 } = useParams();

  const [emptydisplay, setEmptyDisplay] = useState("d-none");
  const [loadingdisplay, setLoadingDisplay] = useState("flex");
  useEffect(() => {
    setTimeout(() => {
      setEmptyDisplay("d-block");
      setLoadingDisplay("d-none");
    }, 500);
  });

  return (
    <div className="filter-page">
      <Header />
      <Search />
      <div className="filter-container">
        <div className="param-names">
          <h1>{param2}</h1>
          <div>
            <Link to={"/"}>
              <i class="bx bxs-home"></i>
            </Link>
            <i class="bx bx-chevron-right"></i>
            <span>{param1}</span>
            <i class="bx bx-chevron-right"></i>
            <span>{param2}</span>
          </div>
        </div>
        <h2 className={`empty ${emptydisplay}`}>Hech narsa topilmadi!</h2>
        <div className={`${loadingdisplay} justify-center`}>
          <div className="loading"></div>
        </div>
        {/* <Card/>  */}
      </div>
      <Footer />
      <HeaderToPhones />
    </div>
  );
};

export default filter;
