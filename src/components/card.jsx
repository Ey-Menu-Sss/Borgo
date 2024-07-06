import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const card = ({ props }) => {
  const [like, setLike] = useState(true);
  const [liked, setLiked] = useState(false);
  const navigate = useNavigate();


  function handleClickFavBtn() {
    like ? setLike(false) : setLike(true);
    !liked ? setLiked(true) : setLiked(false);
  }

  function profuctDetail() {
    navigate(`/product-detail/${props.id}`);
  }

  return (
    <div className="card">
      <div className="card-head" onClick={profuctDetail}>
        <img src={props.img_src[0]} alt={props.alt} />
      </div>
      <div className="card-body">
        <div className="card-body-texts">
          <div className="card_name">
            <div className="name" onClick={profuctDetail}>
              {props.name}
            </div>
            <div className="add-to-favourite">
              <i
                class={`bx bx-heart ${like ? "d-block" : "d-none"}`}
                onClick={handleClickFavBtn}
              ></i>
              <i
                class={`bx bxs-heart ${liked ? "d-block" : "d-none"}`}
                onClick={handleClickFavBtn}
              ></i>
            </div>
          </div>
          <div className="price">
            {props.price} {props.price_type}
          </div>
          <br />
          <p className="ciry">{props.owner_address}</p>
          <p className="date">{props.date}</p>
        </div>
      </div>
    </div>
  );
};

export default card;
