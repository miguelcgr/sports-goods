import React from "react";
import { useParams } from "react-router";
import facebook from "./../../facebook.png";
import like from "./../../like-comment.png";
import "./read.css";

const Read = (props) => {
  const { id } = useParams();

  const { facebookAds } = props;

  const productAds = facebookAds.filter((ad) => ad.productId === id);

  return (
    <>
      {productAds.map((ad, index) => {
        const shortDesc = ad.description.substring(0, 45) + " ...";
        return (
          <div key={index} className="read-container">
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
                <button className="buy-button">Buy now</button>
              </div>
              <img
                src={like}
                alt="facebook-like-comment"
                className="like-img"
              />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Read;
