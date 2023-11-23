import React from "react";
import Logo from "../Assets/Logo.png";
import { BsWhatsapp, BsInstagram, BsFacebook } from "react-icons/bs";

const Footer = () => {
  const telefone = 5579999042338;
  const message = `Olá, tudo bem? Gostaria de uma cotação para meu veículo.`;

  const URL_WHATSAPP_SEM_MENSAGEM = `https://api.whatsapp.com/send?phone=${telefone}&text=${encodeURIComponent(message)}`;
  const URL_INSTAGRAM = "https://www.instagram.com/sergiclube.mais/";
  const URL_FACEBOOK = "https://www.facebook.com/edclube/";
  const URL_GOOGLE_MAPS = "https://maps.app.goo.gl/pPNMcgAmPLVt9Pau6";


  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="logo" />
        </div>
        <div className="footer-icons">
          <a href={URL_WHATSAPP_SEM_MENSAGEM} target="blank">
            <BsWhatsapp />
          </a>
          <a href={URL_INSTAGRAM} target="blank">
            <BsInstagram />
          </a>
          <a href={URL_FACEBOOK} target="blank">
            <BsFacebook />
          </a>
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <a target="blank" href={URL_GOOGLE_MAPS} className="footer-option">Avenida Pedro Calazans, 947 - Centro, Aracaju - SE, 49010-490.</a>
          <a target="blank" href="tel:+5579996434475" className="footer-option">(79) 99643-4475 (Recepção)</a>
          <a target="blank" href="tel:+5579999042338" className="footer-option">(79) 99904-2338 (Call Center)</a>
          <a target="blank" href="tel:+5579999326067" className="footer-option">(79) 99932-6067 (Setor de eventos)</a>
          <a target="blank" href="tel:+5530272416" className="footer-option">3027-2416 (Fixo)</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
