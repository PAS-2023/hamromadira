// import Product from "../components/Card/Product";
// import Stock from "../components/Stockproduct.jsx/Stock";
import AdSlider from "../components/AdSlider/AdSlider";
// import TopProduct from "../components/TopProducts/TopProduct";
import Brand from "../components/Brand/Brand";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/FooterComponents/Footer";
import ItemPanel from "../components/ItemsPanel/ItemPanel";
// import PaymentMenu from "../components/CheckoutComponents/paymentMenu";
import PaymentMenu from "../components/CheckoutComponents/PaymentMenu";
import PaymentPanel from "../components/CheckoutComponents/PaymentPanel";
import AddressPanel from "../components/CheckoutComponents/AddressPanel";

function LandingPage() {
  return (
    <>
      <NavBar />
      {/* <AdSlider /> */}
      {/* <TopProduct /> */}
      {/* <ItemPanel /> */}
      {/* <PaymentMenu /> */}

      <AddressPanel />
      <PaymentPanel />
      {/* <h2>hi akash</h2> */}
      <Footer />
    </>
  );
}

export default LandingPage;
