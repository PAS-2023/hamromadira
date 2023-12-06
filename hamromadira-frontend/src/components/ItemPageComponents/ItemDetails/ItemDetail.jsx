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
      })
      .catch((error) => console.log(error));
  }, []);

  const addProd = () => {
    if (count < product.quantity) setCount(count + 1);
  };
  const decreaseProd = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      window.alert("Please select at least one product");
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
              <li>Alcohol: {product.alcohol}%</li>
            </ul>
            <p className="description">{product.feature}</p>
          </div>
        </div>

        <div className="cart-details">
          <h4 className="price">Rs. {product.price * count}</h4>
          <div className="edit-cart">
            <button className="cart-btn" onClick={() => addProd()}>
              +
            </button>
            <span className="item-count">{count}</span>
            <button className="cart-btn" onClick={() => decreaseProd()}>
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
