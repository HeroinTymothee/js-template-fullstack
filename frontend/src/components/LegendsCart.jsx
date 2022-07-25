import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "@styles/Home.scss";

const LegendsCart = () => {
  return (
    <div className="H-ActiviterCart">
      <Carousel>
        <div>
          <h1>DATE : 15/05/2022</h1>
          <div className="ActiviterCart">
            <h2>TITRE : Lorem ipsum dolor sit amet.</h2>
            <div className="ActiviterCartBody">
              <div>
                <img
                  src="http://localhost:8000/assets/testApex.png"
                  alt="img"
                />
              </div>
              <div className="ActiviterCartText">
                <h3>
                  SUITE A UNE DEMANDE FAIT A UNE AGENCE DE DEVELOPPEUR WEB EN
                  OCTOBRE DERNIER EA NOUS PRESENTS LEUR NOUVELLE APPLICATION WEB
                </h3>
                <p>oui</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1>DATE : 15/05/2022</h1>
          <div className="ActiviterCart">
            <h2>TITRE : Lorem ipsum dolor sit amet.</h2>
            <div className="ActiviterCartBody">
              <div>
                <img src="http://localhost:8000/assets/Life.jpg" alt="img" />
              </div>
              <div className="ActiviterCartText">
                <h3>
                  SUITE A UNE DEMANDE FAIT A UNE AGENCE DE DEVELOPPEUR WEB EN
                  OCTOBRE DERNIER EA NOUS PRESENTS LEUR NOUVELLE APPLICATION WEB
                </h3>
                <p>ex perspiciatis numquam alias!</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1>DATE : 15/05/2022</h1>
          <div className="ActiviterCart">
            <h2>TITRE : Lorem ipsum dolor sit amet.</h2>
            <div className="ActiviterCartBody">
              <div>
                <img
                  src="http://localhost:8000/assets/testApex.png"
                  alt="img"
                />
              </div>
              <div className="ActiviterCartText">
                <h3>
                  SUITE A UNE DEMANDE FAIT A UNE AGENCE DE DEVELOPPEUR WEB EN
                  OCTOBRE DERNIER EA NOUS PRESENTS LEUR NOUVELLE APPLICATION WEB
                </h3>
                <p>ex perspiciatis numquam alias!</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1>DATE : 15/05/2022</h1>
          <div className="ActiviterCart">
            <h2>TITRE : Lorem ipsum dolor sit amet consectetur</h2>
            <div className="ActiviterCartBody">
              <div>
                <img src="http://localhost:8000/assets/Life.jpg" alt="img" />
              </div>
              <div className="ActiviterCartText">
                <h3>
                  SUITE A UNE DEMANDE FAIT A UNE AGENCE DE DEVELOPPEUR WEB EN
                  OCTOBRE DERNIER EA NOUS PRESENTS LEUR NOUVELLE APPLICATION WEB
                </h3>
                <p>Lorem ipsum, dolor sit amet alias!</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1>DATE : 15/05/2022</h1>
          <div className="ActiviterCart">
            <h2>TITRE : Lorem ipsum dolor sit amet.</h2>
            <div className="ActiviterCartBody">
              <div>
                <img
                  src="http://localhost:8000/assets/testApex.png"
                  alt="img"
                />
              </div>
              <div className="ActiviterCartText">
                <h3>
                  ET VOICI DU Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Ipsa numquam maxime distinctio facere, sed assumenda,
                </h3>
                <p>
                  Lorem ipsum, dolor sit amet doloribus ad omnis maiores tempora
                  ex perspiciatis numquam alias!
                </p>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default LegendsCart;
