import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const card = ({ props }) => {
  const [like, setLike] = useState(true);
  const [liked, setLiked] = useState(false);
  let prop_desc = props.description.split(" ");
  const navigate = useNavigate();

  // kevotkan desctiption sozlariga qanchaigini blp 3ta nuhta qoyvoman
  let desc_text = `${prop_desc[0]} 
  ${prop_desc[1] ? prop_desc[1] : ""} 
  ${prop_desc[2] ? prop_desc[2] : ""} ...`;

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
        <img src={props.img} alt={props.alt} />
      </div>
      <div className="card-body">
        <div className="card-body-texts">
          <div className="name" onClick={profuctDetail}>
            {props.name}
          </div>
          <div className="description" onClick={profuctDetail}>
            {desc_text}
          </div>
          <br />
          <div className="price">
            {props.price} {props.price_type}
          </div>
          <br />
          <p className="ciry">{props.owner_address}</p>
          <p className="date">{props.date}</p>
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
    </div>
  );
};

export default card;
