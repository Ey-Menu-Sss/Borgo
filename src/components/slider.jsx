import React, { useRef, useState } from "react";
import { departments } from "../JsonDatas";
import { Link } from "react-router-dom";

const slider = ({ images }) => {
  const elementRef = useRef();
  const [show, setShow] = useState(false);
  const [departmentName, setDepartmentName] = useState("");
  const [categories, setCategories] = useState([]);

  //
  function handleScrollRight() {
    elementRef.current.scrollLeft += 148;
  }
  function handleScrollLeft() {
    elementRef.current.scrollLeft -= 148;
  }
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

  return (
    <div className="slider-container">
      <div className="l-r-buttons">
        <button className="slider-button left-btn" onClick={handleScrollLeft}>
          <i class="bx bx-chevron-left"></i>
        </button>
        <button className="slider-button right-btn" onClick={handleScrollRight}>
          <i class="bx bx-chevron-right"></i>
        </button>
      </div>
      <div className="slider-container">
        <ul className="slider" ref={elementRef}>
          {images.map((img, i) => (
            <li
              key={i}
              className="slider-item"
              onClick={() => handleOnClickSliderItem(img.name)}
            >
              <div className="border">
                <div>
                  <img src={img.src} alt={img.alt} />
                </div>
              </div>
              <p>{img.name}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className={`departments-categories ${show ? "d-block" : "d-none"}`}>
        <div className="dep-name">
          <h2>{departmentName}</h2>
          <i class="bx bx-x" onClick={() => setShow(false)}></i>
        </div>
        <ul className="dep-categories">
          {categories.length === 0 ? (
            <h1 className="not-founded">no categories to this department!</h1>
          ) : (
            categories.map((c, i) => (
              <Link key={i} className="li" to={`/filter/${departmentName}/${c}`}>
                <div>
                  <i class="bx bx-chevron-right"></i>
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

export default slider;
