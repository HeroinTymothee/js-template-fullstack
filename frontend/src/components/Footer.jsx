import React from "react";
import "@styles/Footer.scss";

const Footer = () => {
  return (
    <div className="Footer">
      <h1>SITE NON OFFICIEL D'APEX LEGENDS</h1>
      <div className="FooterBody">
        <div>
          <h2>RESEAU</h2>
          <ul>
            <li>
              <a href="/discord">DISCORD</a>
            </li>
            <li>
              <a href="/Twitch">TWITCH</a>
            </li>
            <li>
              <a href="/Youtube">YOUTUBE</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>LIEN DU SITE OFFICIEL</h3>
          <a target="_blank" href="https://www.ea.com/fr-fr/games/apex-legends">
            SITE AUFFICIEL
          </a>
        </div>
        <div>
          <h3>MENU DE NAVIGATION</h3>
          <ul>
            <li>
              <a href="HOME">HOME</a>
            </li>
            <li>
              <a href="LOGIN">LOGIN</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
