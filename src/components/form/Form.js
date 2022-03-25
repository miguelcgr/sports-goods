import React, { useState } from "react";
import products from "./../../data/products.json";

const Form = (props) => {
  const { adId, facebookAds, updateAd } = props;

  const [adToBeUpdated] = facebookAds.filter((ad) => ad.id === adId);

  const { id, name, description, image, price, web, productId } = adToBeUpdated;

  const [updatedName, setUpdatedName] = useState(name);
  const [updatedDescription, setUpdatedDescription] = useState(description);
  const [updatedImage, setUpdatedImage] = useState(image);
  const [updatedPrice, setUpdatedPrice] = useState(price);
  const [updatedWebsite, setUpdatedWebsite] = useState(web);
  const [updatedProductId, setUpdatedProductId] = useState("");






  const handleProductSelection = (event) => {
    //   const selectedProduct = products.products.filter(
    //     (el) => el.productName === event.target.value
    //   )
    //   setProductId(selectedProduct[0].id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // insertNewAd(name, description, image, price, website, productId);
    updateAd(id, updatedName, description, image, price, web, productId);
  };
  return (
    <div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h2>Edit your advertisement</h2>

          <input
            required
            type="text"
            name="name"
            defaultValue={name}
            onChange={(event) => setUpdatedName(event.target.value)}
          />
          <input
            type="text"
            name="description"
            defaultValue={description}
            onChange={(event) => setUpdatedDescription(event.target.value)}
          />

          <input
            type="text"
            name="image"
            defaultValue={image}
            onChange={(event) => setUpdatedImage(event.target.value)}
          />

          <input
            type="text"
            name="price"
            defaultValue={price}
            onChange={(event) => setUpdatedPrice(event.target.value)}
          />

          <input
            type="text"
            name="web"
            defaultValue={web}
            onChange={(event) => setUpdatedWebsite(event.target.value)}
          />

          <select onChange={(event) => handleProductSelection(event)}>
            <option defaultValue hidden>
              Choose which product you are advertising
            </option>
            {products.products.map((product, index) => {
              return (
                <option key={index} value={product.productName}>
                  {product.productName}
                </option>
              );
            })}
          </select>
          <button
            className="create-button"
            type="submit"
            onClick={handleSubmit}
          >
            Update ad
          </button>
        </form>

        <br />
      </div>
    </div>
  );
};

export default Form;
