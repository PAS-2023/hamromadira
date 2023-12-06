/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Card } from "../../Card/Card";
import { getCategoryProducts } from "../../../services/products/products";
import { Link } from "react-router-dom";

export function CardContainer({ category }) {
  //use category call here
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    getCategoryProducts(category).then((data) => setProductList([...data]));
  }, []);

  return (
    <>
      <div className="productPanelHead">
        <img src="./images/productHead.png" alt="" />
        <h3>{category}</h3>
      </div>
      <div className="grid-container">
        {productList.map((product) => (
          <Link key={product.sku} to={`/items/${product.sku}`}>
            <Card img={product.img} name={product.name} price={product.price} />
          </Link>
        ))}
      </div>
    </>
  );
}