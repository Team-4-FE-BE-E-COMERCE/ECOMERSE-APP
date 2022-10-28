import React from "react";
import { useState, useEffect, useMemo } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { handleAuth } from "../utils/redux/reducers/reducer";
import { ThemeContext, TokenContext } from "../utils/context";
import useCookies from "react-cookie/cjs/useCookies";

import Error10 from "../pages/404";
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
import EditProduct from "../pages/EditProduct";

axios.defaults.baseURL = "https://mdanys.online/";

function App() {
  const [cookie, setCookie, removeCookie] = useCookies();
  const dispatch = useDispatch();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [token, setToken] = useState(null);
  const background = useMemo(() => ({ theme, setTheme }), [theme]);
  const jwtToken = useMemo(() => ({ token, setToken }), [token]);
  const checkToken = cookie.token;

  axios.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      const { data } = error.response;
      if (data === "Missing or malformed JWT" || [401, 403].includes(data.code)) {
        removeCookie("token");
      }
      return Promise.reject(error);
    }
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  (function () {
    if (checkToken) {
      const { token } = cookie;
      dispatch(handleAuth(true));
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      dispatch(handleAuth(false));
      delete axios.defaults.headers.common["Authorization"];
    }
  })();

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
            <Route path="*" element={<Error10 />} />
            <Route path="/edit" element={<EditProfile />} />
            <Route path="/detail/:id_product" element={<ProductDetails />} />
            <Route path="/productupload" element={<ProductUpload />} />
            <Route path="/cart" element={<CartDetail />} />
            <Route path="/order" element={<Order />} />
            <Route path="/orderhistory" element={<OrderHistory />} />
            <Route path="/editproduct" element={<EditProduct />} />
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </TokenContext.Provider>
  );
}

export default App;
