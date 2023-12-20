import "./product.css";

const AddProduct = () => {
  return (
    <>
      {/* <form className="form-container" action="">
        <label>
          Product Name:
          <input type="text" className="form-input" name="name" />
        </label>
        <label>
          Name:
          <input type="text" className="form-input" name="name" />
        </label>
        <label>
          CateGoryID:
          <input type="text" className="form-input" name="name" />
        </label>
        <label>
          Product Brand:
          <input type="text" className="form-input" name="name" />
        </label>
        <label>
          Manufacturer:
          <input type="text" className="form-input" name="name" />
        </label>
        <label>
          Price:
          <input type="text" className="form-input" name="name" />
        </label>
        <label>
          Quantity:
          <input type="text" className="form-input" name="name" />
        </label>
        <label>
          Product Description
          <textarea rows="4" cols="5" className="form-input text-area" name="" />
        </label>
      </form> */}
      <div className="addProduct-wrapper">
        <div className="header">
          <div className="text">Add The Details of Product You Want To Add</div>
        </div>
        <div className="inputs">
          <div className="input">
            <label>Product Name:</label>
            <input type="text" />
          </div>
          <div className="input">
            <label>Name:</label>
            <input type="password" />
          </div>
          <div className="input">
            <label>CategoryID:</label>
            <input type="text" />
          </div>
          <div className="input">
            <label>Product Brand:</label>
            <input type="text" />
          </div>
          <div className="input">
            <label>Manufacturer:</label>
            <input type="text" />
          </div>
          <div className="input">
            <label>Quantity:</label>
            <input type="text" />
          </div>
          <div className="input">
            <label>Price:</label>
            <input type="text" />
          </div>
          <div className="input">
            <label>Product Image:</label>
            <input type="file" />
          </div>
          <div className="input input1">
            <label>Product Description:</label>
            <textarea className="form-input text-area" name="" />
          </div>

          <div className="submit">Add Product</div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
