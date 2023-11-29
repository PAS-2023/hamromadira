import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/FooterComponents/Footer";
import { ProductDetails } from "../components/ProductView/ProductDetail";
import { RecommendedItem } from "../components/ProductView/RecommendedItems";
export const ProductDetail = () => {
  return (
    <>
      <NavBar />
      <ProductDetails />
      <RecommendedItem />
      <Footer />
    </>
  );
};
