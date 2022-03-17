import React, { useState, useEffect } from "react";
import "./create.css";

const Create = (props) => {
  const { products, insertNewAd } = props;

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [website, setWebsite] = useState("");
  const [productId, setProductId] = useState("");

  const handleProductSelection = (event) => {
    const selectedProduct = products.products.filter(
      (el) => el.productName === event.target.value
    );
    setProductId(selectedProduct[0].id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    insertNewAd(name, description, image, price, website, productId);
  };

  console.log("products", products);

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Create an ad for your products</h2>

         <input
          type="text"
          name="name"
          placeholder="Product name"
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          onChange={(event) => setDescription(event.target.value)}
        />

        <input
          type="text"
          name="image"
          placeholder="Paste an image URL"
          onChange={(event) => setImage(event.target.value)}
        />

       <input
          type="text"
          name="price"
          placeholder="Product price"
          onChange={(event) => setPrice(event.target.value)}
        />
     
        <input
          type="text"
          name="web"
          placeholder= "Advertisement URL"
          onChange={(event) => setWebsite(event.target.value)}
        />
      
        {/* <select onChange={(event) => setProduct(event.target.value)}> */}
        <select onChange={(event) => handleProductSelection(event)}>
          <option selected disabled hidden>
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
        <button className="create-button" type="submit">Create</button>
      </form>

      <br />
    </div>
  );
};
export default Create;
