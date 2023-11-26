import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import NavBar from "./components/NavBar/NavBar";

import Product from "./components/Card/Product";
import Stock from "./components/Stockproduct.jsx/Stock";
import AdSlider from "./components/AdSlider/AdSlider";
import TopProduct from "./components/TopProducts/TopProduct";
import Brand from "./components/Brand/Brand";
import Footer from "./components/FooterComponents/Footer";
function App() {
  return (
    <div>
      <NavBar />
      <AdSlider />
      <Stock />
      <Product />
      <Brand />
      <TopProduct />
      <Footer />

    </div>
  );
}

export default App;
