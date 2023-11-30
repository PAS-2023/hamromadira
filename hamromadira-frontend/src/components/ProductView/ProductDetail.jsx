import "./productDetail.css";
import axios from 'axios';
import{useEffect, useState} from "react";
import {useParams} from "react-router-dom";

export const ProductDetails = () => {
  const {id: productId}= useParams();
  const {product, setProduct} = useState(1);
  useEffect(()=>{

  },[]);
  
  useEffect(()=>{
    const fetchData = async()=>{
      try {
        const {data :{data},} = axios.get(`http://localhost:3001/api/product/${productId}?populate=*`);
        setProduct(data);
  
      } catch (error) {
        console.log(error);
      }
    }
    if(productId){
      fetchData();
    }
  },[productId])

  return (
    
    <div className="main-container">
      {alert("this page is under construction")}
      <div className="item-container">
        <div className="item-detail">
          <div className="item-picture"></div>
          <div className="item-description">
            <span>data/</span>
            <ul className="detail-list">
              <li>Volume: 750ml</li>
              <li>Brand: Khukri</li>
              <li>Category: Rum</li>
              <li>Alcohol: 42%</li>
            </ul>
            <p className="description">
              Flavours that are extracted from authentic Nepalese spices are
              masterfully blended with distills of rich molasses and fresh
              spring water from the Himalayas. It is then aged in homes of
              exclusive wooden casks at high altitudes resulting in a tasteful
              concoction of assorted spices enriched with dry fruits that ends
              with a sweet, smooth and long finish.
            </p>
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
