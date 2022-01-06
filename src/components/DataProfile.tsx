import React from "react";

import { Container } from "../styles/components/DataProfile";

import Briefcase from "../assets/svg/briefcase.svg";
import GitHub from "../assets/svg/github.svg";
import Globe from "../assets/svg/globe.svg";
import Linkedin from "../assets/svg/linkedin.svg";
import Mail from "../assets/svg/mail.svg";
import MapPin from "../assets/svg/map-pin.svg";
import Twitter from "../assets/svg/twitter.svg";

const DataProfile: React.FC = () => {
  return (
    <Container>
      <div>
        <img src={MapPin} alt="Localização" />
        <p>Minas Gerais, Brasil</p>
      </div>
      <div>
        <img src={Briefcase} alt="Empresa" />
        <p>Freelancer</p>
      </div>
      <div>
        <img src={GitHub} alt="GitHub" />
        <p>
          <a href="https://github.com/adairjuneoaf" target="_blank" rel="noreferrer" title="Ir para o GitHub de Adair Juneo">
            adairjuneoaf
          </a>
        </p>
      </div>
      <div>
        <img src={Linkedin} alt="Linkedin" />
        <p>
          <a
            href="https://www.linkedin.com/in/adair-juneo-74322a216/"
            target="_blank"
            rel="noreferrer"
            title="Visitar o Linkedin de Adair Juneo"
          >
            adair-juneo
          </a>
        </p>
      </div>
      <div>
        <img src={Twitter} alt="Twitter" />
        <p>
          <a href="https://twitter.com/_adair_juneo" target="_blank" rel="noreferrer" title="Visitar o Twitter de Adair Juneo">
            _adair_juneo
          </a>
        </p>
      </div>
      <div>
        <img src={Globe} alt="Site" />
        <p>
          <a href="https://portfolio-adairjuneo.vercel.app" target="_blank" rel="noreferrer" title="Ir até o portfólio de Adair Juneo">
            https://portfolio-adairjuneo.vercel.app
          </a>
        </p>
      </div>
      <div>
        <img src={Mail} alt="E-mail" />
        <p>
          <a href="mailto:adair_juneo@hotmail.com" target="_blank" rel="noreferrer" title="Enviar um e-mail para Adair Juneo">
            adair_juneo@hotmail.com
          </a>
        </p>
      </div>
    </Container>
  );
};

export default DataProfile;
