import "./productDetail.css";
export const RecommendedItem = () => {
  return (
    <div className="grid-wrapper">
      <h3>Recommended items</h3>
      <div className="grid-container">
        <div className="grid-items">
          <div>
            <img src="./assets/gorkha.png" alt="" />
          </div>
          <hr />
          <div>
            <ul className="detail-list-2">
              <li>8848 Vodka</li>
              <li>750 ml</li>
              <li>Rs 1900</li>
            </ul>
          </div>
        </div>
        <div className="grid-items">
          <div>
            <img src="./assets/gunsngurkha.png" alt="" />
          </div>
          <hr />
          <div className="padding-1">
            <ul className="detail-list-2">
              <li>8848 Vodka</li>
              <li>750 ml</li>
              <li>Rs 1900</li>
            </ul>
          </div>
        </div>
        <div className="grid-items">
          <div>
            <img src="./assets/tuborgg.png" alt="" />
          </div>
          <hr />
          <div className="padding-1">
            <ul className="detail-list-2">
              <li>8848 Vodka</li>
              <li>750 ml</li>
              <li>Rs 1900</li>
            </ul>
          </div>
        </div>
        <div className="grid-items">
          <div>
            <img src="./assets/8848.png" alt="" />
          </div>
          <hr />
          <div className="padding-1">
            <ul className="detail-list-2">
              <li>8848 Vodka</li>
              <li>750 ml</li>
              <li>Rs 1900</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
