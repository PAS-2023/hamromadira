import "./cart.css";
const CartItem = () => {
  const handleDelete = (id) => {
    console.log("handle delete");
  };

  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th> Item </th>
            <th> Price </th>
            <th> Quantity </th>
            <th> Subtotal </th>
            <th> Remove </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={5} style={{ textAlign: "center", color: "red" }}>
              No items in cart
            </td>
          </tr>
          {/* <tr>
            <td> Moet and Chadon Strawberry 150ml</td>
            <td>250</td>
            <td>
              <div className="qty">
                <button>+</button>
                18
                <button>-</button>
              </div>
            </td>
            <td> 500 </td>
            <td>
              <div className="remove-button">
                <button onClick={handleDelete}>
                  <img src="./images/remove.png" alt="" />
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td> Gorkha Beer 150ml</td>
            <td> 250 </td>
            <td>
              <div className="qty">
                <button>+</button>
                18
                <button>-</button>
              </div>
            </td>
            <td> 500 </td>
            <td>
              <div className="remove-button">
                <button onClick={handleDelete}>
                  <img src="./images/remove.png" alt="" />
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td> Mango Juice</td>
            <td> 250 </td>
            <td>
              <div className="qty">
                <button>+</button>
                18
                <button>-</button>
              </div>
            </td>
            <td> 500 </td>
            <td>
              <div className="remove-button">
                <button onClick={handleDelete}>
                  <img src="./images/remove.png" alt="" />
                </button>
              </div>
            </td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
};

export default CartItem;
