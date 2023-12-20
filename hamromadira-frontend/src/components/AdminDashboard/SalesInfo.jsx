import "./dashboard.css"

const SalesInfo = () => {
  return (
    <>
      <div className="container">
        <div className="view">
          <span>1508</span>
          <div className="p1">Views</div>
        </div>
        <div className="view">
          <span>80</span>
          <div className="p1">
            sales
          </div>
        </div>
        <div className="view">
          <span>23</span>
          <div className="p1">
            Orders
          </div>
        </div>
        <div className="view">
          <span>RS100000</span>
          <div className="p1">
            Transaction Amounts
          </div>
        </div>
      </div>
    </>
  );
}

export default SalesInfo
