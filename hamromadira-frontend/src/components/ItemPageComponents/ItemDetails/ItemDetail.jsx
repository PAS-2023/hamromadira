import "./ItemDetail.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItemDetail } from "../../../services/products/products";

const ItemDetail = () => {
  const { skus } = useParams();
  console.log("this is sku", skus);
  const [product, setProduct] = useState({});

  const [count, setCount] = useState(1);
  useEffect(() => {
    getItemDetail(skus)
      .then((res) => {
        setProduct({ ...res });
        console.log(res.img);
      })
      .catch((error) => console.log(error));
  }, []);

  // for (let i = 0; i < product.length; i++) {
  //   if (product[i].sku === skus) {
  //     setItem(product[i]);
  //   }
  // }

  const add = () => {
    setCount(count + 1);
  };
  const sub = () => {
    if (count < 2) alert("Have to have atleast 1 itme");
    else setCount(count - 1);
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
              <li>Price: {product.price}</li>
              <li>Stock: {product.quantity}</li>
              <li>Alcohol:{product.alcohol}%</li>
            </ul>
            <p className="description">{product.feature}</p>
          </div>
        </div>

        <div className="cart-details">
          <h4 className="price">Rs. 1900</h4>
          <div className="edit-cart">
            <button className="cart-btn" onClick={add}>
              +
            </button>
            <span className="item-count">{count}</span>
            <button className="cart-btn" onClick={sub}>
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
export default ItemDetail;
