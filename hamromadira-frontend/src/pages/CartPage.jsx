import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/FooterComponents/Footer";
// import CartItem from "../components/Cart/CartItem";
import CartSetting from "../components/Cart/CartSetting";
import TopProduct from "../components/TopProducts/TopProduct";

export default function CartPage() {
  return (
    <div>
      <NavBar />
      {/* <CartItem /> */}
      <CartSetting />
      <TopProduct />
      <Footer />
    </div>
  );
}
