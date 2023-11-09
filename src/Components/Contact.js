import React, { useState } from "react";
import { ImWhatsapp } from "react-icons/im"

const Contact = () => {
  const [nome, setNome] = useState();
  const telefoneBoleto = 5571999011086;
  const handleWhatsAppButtonClick = () => {
    const message = `Olá, tudo bem? Meu nome é ${nome} e eu gostaria de uma cotação para meu veículo.`;

    const whatsappUrl = `https://wa.me/${telefoneBoleto}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');

    window.dataLayer.push({
      'event': 'click_button_lead_nome',
      'nome': nome,
    });
  };

  const handleNameChange = (e) => {
    setNome(e.target.value);
  };

  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Em que podemos te ajudar?</h1>
      <h1 className="primary-heading">Entre em contato conosco!</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="Seu nome" onChange={handleNameChange} />
        <button onClick={handleWhatsAppButtonClick} className="whatsapp-button">
          <ImWhatsapp /> Fale conosco
        </button>
      </div>
    </div>
  );
};

export default Contact;
