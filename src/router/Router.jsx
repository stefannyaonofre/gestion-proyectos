import React, { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import DetalleProyecto from "../pages/detalle/DetalleProyecto";
import CardProyects from "../components/cardProyects/CardProyects";

export const AppContext = createContext({});

const Router = () => {

  const [projects, setProjects] = useState()
  return (
    <AppContext.Provider value={{projects, setProjects}}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
            <Route index element={<CardProyects/>}/>
          <Route path=":idProyecto" element={<DetalleProyecto />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </AppContext.Provider>
  );
};

export default Router;
