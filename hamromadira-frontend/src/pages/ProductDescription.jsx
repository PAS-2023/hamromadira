import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/FooterComponents/Footer";
import { ProductDetails } from "../components/ProductView/ProductDetail";
import { RecommendedItem } from "../components/ProductView/RecommendedItems";

export default function ProductDescription() {

  return (
    <div>
        <NavBar />
      <ProductDetails />
      <RecommendedItem />
      <Footer />
    </div>
  );
}
