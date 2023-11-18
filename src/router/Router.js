import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Post from "../pages/Post";
import Detail from "../pages/Detail";
import Edit from "../pages/Edit";

const Router = ({ setThemeMode, themeMode }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home setThemeMode={setThemeMode} themeMode={themeMode} />}
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/post" element={<Post />} />
      <Route path="/detail/:articleId" element={<Detail />} />
      <Route path="/edit/:articleId/" element={<Edit />} />
    </Routes>
  );
};

export default Router;
