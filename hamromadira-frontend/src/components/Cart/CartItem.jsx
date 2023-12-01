import { useEffect } from "react";
import { useProductCartMutation } from "../../reducers/apiSlice";
import ItemData from "./ItemData";



const CartItem = () => {
  const [
    productCart,
    {
      data: productData,
      isLoading: loading,
      isError: error,
      isSuccess: success,
    },
  ] = useProductCartMutation();

  useEffect(() => {
    productCart();
  }, []);
    console.log(productData)

    const handleDelete = id => {
        console.log("handle delete")
    }

  return (
    < div className="table-wrapper">
      <table>
        <tr>
          <th> Item </th>
          <th> Price </th>
          <th> Quantity </th>
          <th> Subtotal </th>
          <th> Remove </th>
        </tr>
        {success ? (
          productData.slice(0,4).map((item) => {
            return (
              <tr key={item}>
                <td> {item.productName}</td>
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
            );
          })
        ) : (
          <></>
        )}
      </table>
      </div>



    //   <>
    //       <table>
    //           <thead>
    //               <th>Item</th>
    //               <th>Price</th>
    //               <th>Quantity</th>
    //               <th>Sub Total</th>
    //               <th>Remove</th>
    //           </thead>
    //           <tbody>
    //               <ItemData productData={ productData} />
    //           </tbody>
    //       </table>
    //   </>
  );
};

export default CartItem;
