import React from "react";
import { ImWhatsapp } from "react-icons/im"
import { useState } from "react";
import BotaoTelefone from "../Assets/botaoassistencia.png"


const Home = () => {
  const telefoneBoleto = 5579999042338
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const styleTeste = {
    width: isModalOpen ? '35rem' : '0rem',
    height: isModalOpen ? '12rem' : '0rem',
    bottom: isModalOpen ? '15rem' : '2rem',
    right: isModalOpen ? '10rem' : '2rem',
    backgroundColor: isModalOpen ? 'white' : ' ',
  }

  
  const handleWhatsAppButtonClickWithoutMessage = () => {
    const message = `Olá, tudo bem? Gostaria da segunda via do boleto.`;

    const whatsappUrl = `https://wa.me/${telefoneBoleto}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');

    window.dataLayer.push({
      'event': 'click_button_lead'
    });
  };
  return (
    <div className="home-container">
      <div className="home-banner-container">
        <div className="home-titulo-section">
          <p>
            *Não somos seguradora
          </p>
          <button onClick={handleWhatsAppButtonClickWithoutMessage} className="whatsapp-button" target="blank">
            <ImWhatsapp /> Segunda via do boleto
          </button>
        </div>
        <h1 className="primary-heading">
          Juntos, protegemos o que importa: o seu veículo e sua tranquilidade!
        </h1>
      </div>
      <div className="modal-container">
        <button onClick={toggleModal} className="floating-button">
          <img src={BotaoTelefone} alt="botão telefone 24h" className="botao-telefone" />
        </button>
        {isModalOpen && (
          <div style={styleTeste} className="modal">
            <div className="modal-content">
              <p><strong>CENTRAL DE ATENDIMENTO 24H:</strong></p>
              <a target="blank" href="tel:+557141415780">(71) 4141-5780</a>
              <br />
              <a target="blank" href="tel:+557141415790">(71) 4141-5790</a>
              <br />
              <a target="blank" href="tel:+557130321140">(71) 3032-1140</a>
              <br />
              <a target="blank" href="tel:+5508006031140">outras regiões: 0800 603 1140</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
