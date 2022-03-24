import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { v4 as uuid } from "uuid";
import Index from "./components/index/Index";
import Read from "./components/read/Read";
import Navbar from "./components/navbar/Navbar";
import Create from "./components/create/Create";
import Delete from "./components/delete/Delete";
import Update from "./components/update/Update";
import data from "./data/products.json";
import advertisements from "./data/Advertisements";
const App = () => {
  const [facebookAds, setFacebookAds] = useState(advertisements);

  const insertNewAd = (name, description, image, price, website, productId) => {
    let newAd = {};
    const unique_id = uuid();
    newAd.id = unique_id;
    newAd.name = name;
    newAd.image = image;
    newAd.description = description;
    newAd.price = price;
    newAd.web = website;
    newAd.productId = productId;

    setFacebookAds([...facebookAds, newAd]);
  };
  const deleteAd = (id) => {
    const remainingAds = facebookAds.filter((element) => element.id !== id);
    setFacebookAds(remainingAds);
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
              element={<Read facebookAds={facebookAds} deleteAd={deleteAd}/>}
            />
            <Route
              path="/create"
              element={<Create products={data} insertNewAd={insertNewAd} />}
            />
            <Route
              path="/delete"
              element={
                <Delete
                  products={data}
                  facebookAds={facebookAds}
                  deleteAd={deleteAd}
                />
              }
            />
            <Route
              path="/update"
              element={<Update products={data} facebookAds={facebookAds} />}
            />
          </Routes>
        </Fragment>
      </Router>
    </div>
  );
};

export default App;
