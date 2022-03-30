import React, { useState } from "react";
import { useParams } from "react-router";
import facebook from "./../../facebook.png";
import like from "./../../like-comment.png";
import Form from "./../form/Form";
import "./read.css";

const Read = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const [adToBeEdited, setAdToBeEdited] = useState();

  const { id: productId } = useParams();

  const { facebookAds, deleteAd, updateAd } = props;

  const productAds = facebookAds.filter((ad) => ad.productId === productId);

  const handleDelete = (id) => {
    if (window.confirm("This action will delete the ad. Are you sure?"))
      deleteAd(id);
  };

  const handleEdit = (id) => {
    setIsEditing(!isEditing);
    setAdToBeEdited(id);
  };

  return (
    <div className="wrapper">
      {productAds.map(({ description, web, name, image, id }, index) => {
        const shortDesc = description.substring(0, 45) + " ...";
        return (
          <div key={index} className="read-container">
            <div className="ad">
              <div className="top">
                <div className="head">
                  <img src={facebook} alt="facebook-logo" />
                  <p className="facebook-text">{web}</p>
                </div>
                <p className="product-intro">Check out our {name}</p>
              </div>

              <img className="product-img" src={image} alt="product pic" />
              <div className="under-info">
                <div className="under-text">
                  <p className="gray-link">{web}</p>
                  <p className="info-title">Check out our {name}</p>
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
            <div className="buttons">
              <button
                className="delete-button"
                onClick={() => handleDelete(id)}
              >
                Delete
              </button>
              <button className="edit-button" onClick={() => handleEdit(id)}>
                Edit
              </button>
            </div>
          </div>
        );
      })}
      {isEditing && (
        <Form
          adId={adToBeEdited}
          facebookAds={facebookAds}
          updateAd={updateAd}
        />
      )}
    </div>
  );
};

export default Read;
