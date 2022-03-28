import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { v4 as uuid } from "uuid";
import Index from "./components/index/Index";
import Read from "./components/read/Read";
import Navbar from "./components/navbar/Navbar";
import Create from "./components/create/Create";
import data from "./data/products.json";
import advertisements from "./data/Advertisements";
const App = () => {
  const [facebookAds, setFacebookAds] = useState(advertisements);

  const insertNewAd = (name, description, image, price, website, productId) => {
    const unique_id = uuid();
    let newAd = {
      id: unique_id,
      name,
      image,
      description,
      price,
      web: website,
      productId,
    };
    setFacebookAds([...facebookAds, newAd]);
  };

  const deleteAd = (id) => {
    const remainingAds = facebookAds.filter((element) => element.id !== id);
    setFacebookAds(remainingAds);
  };

  const updateAd = (
    id,
    name,
    description,
    image,
    price,
    website,
    productId
  ) => {
    console.log("name", name);
    console.log("updateAd");
    const updatedAd = {
      id,
      name,
      image,
      description,
      price,
      web: website,
      productId,
    };
    const updatedAds = facebookAds.map((ad) => (ad.id === id ? updatedAd : ad));

    setFacebookAds(updatedAds);
  };

  return (
    <div>
      <Router>
        <Navbar />

        <Fragment>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route
              path="/ads/:id"
              element={
                <Read
                  facebookAds={facebookAds}
                  deleteAd={deleteAd}
                  updateAd={updateAd}
                />
              }
            />
            <Route
              path="/new-ad"
              element={<Create products={data} insertNewAd={insertNewAd} />}
            />
          </Routes>
        </Fragment>
      </Router>
    </div>
  );
};

export default App;
