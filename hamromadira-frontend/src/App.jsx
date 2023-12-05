/* eslint-disable no-unused-vars */
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import LandingPage from "./pages/LandingPage";
import ItemsPage from "./pages/ItemsPage";
// import CartPage from "./pages/CartPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/items" element={<ItemsPage />} />
        {/* <Route path="/cart" element={<CartPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
