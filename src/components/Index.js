import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import data from "./../data/products.json"; 

const Index = () => {
  console.log("index");
  console.log("helloindeXXX");
  console.log("index products", data);

  return (
    <div className="index">
    <div className='header'>
      <h1>{data.name}</h1>
      <img className="logo" src={data.logo} alt={"store-logo"} />
      </div>
      <div className="products">
        {data.products.map((el, index) => {
          return (
            
            <Link to={`/read/${el.id}`} product={el} className='link' key={index}>
              <div className="product-card">
                <p className='product-name'>{el.productName}</p>
                <p>{el.price}</p>
                <p className='product-desc'>{el.productDescription}</p>
              </div>
            </Link>
         
          );
        })}
      </div>
    </div>
  );
};

export default Index;
//     {/* <div className="cards">
//     {products.map((product) => (
//       <div className="product-card">
//         <h2>{product.name}</h2>
//         <button onClick={() => handleAddClick(product._id)}>
//           <img
//             className="product-img"
//             src={product.picture}
//             alt="product pic"
//           />
//         </button>
//         <h3>{product.price} €</h3>
//         <h4>{product.description}</h4>
//       </div>
//     ))}
//   </div> */
