import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Header from "../components/header";
import Footer from "../components/footer";
import HeaderToPhones from "../components/headerToPhones";
import { announcements, favorites } from "../JsonDatas";
import { useParams } from "react-router-dom";

const productDetail = () => {
  const [phNum, setPhNum] = useState("Raqamni ko'rsatish");
  const [addFav, setAddFav] = useState("Sevimliga qo'shish");
  const [bxHeart, setBxHeart] = useState("d-block");
  const [bxCheck, setBxCheck]  = useState("d-none");
  const [product, setProduct] = useState();
  const [bigImgIndex, setBigImgIndex] = useState(0);
  const addToFavRef = useRef(null);
  const { id } = useParams();

  //   find product
  useEffect(() => {
    const foundProduct = announcements.find((a) => a.id == id);
    if (foundProduct) {
      setProduct(foundProduct);
    }
  }, [id, announcements]);
  
  // add to favorites .....
  function handleAddToFav() {
    setAddFav("Sevimliga qo'shildi");
    !addToFavRef.current.classList.contains("added") &&
      addToFavRef.current.classList.add("added");
    setBxHeart("d-none");
    setBxCheck("d-block");  
  }

  // changes image
  function changeBigImgTo(num) {
    return product?.img_src[num];
  }

  function changeToAnotherImg(index) {
    setBigImgIndex(index);
    return changeBigImgTo(index);
  }

  const imageUrl = changeBigImgTo(bigImgIndex);

  return (
    <div className="prodcut_detail_section">
      <Header />
      <div className="pdc_to_center">
        <div className="product_details_container">
          <div className="product_details">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              className="swiper_images"
            >
              {product?.img_src.map((img, i) => (
                <SwiperSlide key={i} className="swiper_slide">
                  <img src={img} alt={product?.alt} />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* product image */}
            <img src={imageUrl} alt="product image" />

            {/* product details */}
            <div className="p_details">
              <h2>{product?.name}</h2>
              <h2 className="p_price">
                {product?.price} {product?.price_type}
              </h2>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <i class="bx bx-radio-circle-marked"></i> Manzil:
                    </td>
                    <td>{product?.owner_address}</td>
                  </tr>
                  <tr>
                    <td>
                      <i class="bx bx-radio-circle-marked"></i> Tuman:
                    </td>
                    <td>{product?.owner_district}</td>
                  </tr>
                  <tr>
                    <td>
                      <i class="bx bx-radio-circle-marked"></i> Sotuv Shakli:
                    </td>
                    <td>{product?.form_of_sale}</td>
                  </tr>
                </tbody>
              </table>

              {/* show ph-number, add to favorites */}
              <div className="buttons">
                <button
                  className="ph-num"
                  onClick={() => {
                    setPhNum(product?.owner_phone_number);
                  }}
                >
                  <i className="bx bxs-phone"></i>
                  <span>{phNum}</span>
                </button>
                <button
                  className="add-to-fav"
                  onClick={handleAddToFav}
                  ref={addToFavRef}
                >
                  <i className={`bx bx-heart ${bxHeart}`}></i>
                  <i className={`bx bx-check ${bxCheck}`}></i>
                  <span>{addFav}</span>
                </button>
              </div>
            </div>
          </div>

          {/* product images */}
          <div className="p_images">
            {product?.img_src.map((img, i) => (
              <span key={i} className={i === bigImgIndex ? "getBorder" : ""}>
                <img
                  src={img}
                  alt={product?.alt}
                  onClick={() => changeToAnotherImg(i)}
                />
              </span>
            ))}
          </div>

          {/* tavsif */}
          <div className="tavsif">
            <h2>Tavsif</h2>
            <p>{product?.description}</p>
          </div>

          {/* views section */}
          <div className="views-section">
            <div className="views">
              <i class="bx bx-show"></i>
              <span>1599</span>
            </div>
            <div className="date">
              <div>
                <i class="bx bx-calendar-alt"></i>
                <span>11:50</span>
                <span> / 

                </span>
                <span>20-iyun</span>
              </div>
            </div>
          </div>
          <br />
        </div>
      </div>
      <Footer />
      <HeaderToPhones />
    </div>
  );
};

export default productDetail;
