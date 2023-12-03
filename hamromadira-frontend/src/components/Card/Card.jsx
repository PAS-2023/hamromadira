import "./product.css"
const Card = ({ image, sku, quantity, price,productName }) => {
   
    return (
        <div className="card">
             <img src={image} alt="picture of raksi" />
            <div className="detail-list" >
            
                <div>
                 {sku}
                </div>
                <div>{productName}</div>
            <div>
                {quantity}
            </div>
            <div>
                {price}
            </div>
          </div>
           
        </div>
    )
}
export default Card;