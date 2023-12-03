import { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./topProduct.css";
import axios from "axios";
const TopProduct = () => {
  // const [topProducts, setTopProducts] = useState([]);
  // useEffect(() => {
  //   axios.get("http://localhost:3002/topProducts").then((response) => {
  //     setTopProducts(response.data);
  //   });

  // }, []);
  const topProducts = [
    {
      image: "images/mustang.png",
      productName: "Arna Beer",
      quantity: "750 ml",
      price: "Rs 470",
    },
    {
      image: "images/khukri xxx.png",
      productName: "Khukri Rum",
      quantity: "750 ml",
      price: "Rs 1900",
    },
    {
      image: "images/gorkha strong330.png",
      productName: "Gorkha Beer",
      quantity: "750 ml",
      price: "Rs 1900",
    },
    {
      image: "images/goldenoak.png",
      productName: "Golden Oak",
      quantity: "750 ml",
      price: "Rs 1900",
    },
  ];

  return (
    <div className="topProduct-container">
      <div className="stock-product">
        <img src="images/topProduct-logo.png" className="brand-logo" alt="" />
        <p className="stockProduct">Top Products</p>
      </div>
      <div className="top-products">
        {topProducts.map((item) => {
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
export default TopProduct;
