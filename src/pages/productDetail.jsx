import React, { useEffect, useRef, useState } from "react";

import Header from "../components/header";
import Footer from "../components/footer";
import HeaderToPhones from "../components/headerToPhones";
import { announcements, favorites } from "../JsonDatas";
import { useParams } from "react-router-dom";

const productDetail = () => {
  const [phNum, setPhNum] = useState("Raqamni ko'rsatish");
  const [addFav, setAddFav] = useState("Sevimliga qo'shish");
  const [bxHeart, setBxHeart] = useState("d-block");
  const [bxCheck, setBxCheck] = useState("d-none");
  const [product, setProduct] = useState();
  const { id } = useParams();

  const elementRef = useRef(null);

  //   find product
  useEffect(() => {
    const foundProduct = announcements.find((a) => a.id == id);
    if (foundProduct) {
      setProduct(foundProduct);
    }
  }, [id, announcements]);

  function handleShowPhNum() {
    setPhNum(product.owner_phone_number);
  }
  function handleAddToFav() {
    favorites.push(product);
    console.log(favorites);
    setAddFav("Sevimliga qo'shildi");
    !elementRef.current.classList.contains("added") &&
      elementRef.current.classList.add("added");
    setBxHeart("d-none");
    setBxCheck("d-block");
  }

  return (
    <div>
      <Header />
      <div className="product-detail-container">
        <img src={product?.img} alt="product image" />
        <div className="p-name">
          <h2>{product?.name}</h2>
          <h3>
            {product?.price} {product?.price_type}
          </h3>
          <div className="product-details">
            <div className="p-location">
              <div className="location">
                <i class="bx bx-radio-circle-marked"></i>
                <span>Manzil:</span>
              </div>
              <div className="address">{product?.owner_address}</div>
            </div>
            <div className="p-tuman">
              <div className="district">
                <i class="bx bx-radio-circle-marked"></i>
                <span>Tuman:</span>
              </div>
              <div className="owner-district">{product?.owner_district}</div>
            </div>
            <div className="p-form-of-sale">
              <div className="fos">
                <i class="bx bx-radio-circle-marked"></i>
                <span>Sotuv Shakli:</span>
              </div>
              <div className="owner-fos">{product?.form_of_sale}</div>
            </div>
          </div>
          <div className="buttons">
            <button className="ph-num" onClick={handleShowPhNum}>
              <i className="bx bxs-phone"></i>
              <span>{phNum}</span>
            </button>
            <button
              className="add-to-fav"
              onClick={handleAddToFav}
              ref={elementRef}
            >
              <i className={`bx bx-heart ${bxHeart}`}></i>
              <i className={`bx bx-check ${bxCheck}`}></i>
              <span>{addFav}</span>
            </button>
          </div>
        </div>
      </div>
      <div className="tavsif">
        <h2>Tavsif</h2>
        <p>{product?.description}</p>
      </div>
      <div className="views-section">
        <div className="views">
          <i class="bx bx-show"></i>
          <span>1599</span>
        </div>
        <div className="date">
          <div>
            <i class="bx bx-calendar-alt"></i>
            <span>11:50</span>
            <span> / </span>
            <span>20-iyun</span>
          </div>
        </div>
      </div>
      <Footer />
      <HeaderToPhones/>
    </div>
  );
};

export default productDetail;
