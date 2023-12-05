// import Product from "../components/Card/Product";
// import Stock from "../components/Stockproduct.jsx/Stock";
import AdSlider from "../components/AdSlider/AdSlider";
// import TopProduct from "../components/TopProducts/TopProduct";
import Brand from "../components/Brand/Brand";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/FooterComponents/Footer";
import ItemPanel from "../components/ItemsPanel/ItemPanel";

function LandingPage() {
  return (
    <>
      <NavBar />
      <AdSlider />
      {/* <TopProduct /> */}
      <ItemPanel />
      <Footer />
    </>
  );
}

export default LandingPage;
