import "./itemDetail.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItemDetail } from "../../../services/products/products";

const ItemDetail = () => {
  const { skus } = useParams();
  console.log("this is sku", skus);
  const [product, setProduct] = useState({});

  const [count, setCount] = useState(1);
  const [cost, setCost] = useState(0);
  useEffect(() => {
    getItemDetail(skus)
      .then((res) => {
        setProduct({ ...res });

        console.log(res.img);
        console.log(res.price);
        setCost(res.price);
      })
      .catch((error) => console.log(error));
  }, [skus]);
  const add = () => {
    if (count > product.quantity - 1) alert("Out of Stuck");
    else {
      setCount(count + 1);
      setCost(cost + product.price);
    }
  };
  const sub = () => {
    if (count < 2) alert("Have to have atleast 1 itme");
    else {
      setCount(count - 1);
      setCost(cost - product.price);
    }
  };

  return (
    <div className="main-container">
      <div className="item-container">
        <div className="item-detail">
          <div className="item-picture">
            <img src={"/" + product.img} alt="" />
          </div>
          <div className="item-description">
            <span>{product.name}</span>
            <ul className="detail-list">
              <li>Price: Rs.{product.price}</li>
              <li>Stock: {product.quantity} units</li>
              <li>Alcohol:{product.alcohol}%</li>
            </ul>
            <p className="description">{product.feature}</p>
          </div>
        </div>

        <div className="cart-details">
          <h4 className="price">Rs: {cost}</h4>
          <div className="edit-cart">
            <button className="cart-btn" onClick={add}>
              + |
            </button>
            <span className="item-count">{count}</span>
            <button className="cart-btn" onClick={sub}>
              | -
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
export default ItemDetail;
