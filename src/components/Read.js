import React, { useState } from "react";
import { useParams } from "react-router";
import products from "./../data/products.json";
import facebook from "./../facebook.png";
import like from "./../like-comment.png";
import "./read.css";
import Create from "./Create";

const Read = (props) => {
  const [showCreate, setShowCreate] = useState(false);
  const { id } = useParams();

  const { isTrue, toggle, facebookAds } = props;

  const product = products.products.filter((element) => element.id === id);

  const handleOnClick = () => {
    console.log("onclick");
    setShowCreate(!showCreate);
    toggle();
  };
  console.log("isTrue", isTrue);
  console.log("toggle", toggle);
  console.log("facebookAds", facebookAds);

  const productAds = facebookAds.filter((ad) => ad.productId === id);
  //   const shortDesc = product[0].productDescription.substring(0, 45) + " ...";
  console.log("estos addssssssssssssssssssssssss", productAds);
  return (
    <>
      {productAds.map((ad) => {
        const shortDesc = ad.description.substring(0, 45) + " ...";
        return (
          <div>
            <div className="ad">
              <div className="top">
                <div className="head">
                  <img src={facebook} alt="facebook-logo" />
                  <p className="facebook-text">{ad.web}</p>
                </div>
                <p className="product-intro">Check out our {ad.name}</p>
              </div>

              <img className="product-img" src={ad.image} alt="product pic" />
              <div className="under-info">
                <div className="under-text">
                  <p className="gray-link">{ad.web}</p>
                  <p className="info-title">Check out our {ad.name}</p>
                  <p className="ad-desc">{shortDesc}</p>
                </div>
                <button>Buy now</button>
              </div>
              <img
                src={like}
                alt="facebook-like-comment"
                className="like-img"
              />
              <div></div>
            </div>
            <button onClick={handleOnClick}>Create new ad</button>
            {showCreate && <Create />}
          </div>
        );
      })}
    </>
  );
};

export default Read;
