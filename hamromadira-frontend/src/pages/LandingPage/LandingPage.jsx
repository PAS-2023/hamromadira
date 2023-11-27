import Product from "../../components/Card/Product";
import Stock from "../../components/Stockproduct.jsx/Stock";
import AdSlider from "../../components/AdSlider/AdSlider";
import TopProduct from "../../components/TopProducts/TopProduct";
import Brand from "../../components/Brand/Brand";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="Landin-container">
      <AdSlider />
      <Stock />
      <Product />
      <Brand />
      <TopProduct />
    </div>
  );
}

export default LandingPage;
