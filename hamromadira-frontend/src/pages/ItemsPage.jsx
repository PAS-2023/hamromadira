import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/FooterComponents/Footer";
import ItemDetail from "../components/ItemPageComponents/ItemDetails/ItemDetail";
// import Recommend from "../components/ItemPageComponents/RecommendItem/Recommend";
export default function ItemsPage() {
  return (
    <div>
      <NavBar />
      <ItemDetail />
      {/* <Recommend /> */}
      <Footer />
    </div>
  );
}
