import React from "react";

import { Container } from "../styles/components/DataProfile";

import { FiBriefcase, FiGithub, FiGlobe, FiLinkedin, FiMail, FiMapPin, FiTwitter } from "react-icons/fi";

// import Briefcase from "../assets/svg/briefcase.svg";
// import GitHub from "../assets/svg/github.svg";
// import Globe from "../assets/svg/globe.svg";
// import Linkedin from "../assets/svg/linkedin.svg";
// import Mail from "../assets/svg/mail.svg";
// import MapPin from "../assets/svg/map-pin.svg";
// import Twitter from "../assets/svg/twitter.svg";

const DataProfile: React.FC = () => {
  let fontSizeIcons: number = 24;
  let colorIcons: string = "#BB86FC";

  return (
    <Container>
      <div>
        <FiMapPin fontSize={fontSizeIcons} color={colorIcons} title="Localização" />
        <p>Minas Gerais, Brasil</p>
      </div>
      <div>
        <FiBriefcase fontSize={fontSizeIcons} color={colorIcons} title="Empresa" />
        <p>Freelancer</p>
      </div>
      <div>
        <FiGithub fontSize={fontSizeIcons} color={colorIcons} title="GitHub" />
        <p>
          <a href="https://github.com/adairjuneoaf" target="_blank" rel="noreferrer" title="Ir para o GitHub de Adair Juneo">
            adairjuneoaf
          </a>
        </p>
      </div>
      <div>
        <FiLinkedin fontSize={fontSizeIcons} color={colorIcons} title="Linkedin" />
        <p>
          <a href="https://www.linkedin.com/in/adair-juneo-74322a216/" target="_blank" rel="noreferrer" title="Visitar o Linkedin de Adair Juneo">
            adair-juneo
          </a>
        </p>
      </div>
      <div>
        <FiTwitter fontSize={fontSizeIcons} color={colorIcons} title="Twitter" />
        <p>
          <a href="https://twitter.com/_adair_juneo" target="_blank" rel="noreferrer" title="Visitar o Twitter de Adair Juneo">
            _adair_juneo
          </a>
        </p>
      </div>
      <div>
        <FiGlobe fontSize={fontSizeIcons} color={colorIcons} title="Site" />
        <p>
          <a href="https://portfolio-adairjuneo.vercel.app" target="_blank" rel="noreferrer" title="Ir até o portfólio de Adair Juneo">
            https://portfolio-adairjuneo.vercel.app
          </a>
        </p>
      </div>
      <div>
        <FiMail fontSize={fontSizeIcons} color={colorIcons} title="E-mail" />
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
