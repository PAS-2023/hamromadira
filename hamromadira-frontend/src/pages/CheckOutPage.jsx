import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/FooterComponents/Footer";
import PaymentPanel from "../components/CheckoutComponents/Payment/PaymentPanel";
import AddressPanel from "../components/CheckoutComponents/Address/AddressPanel";

export default function CheckOutPage() {
  return (
    <div>
      <NavBar />
      <AddressPanel />
      <PaymentPanel />
      <Footer />
    </div>
  );
}
