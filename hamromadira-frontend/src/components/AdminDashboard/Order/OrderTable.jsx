import "./order.css";
const OrderTable = () => {
  const customer = [
    {
      name: "Akash",
      id: "3",
      address: "Hattiban",
      product: [
        { sku: "fanta", quantity: "2", price: "70" },
        { sku: "Coke", quantity: "2", price: "70" },
      ],
      price: "RS 470",
    },
    {
      name: "Prabesh",
      id: "4",
      address: "Pulchok",
      product: [
        { sku: "fanta", quantity: "2", price: "70" },
        { sku: "Coke", quantity: "2", price: "70" },
        { sku: "Beer", quantity: "2", price: "70" },
      ],
      price: "RS 470",
    },
    {
      name: "Sunil",
      id: "5",
      address: "Pulchok",
      product: [
        { sku: "fanta", quantity: "2", price: "70" },
        { sku: "Coke", quantity: "2", price: "70" },
        { sku: "Beer", quantity: "2", price: "70" },
      ],
      price: "RS 470",
    },
  ];

  return (
    <div className="tbl-wrapper">
      <table>
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Customer ID</th>
            <th>Adress</th>
            <th>Product Name</th>
            <th>price</th>
            <th>Status</th>
            <th>Payment Status</th>
          </tr>
        </thead>
        <tbody>
          {customer.map((val) => {
            return (
              <>
                <tr>
                  <td>{val.name}</td>
                  <td>{val.id}</td>
                  <td>{val.address}</td>
                  <td>
                    {val.product.map((each) => {
                      return <div className="product-sku">{each.sku}</div>;
                    })}
                  </td>
                  <td>{val.price}</td>
                  <td>
                    <div className="checkbox-wrapper-1">
                      <div className="checkbox">
                        {" "}
                        <input type="checkbox" />
                        <label>Delivered</label>
                      </div>
                      <div className="checkbox">
                        {" "}
                        <input type="checkbox" />
                        <label>Placed</label>
                      </div>
                      <div className="checkbox">
                        {" "}
                        <input type="checkbox" />
                        <label>Process</label>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="checkbox-wrapper-2">
                      <div className="checkbox">
                        {" "}
                        <input type="checkbox" />
                        <label>Delivered</label>
                      </div>
                      <div className="checkbox">
                        {" "}
                        <input type="checkbox" />
                        <label>Placed</label>
                      </div>
                    </div>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;

