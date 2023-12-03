import Card from "../../components/Card/Card";
import "./product.css";
import { useProductCartMutation } from "../../reducers/apiSlice";
import { useEffect } from "react";
import testImage from "../../assets/product_images/frooti 200ml.png"
const Product = () => {
  const [allProduct, { data: allProductData, isLoading, isSuccess }] =
    useProductCartMutation();
  useEffect(() => {
    allProduct();
  }, []);

  return (
    <>
      {/* <div className='product-list'>
              {products.map((item) => {
                  return (
                      <>                              
                         <Card image={item.image} productName={item.productName} quantity={ item.quantity} price={item.price} />
                      </>
                  )
                  
              })}
          </div> */}
      {isSuccess ? 
        allProductData.map((item) => {
          return (
            <>
              <div className="product-title">

              {item.productName}
              </div>
              <div className="product-list">
                {item.skus.map((each,index) => {
                  return (
                    <Card
                      image={each.img}
                      sku={each.sku}
                      price={each.price}
                      quantity={each.quantity}
                      key={index}
                    />
                  );
                })}
              </div>
            </>
          );
        })
         :[]}
        
    </>
  );
};
export default Product;
