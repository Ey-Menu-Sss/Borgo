import React from "react";

//
import Header from "../components/header";
import Search from "../components/search";
import Adds from "../components/adds";
import Slider from "../components/slider";
import Card from "../components/card";
import Footer from "../components/footer";
import HeaderToPhones from "../components/headerToPhones";

// json
import { announcements, images } from "../JsonDatas";

// image
import nn_img from "../assets/pc.png";
import { Link } from "react-router-dom";

const home = () => {

  function handleGetMoreCards() {
    // serverga zapros jo'natip yana 45ta card qo'shaman
  }
  return (
    <div>
      {/* header... */}
      <Header />

      {/* search section... */}
      <Search />

      {/* google adds... */}
      <Adds />

      {/* elonlar categoriyalari... */}
      <div className="elonlar-categories">
        <br />
        <h1>E'lonlar kategoriyasi</h1>
        <Slider images={images} />
        <br />
      </div>
      {/* recommended announcements... */}

      <div className="recommended">
        <div className="section-name">
          <h2>Tavisya Etiladi</h2>
          <hr />
        </div>
        <div className="recommended-announcements">
          {announcements.map((c, i) => (
            <Card props={c} key={i} />
          ))}
        </div>
        <div className="btn-showMore">
          <button onClick={handleGetMoreCards}>Ko'proq</button>
        </div>
      </div>

      {/* NN1 */}
      <div className="nn1">
        <img src={nn_img} alt="nn image" />
        <div>
          <p>Biz bilan hamkorlik qling!</p>
          <strong>BORGO BILAN INTERNETDA BIZNESINGIZNI BOSHLANG!</strong>
        </div>
        <Link to={"/"}>
          <button>Batafsil</button>
        </Link>
      </div>
      {/* NN2 */}
      <div className="nn2">
        <h1>BORGO</h1>
        <p>
          O'zbekistonda 1-raqamli e'lonlar servisi <br />
          O'zbekiston xususiy e'lonlari Borgo (avvalgi torg.uz) - bu yerda
          izlaganingizni topasiz. <br />
          "E'lon joylashtirish" tugmasiga bosib, siz istalgan mavzuga oid
          onlayn-e'lonni joylashtira olasiz - ish qidirish, xizmat ko'rsatish,{" "}
          <br />
          avtomobillar, ko'chmas mulk, elektronika va boshqalar savdosi. <br />
          Borgo O'zbekiston servisi yordamida siz deyarli barcha istagan
          narsangizni sotish yoki sotib olishingiz mumkin. Qidiruv <br />{" "}
          funksiyasidan foydalanib, o'zingizni qiziqtirgan mavzuga oid sersisda
          mavjud e'lonlarni hech bir qiyinchiliksiz topa olasiz. <br />
          Borgo O'zbekiston - sizning ishonchli va tengi yo'q yordamchingiz.
        </p>
      </div>
      {/* footoer */}
      <Footer />
      <HeaderToPhones/>
    </div>
  );
};

export default home;
