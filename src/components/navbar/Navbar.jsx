import React from "react";
import logo from "/images/document.svg"
import "./nav.scss"
import useSessionStorage from "../hooks/useSesionStorage";

const Navbar = () => {
  const key = "user";
  const { getInfo } = useSessionStorage(key);
  const user = getInfo(key);
  
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src={logo}
            alt="Logo"
            className="d-inline-block align-text-top"
          />
          ProManager
        </a>
        <div className='admin-info'>
            <img className='admin-pic' src={user.image} alt={user.name} />
            <div className='admin-name'>
                <h3>{user.name}</h3>
            </div>
            {/* <figure className='logout' onClick={() => setLogOut(!logOut)}>
                <img  src={settings} alt="Icon for settings" />
                <div className={logOut ? 'logout-action' : 'logout-action logout-inactive'} onClick={clickLogout}>
                    <h3>Log Out</h3>
                    <img src={logout} alt="Icon for logout" />
                </div>
            </figure> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
