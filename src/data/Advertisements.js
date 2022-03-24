import data from "./products.json";
import { v4 as uuid } from "uuid";

const advertisements = [];
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
  advertisements.push(ad);
}); 

export default advertisements;


