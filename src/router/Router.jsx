import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import DetalleProyecto from "../pages/detalle/DetalleProyecto";
import CardProyects from "../components/cardProyects/CardProyects";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
            <Route index element={<CardProyects/>}/>
          <Route path=":idMovie" element={<DetalleProyecto />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
