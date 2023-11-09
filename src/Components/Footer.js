import React from "react";
import Logo from "../Assets/Logo.png";
import { BsWhatsapp, BsInstagram, BsFacebook } from "react-icons/bs";

const Footer = () => {
  const telefone = 5571992402531;
  const message = `Olá, tudo bem? Gostaria de uma cotação para meu veículo.`;

  const URL_WHATSAPP_SEM_MENSAGEM = `https://api.whatsapp.com/send?phone=${telefone}&text=${encodeURIComponent(message)}`;
  const URL_INSTAGRAM = "https://www.instagram.com/edclube.mais/";
  const URL_FACEBOOK = "https://www.facebook.com/edclube/";
  const URL_GOOGLE_MAPS = "https://www.google.com.br/maps/place/Condomínio+Edifício+Catabas+Empresarial/@-12.9812211,-38.4564026,15z/data=!4m6!3m5!1s0x7161b1a59ca0445:0x6c83632e7c80bd6a!8m2!3d-12.9812211!4d-38.4564026!16s%2Fg%2F1vf9ckns?entry=ttu";


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
          <a target="blank" href={URL_GOOGLE_MAPS} className="footer-option">Av. Tancredo Neves, N° 1222, Sala 1004, Edifício Catabas Tower, Caminho das Árvores, Salvador, Bahia, 41820-020.</a>
          <a target="blank" href="tel:+5571992402531" className="footer-option">(71) 99240-2531 (cotação)</a>
          <a target="blank" href="tel:+557134329999" className="footer-option">(71) 3432-9999 (central telefônica)</a>
          <a target="blank" href="tel:+5571999011086" className="footer-option">(71) 99901-1086 (WhatsApp central)</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
