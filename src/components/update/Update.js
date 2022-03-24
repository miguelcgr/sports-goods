import React from "react";
import facebook from "./../../facebook.png";
import like from "./../../like-comment.png";


const Update = (props) => {

  const { facebookAds, deleteAd } = props;

  

  const handleDelete = (id) => {
    deleteAd(id);
    };

  

  return (
    <div>
      {facebookAds.map((ad) => {
        const shortDesc = ad.description.substring(0, 45) + " ...";
        return (
          <div key={ad.id} onClick={() => handleDelete(ad.id)}>
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
    </div>
  );
};

export default Update;
