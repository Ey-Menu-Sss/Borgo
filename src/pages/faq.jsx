import React from "react";
import Header from "../components/header";
import Footter from "../components/footer";
import HeaderToPhones from "../components/headerToPhones";
import { Link } from "react-router-dom";
import Humo from "../assets/humo.png";
import UzCard from "../assets/uz-card.png";

const faq = () => {
  return (
    <div className="faq-page">
      <Header />
      <div className="faq-container">
        {/* elon joylang va daromad oling */}
        <div>
          <h1>E'lon joylang va Daromad oling</h1>
          <p>
            Internetda pul ishlashni hohlaysizmi? Bizning veb-saytimiz
            qo’shimcha daromad olish istagida yoki ishsiz yurgan insonlarga bu
            sharoitni yaratib bermoqda!
          </p>
          <br />
          <p>
            Sizning xilma-xil e'lonlaringiz nafaqat boshqalarga balki sizga ham
            foyda olib keladi
          </p>
        </div>
        <br />
        {/* ta'rif */}
        <div>
          <h1>Ta'rif</h1>
          <p>1 ko'rilgan e'lon soniga 10 so'm!</p>
        </div>
        <br />
        {/* qo'shilish */}
        <div>
          <h1>Qo'shilish</h1>
          <p>
            Tegishli tajribaga ega bo'lishingiz yoki muayyan malakaga ega
            bo'lishingiz shart emas, <br />
            Sizdan talab etilgani:
          </p>
          <br />
          <ul>
            <li>Izlanuvchanlik</li>
            <li>E'lon eski bo'masligi</li>
            <li>Kontent yaratishga ishtiyoq</li>
            <li>Xar bir e'londa kamida 2 ta rasm bo'lishi shart</li>
          </ul>
        </div>
        {/* daromad */}
        <div>
          <h1>Daromad</h1>
          <hr />
          <br />
          <p>
            Siz e'lon qilingan xar bir e'loningiz ko'rilgan sonidan daromad
            olasiz
          </p>
          <br />
          <ul>
            <li>Yuklashingiz mumkun bo'lgan e'lonlar soni cheklanmagan</li>
            <li>100% original kontent bo'lishi kerak</li>
            <li>Humo va Uzcard orqali to'lanadi</li>
          </ul>
        </div>
        {/* register */}
        <div>
          <h1>
            Hoziroq Ro'yxatdan o'ting va 10 000 so'm Bonus qo'lga kiriting
          </h1>
          <hr />
          <br />
          <Link to={"/register"} className="register-link">
            RO'YHATDAN O'TISH
          </Link>
        </div>
        <br />
        {/* tolov usullari */}
        <div>
          <h1>Tolov usullari</h1>
          <hr />
          <br />
          <div className="paymen-methods">
            <h3>Chiqarish uslubi</h3>
            <h3>Minimum chiqarish miqdori</h3>
          </div>
          <br />
          <div className="humo">
            <img src={Humo} alt="humo" />
            <h3>1 000 000 UZS</h3>
          </div>
          <div className="uz-card">
            <img src={UzCard} alt="uzcard" />
            <h3>1 000 000 UZS</h3>
          </div>
        </div>
      </div>
      <Footter />
      <HeaderToPhones/>
    </div>
  );
};

export default faq;
