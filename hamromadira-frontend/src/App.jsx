/* eslint-disable no-unused-vars */
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import LandingPage from "./pages/LandingPage";
import ItemsPage from "./pages/ItemsPage";
import CartPage from "./pages/CartPage";
import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./reducers/userReducer";
import CheckOutPage from "./pages/CheckOutPage";
import { initializeCart } from "./reducers/cartReducer";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    let data = window.localStorage.getItem("userData");
    data = JSON.parse(data);
    if (data) {
      dispatch(initializeCart());
      dispatch(setUser(data));
    }
  }, []);
  const loggedUser = useSelector((state) => state.loggedUser);
  console.log(loggedUser.length);
  return (
    <div>
      {/* <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/items/:skus" element={<ItemsPage />} />
        <Route
          path="/cart"
          element={
            loggedUser.length ? <CartPage /> : <Navigate replace to="/login" />
          }
        />
        <Route
          path="/checkout"
          element={
            loggedUser.length ? (
              <CheckOutPage />
            ) : (
              <Navigate replace to="/login" />
            )
          }
        />
        <Route
          path="/signup"
          element={
            loggedUser.length ? <Navigate replace to="/" /> : <SignUpPage />
          }
        />

        <Route
          path="/login"
          element={
            loggedUser.length ? <Navigate replace to="/" /> : <LoginPage />
          }
        />
      </Routes> */}
      <AdminDashboard />
    </div>
  );
}

export default App;
