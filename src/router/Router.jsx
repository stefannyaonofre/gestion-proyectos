import React, { createContext, useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import DetalleProyecto from "../pages/detalle/DetalleProyecto";
import CardProyects from "../components/cardProyects/CardProyects";
import Loguin from "../pages/loguin/Loguin";
import PublicRouter from "./PublicRouter";
import PrivateRouter from "./PrivateRouter";
import useSessionStorage from "../components/hooks/useSesionStorage";
import Registro from "../pages/registro/Registro";

export const AppContext = createContext({});

const Router = () => {

  const key = "user";
  const [isLogin, setIsLogin] = useState(false);
  const { getInfo } = useSessionStorage(key);
  const user = getInfo(key);
   const [projects, setProjects] = useState()

  useEffect(() => {
    if (user?.name) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [user]);


  return (
    <AppContext.Provider value={{projects, setProjects}}>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route element={<PublicRouter isAutenticated={isLogin} />}>
            <Route path="/login" element={<Loguin signIn={setIsLogin} />} />
            <Route path="registro" element={<Registro />}/>
          </Route>

          <Route element={<PrivateRouter isAutenticated={isLogin} />}>
            <Route index element={<CardProyects />} />
            <Route path=":idProyecto" element={<DetalleProyecto />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </AppContext.Provider>
  );
};

export default Router;

{
  /* <Routes>
        <Route path="/" element={<Home />}>
            <Route index element={<CardProyects/>}/>
          <Route path=":idProyecto" element={<DetalleProyecto />} />

          
        </Route>
      </Routes> */
}
