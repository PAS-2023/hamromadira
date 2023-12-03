import Product from "../components/Card/Product";
import Stock from "../components/Stockproduct.jsx/Stock";
import AdSlider from "../components/AdSlider/AdSlider";
import TopProduct from "../components/TopProducts/TopProduct";
import Brand from "../components/Brand/Brand";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/FooterComponents/Footer";

function LandingPage() {
  const LandingPageCSS = {
    "max-width": "auto",
    "max-height": "auto",
    margin: "auto",
    padding: "15px",
  };
  return (
    <>
      <NavBar />
      <div className="Landin-container" style={LandingPageCSS}>
        <AdSlider />
        <TopProduct />
        <Brand />
        <Stock />
        <Product />
      </div>
      <Footer />
    </>
  );
}

export default LandingPage;
