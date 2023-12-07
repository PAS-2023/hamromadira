import "./slider.css";
// import axios from "axios";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRecommendedItems } from "../../services/products/products";

const Slider = () => {
  const { skus } = useParams();
  const [recommendedItems, setRecommendedItems] = useState({});
  useEffect(() => {
    getRecommendedItems(skus)
      .then((res) => {
        setRecommendedItems({ ...res });
      })
      .catch((error) => console.log(error));
  }, [skus]);
  console.log("this is recommended items : ", recommendedItems);
  return (
    <div>
      this is sliedr section
      <div>
        <ul>hello</ul>
      </div>
    </div>
  );
};
export default Slider;
