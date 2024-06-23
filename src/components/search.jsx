import React, { useState, useRef, useEffect } from "react";
import { departments, addresses } from "../JsonDatas";

const Search = () => {
  // default dropdown values
  const [categoryValue, setCategoryValue] = useState("Barchasi");
  const [addressValue, setAddressValue] = useState("O'zbekiston");
  //
  const [categoryDropdown, setCategoryDropdown] = useState(false);
  const [addressDropdown, setAddressDropdown] = useState(false);
  const [catShowBorBottom, setCatShowBorBottom] = useState("");
  const [addShowBorBottom, setAddShowBorBottom] = useState("");


  const categoryRef = useRef(null);
  const addressRef = useRef(null);

  //   dropdown boshqa joyga bosilganda yopilishi
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (categoryRef.current && !categoryRef.current.contains(event.target)) {
        setCategoryDropdown(false);
        setCatShowBorBottom("");
      }
      if (addressRef.current && !addressRef.current.contains(event.target)) {
        setAddressDropdown(false);
        setAddShowBorBottom("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  //
  const handleOpenCategoryDropdown = () => {
    setCategoryDropdown(!categoryDropdown);
    setCatShowBorBottom(categoryDropdown ? "" : "catShowBorBottom");
  };
  //
  const handleCatEditValue = (c) => {
    setCategoryValue(c);
    setCategoryDropdown(false);
    setCatShowBorBottom("");
  };
  //
  const handleOpenAddressesDropdown = () => {
    setAddressDropdown(!addressDropdown);
    setAddShowBorBottom(addressDropdown ? "" : "addShowBorBottom");
  };
  //
  const handleAddEditValue = (c) => {
    setAddressValue(c);
    setAddressDropdown(false);
    setAddShowBorBottom("");
  };

  return (
    <div className="serach-section-contatiner">
      <form className="search-section">
        {/* choose Categories */}
        <div
          className={`choose-categories ${catShowBorBottom}`}
          onClick={handleOpenCategoryDropdown}
          ref={categoryRef}
        >
          <div className={`defaultCatValue`}>
            <i className="bx bx-grid-small"></i>
            <span className="default-category">{categoryValue}</span>
          </div>
          <ul
            className={`${
              categoryDropdown ? "d-block" : "d-none"
            } category-dropdown`}
          >
            {departments.map((c, i) => (
              <div
                key={i}
                onClick={() => handleCatEditValue(c.name)}
                className={c.name === "Barchasi" ? "default-value" : "items"}
              >
                <li>{c.name}</li>
                {c.name === "Barchasi" && <p>Barcha kategoriyalar boyicha</p>}
              </div>
            ))}
          </ul>
        </div>

        {/* search */}
        <div className="serach">
          <i className="bx bx-search"></i>
          <input type="text" placeholder="Search here..." />
        </div>

        {/* choose product address */}
        <div
          className={`choose-productAddress ${addShowBorBottom}`}
          onClick={handleOpenAddressesDropdown}
          ref={addressRef}
        >
          <div className="defaultCatValue">
            <i className="bx bx-current-location"></i>
            <span className="default-address">{addressValue}</span>
          </div>
          <ul
            className={`${
              addressDropdown ? "d-block" : "d-none"
            } category-dropdown`}
          >
            {addresses.map((a, i) => (
              <div
                key={i}
                onClick={() => handleAddEditValue(a)}
                className={a === "O'zbekiston" ? "default-value" : "items"}
              >
                <li>{a}</li>
                {a === "O'zbekiston" && <p>Butun mamlakatdagi E'lonlar</p>}
              </div>
            ))}
          </ul>
        </div>

        {/* search button */}
        <button className="serach-button" type="submit">
          <span>Search</span>
          <i className="bx bx-search"></i>
        </button>
      </form>
    </div>
  );
};

export default Search;
