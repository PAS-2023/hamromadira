import "./productDetail.css";

export const ProductDetails = () => {
  return (
    <div className="main-container">
      <div className="item-container">
        <div className="item-detail">
          <div className="item-picture"></div>
          <div className="item-description">
            <span>Khukri Rum (750 ml)</span>
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
          <div className="edit-cart"></div>
          <div className="add-cart-btn"></div>
        </div>
      </div>
    </div>
  );
};
