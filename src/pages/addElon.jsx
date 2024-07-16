import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Header from "../components/header";
import Footer from "../components/footer";

import HeaderToPhones from "../components/headerToPhones";
import { departments, addresses } from "../JsonDatas";

const addElon = () => {
  const [bolims, setBolims] = useState([]);
  const [show, setShow] = useState(false);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate()

  !bolims.length &&
    departments.forEach((d, i) => {
      d.name !== "Barchasi" && bolims.push(d.name);
    });

  function handleGetOptValue(e) {
    if (e.target.value === "choose") return setShow(false);
    departments.map((d, i) => {
      if (d.name === e.target.value) {
        if (d.categories.length === 0) {
          return setShow(false);
        } else {
          setShow(true);
        }
        const newCategories = [];
        d.categories.map((c) => {
          newCategories.push(c);
        });
        setCategories(newCategories);
      }
    });
  }
  function navigateToHome() {
    navigate("/")
  }

  return (
    <div>
      <Header />
      <form className="create-container">
        {/* page title */}
        <div className="page-title">
          <h2>Bepul Elon Qo'shish</h2>
          <p>E'lonni qo'shish uchun bo'limlardan birini tanlashingiz lozim.</p>
        </div>
        {/* about announcement */}
        <div className="about-announcement">
          <h3>Bizga e'loningiz haqida gapirib bering</h3>
          <br />
          <p>
            Sarlavhani kiriting<span>*</span>
          </p>
          <input
            type="text"
            placeholder="E'loningiz sarlavhasini kirting"
            required
          />
          <p>
            Bo'lim<span>*</span>
          </p>
          <select
            className="choose-department"
            required
            onChange={handleGetOptValue}
          >
            <option value="choose">bo'limni tanlang</option>
            {bolims.map((b, i) => (
              <option key={i} value={b}>
                {b}
              </option>
            ))}
          </select>
          <div className={`${show ? "d-block" : "d-none"}`}>
            <p>
              Kategoriya<span>*</span>
            </p>
            <select required>
              {categories?.map((c, i) => (
                <option key={i} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
          <p>Sotuv shakli</p>
          <select>
            <option value="Sotiladi">Sotiladi</option>
            <option value="Nasiya">Nasiya</option>
            <option value="Ayirboshlash">Ayirboshlash</option>
          </select>
        </div>
        {/* upload image */}
        <div className="upload-image">
          <h3>Rasm qo'shish</h3>
          <p>Birinchi surat eloningiz asosiy rasmi bo'ladi</p>
          <div className="upload-images">
            <label htmlFor="uploadImg1">
              <div className="main-img">
                <i class="bx bx-camera"></i>
              </div>
            </label>
            <input type="file" id="uploadImg1" className="d-none" />
            <label htmlFor="uploadImg2">
              <div>
                <i class="bx bx-camera"></i>
              </div>
            </label>
            <input type="file" id="uploadImg2" className="d-none" />
            <label htmlFor="uploadImg3">
              <div>
                <i class="bx bx-camera"></i>
              </div>
            </label>
            <input type="file" id="uploadImg3" className="d-none" />
            <label htmlFor="uploadImg4">
              <div>
                <i class="bx bx-camera"></i>
              </div>
            </label>
            <input type="file" id="uploadImg4" className="d-none" />
          </div>
        </div>
        {/* Tavsif */}
        <div className="tavsif">
          <h3>
            Tavsif <span>*</span>
          </h3>
          <textarea
            required
            cols="30"
            rows="8"
            placeholder="E'lon tavsifini yozing"
          ></textarea>
        </div>
        {/* Aloqa */}
        <div className="aloqa">
          <h3>Aloqa</h3>
          <p>
            Manzil<span>*</span>
          </p>
          <select
            className="choose-address"
            required
            onChange={handleGetOptValue}
          >
            <option value="choose">Manzilni tanlang</option>
            {addresses.map((a, i) => (
              <option key={i} value={a}>
                {a}
              </option>
            ))}
          </select>
          <p>
            Tuman<span>*</span>
          </p>
          <input type="text" placeholder="Tumanni kiriting" required />
          <p>
            Narxi<span>*</span>
          </p>
          <div className="price">
            <input type="number" placeholder="Narxini kiriting" required />
            <select>
              <option value="sum">sum</option>
              <option value="euro">y.e.</option>
            </select>
          </div>
          <p>
            Telefon raqam<span>*</span>
          </p>
          <div className="phone-num">
            <label htmlFor="num-code">+998</label>
            <input
              type="number"
              id="num-code"
              placeholder="99 123 45 67"
              required
            />
          </div>
        </div>
        <div className="buttons">
          <Link to={"/"}>Bekor qilish</Link>
          <button type="submit">Yaratish</button>
        </div>
      </form>
      <Footer />
      <HeaderToPhones/>
    </div>
  );
};

export default addElon;
