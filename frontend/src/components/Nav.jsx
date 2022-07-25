import "@styles/Header.scss";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import UserContext from "@contexts/UserContext";

const Nav = () => {
  const { user } = useContext(UserContext);
  const Menuchange = () => {
    document.getElementById("Mchange").classList.toggle("Active");
    document.getElementById("Tchangeone").classList.toggle("TActive");
    document.getElementById("Tchangetwo").classList.toggle("TActive");
    document.getElementById("Tchange").classList.toggle("TActive");
  };

  return (
    <div className="nav">
      <div className="NotActive" id="Mchange">
        <ul>
          <li>
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
            <p className="button" onClick={Menuchange} role="button">
              MENU
            </p>
          </li>
          <li>
            <a id="Tchangeone" href="/home">
              HOME
            </a>
          </li>
          <li>
            <a id="Tchangetwo" href="/login">
              LOGIN
            </a>
          </li>
          <li>
            {user && (
              <NavLink to="/profil" className="buttonProfil">
                <p className="Pstyle">PROFIL</p>
              </NavLink>
            )}
          </li>
        </ul>
      </div>
      <img src="http://localhost:8000/assets/Apexlogo.jpg" alt="logo2" />
      <ul>
        <li>
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
          <p className="button" onClick={Menuchange} role="button">
            MENU
          </p>
        </li>
        <li>
          <a href="/home">HOME</a>
        </li>
        <li>
          <a href="/login">LOGIN</a>
        </li>
        <li>
          {user && (
            <NavLink to="/profil" className="buttonProfil">
              <p className="Pstyle">PROFIL</p>
            </NavLink>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Nav;
