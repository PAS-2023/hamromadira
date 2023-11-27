import { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import "./product.css"
// import"../TopProducts/topProduct.css"
import axios from 'axios';

const Product = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3002/product").then(response => {
            setProducts(response.data)
        })
    }, [])
    return (
        <>
             <div className='product-list'>
              {products.map((item) => {
                  return (
                      <>                              
                         <Card image={item.image} productName={item.productName} quantity={ item.quantity} price={item.price} />
                      </>
                  )
                  
              })}
          </div>
        </>
    )
}
export default Product;


