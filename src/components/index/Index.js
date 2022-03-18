import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import data from "../../data/products.json";

const Index = () => {
  return (
    <div className="index">
      <div className="header"></div>
      <div className="products">
        {data.products.map((el, index) => {
          return (
            <Link
              to={`/read/${el.id}`}
              product={el}
              className="link"
              key={index}
            >
              <div className="product-card">
                <div className="first-line">
                  <p className="product-name">{el.productName}</p>
                  <p className="price">{el.price} €</p>
                </div>
                <p className="product-desc">{el.productDescription}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Index;
