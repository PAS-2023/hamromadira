import "./recommendedItems.css";
import Card from "../Card/Card";
import axios from "axios";
import { useEffect, useState } from "react";
export const RecommendedItems = () => {
  const [Products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3002/product").then((response) => {
      setProducts(response.data);
    });
  }, []);
  console.log(Products);
  return (
    <div className="topProduct-container">
      <div className="stock-product">
        <img src="images/topProduct-logo.png" className="brand-logo" alt="" />
        <p className="stockProduct">Recommended Itmes</p>
      </div>
      <div className="top-products">
        {Products.map((item) => {
          return (
            <>
              <Card
                image={item.image}
                productName={item.productName}
                quantity={item.quantity}
                price={item.price}
              />
            </>
          );
        })}
      </div>
    </div>
  );
};
