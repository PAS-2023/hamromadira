/* eslint-disable no-unused-vars */
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import LandingPage from "./pages/LandingPage";
import ItemsPage from "./pages/ItemsPage";
import CartPage from "./pages/CartPage";
import {
  Routes,
  Route,
  Link,
  Navigate,
  useMatch,
  redirect,
  useNavigate,
} from "react-router-dom";
import CartItem from "./components/Cart/CartItem";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <div>
      {/* <Routes>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/items" element={<ItemsPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes> */}
      {/* <CartItem /> */}
      <Cart />
    </div>
  );
}

export default App;
