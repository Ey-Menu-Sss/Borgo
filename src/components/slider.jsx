import React, { useRef, useState } from "react";
import { departments } from "../JsonDatas";
import { Link, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Slider = ({ images }) => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const swiperRef = useRef(null);
  const [show, setShow] = useState(false);
  const [departmentName, setDepartmentName] = useState("");
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  //
  function handleOnClickSliderItem(name) {
    const newCategories = [];
    departments.forEach((n) => {
      if (n.name === name) {
        setShow(true);
        setDepartmentName(name);
        n.categories.forEach((c) => {
          newCategories.push(c);
        });
      }
    });
    setCategories(newCategories);
  }

  const handleSwipeNext = () => {
    if (swiperInstance && swiperInstance.slideNext) {
      swiperInstance.slideNext();
    }
  };

  const handleSwipePrev = () => {
    if (swiperInstance && swiperInstance.slidePrev) {
      swiperInstance.slidePrev();
    }
  };

  return (
    <div className="flex align-center FDColumn">
      <div className="container slider">
        {/* button to swipe */}
        <div className="l-r-buttons">
          <button className="slider-button left-btn" onClick={handleSwipePrev}>
            <i className="bx bx-chevron-left"></i>
          </button>
          <button className="slider-button right-btn" onClick={handleSwipeNext}>
            <i className="bx bx-chevron-right"></i>
          </button>
        </div>
        {/* button to swipe end... */}

        {/* slider wrapper */}
        <Swiper
          navigation={{
            prevEl: ".left-btn",
            nextEl: ".right-btn",
          }}
          slidesPerView={10}
          breakpoints={{
            0: {
              slidesPerView: 4,
              spaceBetween: 5,
            },
            640: {
              slidesPerView: 4,
              spaceBetween: 5,
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 5,
            },
            990: {
              slidesPerView: 7,
              spaceBetween: 5,
            },
            1280: {
              slidesPerView: 9,
              spaceBetween: 5,
            },
            1440: {
              slidesPerView: 10,
              spaceBetween: 5,
            },
          }}
          className="slider-wrapper"
          onSwiper={setSwiperInstance}
        >
          {images.map((img, index) => (
            <SwiperSlide
              key={index}
              className="pointer flex FDColumn align-center"
              onClick={() => handleOnClickSliderItem(img.name)}
              ref={swiperRef}
            >
              <div className="border flex align-center justify-center">
                <div className="flex align-center justify-center">
                  <img src={img.src} alt={img.alt} />
                </div>
              </div>
              <p>{img.name}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className={`departments-categories ${show ? "d-block" : "d-none"}`}>
        <div className="dep-name">
          <h2>{departmentName}</h2>
          <i className="bx bx-x" onClick={() => setShow(false)}></i>
        </div>
        <ul className="dep-categories">
          {categories.map((c, i) => (
            <Link key={i} className="li" to={`/filter/${departmentName}/${c}`}>
              <div>
                <i className="bx bx-chevron-right"></i>
              </div>
              <div>
                <p>{c}</p>
              </div>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Slider;
