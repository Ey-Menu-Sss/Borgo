 import React, { useRef, useState } from "react";
import { departments } from "../JsonDatas";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore from "swiper";

const Slider = ({ images }) => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const elementRef = useRef();
  const swiperRef = useRef(null);
  const [show, setShow] = useState(false);
  const [departmentName, setDepartmentName] = useState("");
  const [categories, setCategories] = useState([]);

  //
  function handleOnClickSliderItem(name) {
    const newCategories = [];
    departments.forEach((n) => {
      if (n.name === name) {
        setShow(true);
        setDepartmentName(name);
        n.categories.forEach((c, i) => {
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
    <div className="slider-container">
      <div className="l-r-buttons">
        <button className="slider-button left-btn" onClick={handleSwipePrev}>
          <i className="bx bx-chevron-left"></i>
        </button>
        <button className="slider-button right-btn" onClick={handleSwipeNext}>
          <i className="bx bx-chevron-right"></i>
        </button>
      </div>
      <div className="slider-wrapper">
        <Swiper
          navigation={{
            prevEl: ".left-btn",
            nextEl: ".right-btn",
          }}
          spaceBetween={10}
          slidesPerView={8}
          breakpoints={{
            0: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            615: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            815: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
            1000: {
              slidesPerView: 6,
              spaceBetween: 30,
            },
            1180: {
              slidesPerView: 7,
              spaceBetween: 40,
            },
            1280: {
              slidesPerView: 8,
              spaceBetween: 10,
            },
            1450: {
              slidesPerView: 10,
              spaceBetween: 10,
            },
          }}
          className="ul"
          onSwiper={setSwiperInstance}
        >
          {images.map((img, index) => (
            <SwiperSlide
              key={index}
              className="li"
              onClick={() => handleOnClickSliderItem(img.name)}
              ref={swiperRef}
            >
              <div className="img-to-center">
                <div className="border">
                  <div>
                    <img src={img.src} alt={img.alt} />
                  </div>
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
          {categories.length === 0 ? (
            <h1 className="not-founded">no categories to this department!</h1>
          ) : (
            categories.map((c, i) => (
              <Link
                key={i}
                className="li"
                to={`/filter/${departmentName}/${c}`}
              >
                <div>
                  <i className="bx bx-chevron-right"></i>
                </div>
                <div>
                  <p>{c}</p>
                </div>
              </Link>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default Slider;
