import React from "react";

import { Container } from "../styles/components/DataProfile";

import Briefcase from "../assets/svg/briefcase.svg";
import GitHub from "../assets/svg/github.svg";
import Globe from "../assets/svg/globe.svg";
import Linkedin from "../assets/svg/linkedin.svg";
import Mail from "../assets/svg/mail.svg";
import MapPin from "../assets/svg/map-pin.svg";
import Twitter from "../assets/svg/twitter.svg";

export default function DataProfile() {
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
          <a href="#">adairjuneoaf</a>
        </p>
      </div>
      <div>
        <img src={Linkedin} alt="Linkedin" />
        <p>
          <a href="#">adair-juneo</a>
        </p>
      </div>
      <div>
        <img src={Twitter} alt="Twitter" />
        <p>
          <a href="#">_adair_juneo</a>
        </p>
      </div>
      <div>
        <img src={Globe} alt="Site" />
        <p>
          <a href="https://portfolio-adairjuneo.vercel.app">https://portfolio-adairjuneo.vercel.app</a>
        </p>
      </div>
      <div>
        <img src={Mail} alt="E-mail" />
        <p>
          <a href="#">adair_juneo@hotmail.com</a>
        </p>
      </div>
    </Container>
  );
}
