import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages";
import HomeLogin from "../pages/HomeLogin";
import Profile from "../pages/Profile";
import ProfilOrang from "../pages/ProfilOrang";
import EditProfile from "../pages/EditProfile";

function App() {
  return (
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
