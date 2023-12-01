import React from 'react'
import Card from '../Card/Card';
import "./recommend.css"

const Recommend = () => {
  return (
    <div>
      <div className="top-products">
        {topProducts.map((item) => {
          return (
            <>
              <Card
                image={item.image}
                productName={item.productName}
                quantity={item.quantity}
                price={item.price}
              />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Recommend
