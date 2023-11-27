import "./product.css"
const Card = ({ image,productName, quantity, price }) => {
    return (
        <div className="card">
             <img src={image} alt="picture of raksi" />
            <div className="detail-list" >
            
                <div>
                 {productName}
                </div>
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