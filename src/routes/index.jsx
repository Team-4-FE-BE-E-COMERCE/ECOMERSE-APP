import React from "react";
import { useState, useEffect, useMemo } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { handleAuth } from "../utils/redux/reducers/reducer";
import { ThemeContext, TokenContext } from "../utils/context";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages";
import HomeLogin from "../pages/HomeLogin";
import Profile from "../pages/Profile";
import ProfilOrang from "../pages/ProfilOrang";
import EditProfile from "../pages/EditProfile";
import ProductDetails from "../pages/ProductDetails";
import axios from "axios";
import ProductUpload from "../pages/ProductUpload";
import CartDetail from "../pages/CartDetail";
import Order from "../pages/Order";
import OrderHistory from "../pages/OrderHistory";

function App() {
  const isLoggedIn = useSelector((state) => state.data.isLoggedIn);
  const dispatch = useDispatch();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [token, setToken] = useState(null);

  const background = useMemo(() => ({ theme, setTheme }), [theme]);
  const jwtToken = useMemo(
    () => ({
      token,
      setToken,
    }),
    [token]
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    const getToken = localStorage.getItem("token");
    if (getToken) {
      dispatch(handleAuth(true));
    } else {
      dispatch(handleAuth(false));
    }
    axios.defaults.headers.common["Authorization"] = getToken
      ? `Bearer ${getToken}`
      : "";
  }, [isLoggedIn]);

  return (
    <TokenContext.Provider value={jwtToken}>
      <ThemeContext.Provider value={background}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<HomeLogin />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profilepenjual" element={<ProfilOrang />} />
            <Route path="*" element={<div>Kok nda bisa</div>} />
            <Route path="/edit" element={<EditProfile />} />
            <Route path="/detailsproduct" element={<ProductDetails />} />
            <Route path="/productupload" element={<ProductUpload />} />
            <Route path="/cart" element={<CartDetail />} />
            <Route path="/order" element={<Order />} />
            <Route path="/orderhistory" element={<OrderHistory />} />
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </TokenContext.Provider>
  );
}

export default App;
