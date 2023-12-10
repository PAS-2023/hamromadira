import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/FooterComponents/Footer";
import ItemDetail from "../components/ItemPageComponents/ItemDetails/ItemDetail";
import RecommendedItems from "../components/ItemPageComponents/RecommendedItem/RecommendedItems";
export default function ItemsPage() {
  return (
    <div>
      <NavBar />
      <ItemDetail />
      <RecommendedItems />
      <Footer />
    </div>
  );
}
