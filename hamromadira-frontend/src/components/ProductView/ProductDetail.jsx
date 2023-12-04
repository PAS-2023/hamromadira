import "./productDetail.css";
// import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

let URL = "http://localhost:3002/product";
// let testURL = "http://localhost:3002/product?sku=Fanta_2.25L";
export const ProductDetails = () => {
  const [count, setCount] = useState(1);
  const { id: _id } = useParams();
  // const [product, setProduct] = useState([]);
  let product = {
    sku: "fanta",
    img: "./images/8848.png",
    price: "1234",
    quantity: "12321",
    catagory: "RUM",
    alcohol: "41",
    feature:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore vitae saepe sunt iusto, excepturi maxime cumque ipsam ab rerum fugit dignissimos, numquam, qui velit. Similique.",
  };
  // useEffect(() => {
  //   try {
  //     // axios.get(`${URL}?id=${id}`).then((response) => {
  //     axios.get(`${URL}`).then((response) => {
  //       setProduct(response.data);
  //     });
  //     console.log(product.map((val) => val.productBrand));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);
  const addNum = () => {
    setCount(count + 1);
  };
  const subNum = () => {
    if (count < 2) {
      alert("Sorry can't go down then 1");
      return;
    }
    setCount(count - 1);
  };

  return (
    <div className="main-container">
      <div className="item-container">
        <div className="item-detail">
          <div className="item-picture">
            <img src={product.img} alt="" />
          </div>
          <div className="item-description">
            <span>{product.sku}</span>
            <ul className="detail-list">
              <li>Price: {product.price}</li>
              <li>Stock: {product.quantity}</li>
              <li>Category: {product.catagory}</li>
              <li>Alcohol:{product.alcohol}%</li>
            </ul>
            <p className="description">{product.feature}</p>
          </div>
        </div>

        <div className="cart-details">
          <h4 className="price">Rs. 1900</h4>
          <div className="edit-cart">
            <button className="cart-btn" onClick={addNum}>
              +
            </button>
            <span className="item-count">{count}</span>
            <button className="cart-btn" onClick={subNum}>
              -
            </button>
          </div>
          <div className="add-cart-btn">
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};
