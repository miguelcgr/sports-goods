import "./App.css";
import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from "./components/Index";
import Read from "./components/Read";
import Navbar from "./components/Navbar";
import Create from "./components/Create";
import data from "./data/products.json";

const App = () => {
  const [isTrue, setIsTrue] = useState(true);

  const facebookAds = [
    {
      name: "wery",
      image: "picc",
      description: "desc",
      price: 12,
      web: "max.com",
      productId: "sddsds",
    },
  ];

  data.products.forEach((product) => {
    let ad = {};
    ad.name = product.productName;
    ad.image = product.productImage;
    ad.description = product.productDescription;
    ad.price = product.price;
    ad.web = "maxsportinggoods.com";
    ad.productId = product.id;
    facebookAds.push(ad);
  });

  const toggleIsTrue = () => {
    setIsTrue(!isTrue);
  };
  return (
    <div>
      <Router>
        <Navbar />

        <Fragment>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route
              path="/read/:id"
              element={
                <Read
                  isTrue={isTrue}
                  toggle={toggleIsTrue}
                  facebookAds={facebookAds}
                />
              }
            />
            <Route path="/create" element={<Create />} />
          </Routes>
        </Fragment>
      </Router>
    </div>
  );
};

export default App;
