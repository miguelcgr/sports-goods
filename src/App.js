import "./App.css";
import React, { Fragment, useCallback, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { v4 as uuid } from 'uuid';
import Index from "./components/index/Index"
import Read from "./components/read/Read";
import Navbar from "./components/navbar/Navbar";
import Create from "./components/create/Create";
import Delete from "./components/delete/Delete"
import Update from "./components/update/Update"
import data from "./data/products.json";

const App = () => {

//  const [facebookAds, setFacebookAds] = useState([])

  let facebookAds = [];

  data.products.forEach((product) => {
    let ad = {};
    const unique_id = uuid();
    ad.id = unique_id;
    ad.name = product.productName;
    ad.image = product.productImage;
    ad.description = product.productDescription;
    ad.price = product.price;
    ad.web = product.web;
    ad.productId = product.id;
     facebookAds.push(ad);
  //  setFacebookAds({...facebookAds, ad})
  });

  const insertNewAd = (name, description, image, price, website, productId) => {
    let newAd = {}
    const unique_id = uuid();
    newAd.id = unique_id;
    newAd.name = name
    newAd.image = image
    newAd.description = description
    newAd.price = price
    newAd.web = website
    newAd.productId = productId
    console.log('newAd',newAd)
    console.log('facebook ads con uno nuevo', facebookAds)
    facebookAds.push(newAd)
  }

  // const deleteAd = useCallback((id) => {
  //     const remainingAds = facebookAds.filter((element)=> element.id !== id)
  //   console.log('app.js .. remainingADS', remainingAds)
  //   facebookAds = [...remainingAds]
  //   console.log('facebookAds - - - app.js', facebookAds)
  // }, []);

  const deleteAd = (id) => {
    const remainingAds = facebookAds.filter((element)=> element.id !== id)
    console.log('remainingADS', remainingAds)
    facebookAds = [...remainingAds]
    console.log('facebookAds - - - app.js', facebookAds)
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
                facebookAds={facebookAds}
                />
              }
            />
            <Route path="/create" element={<Create products={data} insertNewAd={insertNewAd} />} />
            <Route path="/delete" element={<Delete products={data} facebookAds={facebookAds} deleteAd={deleteAd}/>} />
            <Route path="/update" element={<Update products={data} facebookAds={facebookAds}/>} />

          </Routes>
        </Fragment>
      </Router>
    </div>
  );
};

export default App;
