import "./productDetail.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

let URL = "http://localhost:3002/product";
// http://localhost:3002/product?sku=Fanta_2.25L
export const ProductDetails = () => {
  const { sku } = useParams();
  const [product, setProduct] = useState(1);
  useEffect(() => {
    try {
      axios.get(`${URL}?sku=${sku}`).then((response) => {
        setProduct(response.data);
      });
      console.log(product);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="main-container">
      <div className="item-container">
        <div className="item-detail">
          <div className="item-picture">{product.img}</div>
          <div className="item-description">
            <span>data/</span>
            <ul className="detail-list">
              <li>Price: {product.price}</li>
              <li>Stock: {product.quantity}</li>
              <li>Category: </li>
              <li>Alcohol:{product.alcohol}%</li>
            </ul>
            <p className="description">{product.feature}</p>
          </div>
        </div>

        <div className="cart-details">
          <h4 className="price">Rs. 1900</h4>
          <div className="edit-cart">
            <button className="cart-btn">+</button>
            <span className="item-count">5</span>
            <button className="cart-btn">-</button>
          </div>
          <div className="add-cart-btn">
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};
