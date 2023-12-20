import "./slider.css";

import { useState } from "react";
// import { useParams } from "react-router-dom";
// import { getCartRecommendedItems } from "../../../services/products/products";
import { Link } from "react-router-dom";
import Card from "../../Card/Card";

const Slider = () => {
  // this is the data fecting section

  const [recommendedItems, setRecommendedItems] = useState([
    {
      img: "images/fanta.png",
      sku: "Fanta_2.25L",
      name: "Fanta 2.25L",
      price: 260,
      quantity: 567,
      feature:
        "Coca-Cola is the most popular and biggest-selling soft drink in history, as well as one of the most recognizable brands in the world.",
      alcohol: "0",
    },
    {
      img: "images/absolut elyx.png",
      sku: "Absolut_Elyx_1L",
      name: "Absolut Elyx 1L",
      price: 9930,
      quantity: 567,
      feature:
        "Absolut Elyx is manually distilled in a 1921 copper rectification still known as Column 51, made entirely of copper. It is operated by a selected few who inherited their knowledge and expertise from past generations of spirit and vodka makers.",
      alcohol: "42.3",
    },
    {
      img: "images/absolut raspberry.png",
      sku: "Absolut_Juice_Strawberry_Edition_500ML",
      name: "Absolut Juice Strawberry Edition 500ML",
      price: 4050,
      quantity: 567,
      feature:
        "MADE WITH ABSOLUT VODKA, REAL STRAWBERRY JUICE AND NATURAL FLAVORS. Inspired by the long warm days of the Swedish summer, Absolut Juice Strawberry Edition is made with Absolut Vodka (naturally), delicious fruit juice from sun-ripened strawberries and a little taste of vanilla to cool you down. Just add soda and ice for a true fruit sensation.",
      alcohol: "35",
    },
    {
      img: "images/nepalice-can-12.png",
      sku: "Nepal_Ice_Strong_500ML_x_12_Cans",
      name: "Nepal Ice Strong 500MLx12 Cans",
      price: 3025,
      quantity: 567,
      feature:
        "The excellent taste of Nepal Ice comes from the perfect blend of the finest malts and grains, best hops and pure yeast.",
      alcohol: "7",
    },
    {
      img: "images/gorkha-12.png",
      sku: "Gorkha_Strong_650ML_x_12_Bottles",
      name: "Gorkha Strong 650MLx12 Bottles",
      price: 3785,
      quantity: 567,
      feature:
        "Gorkha Strong was launched to the market in 2013 to cater to those segments that prefer stronger beers. It is a malt liquor beer in the best quality.",
      alcohol: "6",
    },
    {
      img: "images/khukri xxx.png",
      sku: "Khukri_XXX_Rum_750ML",
      name: "Khukri XXX Rum 750ML",
      price: 2010,
      quantity: 567,
      feature:
        "Born in the Himalayas, Khukri XXX Rum is an exceptional dark blend, distilled with rich molasses, Himalayan spring water, and natural artisanal flavours. Aged among snowy peaks in casks born from the region-exclusive Shorea Robusta tree, every sip of Khukri XXX Rum delivers a complex taste with rich natural flavours, earthy undertones and a smooth, long caramel finish.",
      alcohol: "42.8",
    },
    {
      img: "images/jack-daniels.png",
      sku: "Jack_Daniel's_750ML",
      name: "Jack Daniel's 750ML",
      price: 6245,
      quantity: 567,
      feature:
        "Jack Daniel's is one of the very few Tennessee Whiskies that is charcoal mellowed. Jack Daniel's has a smooth aroma and flavour of vanilla, toasted oak and caramel translates well to the palate. A true American icon that has become everyone's favourite.",
      alcohol: "40",
    },
    {
      img: "images/moet-chandon-wine-2.png",
      sku: "Moet_Chandon_Rose_Imperial_Champagne_750ML",
      name: "Moet Chandon Rose Imperial Champagne 750ML",
      price: 14000,
      quantity: 567,
      feature:
        "Moët Rosé Impérial is a glamorous expression marked by intense redfruits--strawberry, raspberry, redcurrant--and a bewitching nose combining those scents with rose and pepper.",
      alcohol: "12",
    },
    {
      img: "images/frooti 250ml.png",
      sku: "Frooti_Mango_Drink_500ML",
      name: "Frooti Mango Drink 500ML",
      price: 90,
      quantity: 567,
      feature:
        "Made with real mango pulp from the freshest of mangoes, Frooti satisfies the craving for this popular seasonal fruit throughout the year.",
      alcohol: "0",
    },
  ]);

  // console.log("this is recommended Items :", recommendedItems);
  // this is slider section

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 4 < recommendedItems.length ? prevIndex + 4 : 0
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 4 >= 0 ? prevIndex - 4 : recommendedItems.length - 4
    );
  };

  return (
    <>
      <div className="cart-slider-container">
        <h3 style={{ margin: "15px" }}>Recommended Items:</h3>
        <div className="cart-slider-images">
          {recommendedItems.slice(currentIndex, currentIndex + 4).map((val) => (
            <Link key={val.sku} to={`/items/${val.sku}`}>
              <Card
                img={`/${val.img}`}
                name={val.name}
                price={val.price}
                className="cart-slide"
              />
            </Link>
          ))}
        </div>
      </div>

      <div className="sbc">
        <button onClick={prevSlide} className="sb">
          Previous
        </button>
        <button onClick={nextSlide} className="sb">
          Next
        </button>
      </div>
    </>
  );
};
export default Slider;
