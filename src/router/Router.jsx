import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import DetalleProyecto from "../pages/detalle/DetalleProyecto";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
            <Route index element={<Home />}>
                <Route path=":idProyecto" element={<DetalleProyecto />}/>
            </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
