/* eslint-disable no-unused-vars */
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import LandingPage from "./pages/LandingPage";
import ItemsPage from "./pages/ItemsPage";
// import CartPage from "./pages/CartPage";
import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./reducers/userReducer";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    let data = window.localStorage.getItem("userData");
    data = JSON.parse(data);
    if (data) {
      dispatch(setUser(data.username));
    }
  }, []);
  const loggedUser = useSelector((state) => state.loggedUser);
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/items/:skus" element={<ItemsPage />} />
        {/* <Route path="/cart" element={<CartPage />} /> */}

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
      </Routes>
    </div>
  );
}

export default App;
