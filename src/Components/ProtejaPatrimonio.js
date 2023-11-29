import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";

function calcularAnoDosCarros(intervaloAnos) {
  const anoAtual = new Date().getFullYear();
  const anoInicial = anoAtual - intervaloAnos + 1;
  const anoDosCarros = Array.from({ length: intervaloAnos }, (_, index) => anoInicial + index);
  return anoDosCarros;
}

const ProtejaPatrimonio = () => {
  const intervaloAnos = 15;
  const anoDosCarros = calcularAnoDosCarros(intervaloAnos);
  const telefone = 5571992402531;
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefoneUser, setTelefoneUser] = useState('');
  const [modeloCarro, setModeloCarro] = useState('');
  const [anoCarro, setAnoCarro] = useState(new Date().getFullYear());

  const formatarTelefone = (input) => {
    const numeroApenasDigitos = input.replace(/\D/g, '');

    let formatoTelefone = '';

    if (numeroApenasDigitos.length >= 2) {
      formatoTelefone = `(${numeroApenasDigitos.substring(0, 2)}`;
    } else {
      formatoTelefone = numeroApenasDigitos;
    }

    if (numeroApenasDigitos.length > 2) {
      formatoTelefone += `) ${numeroApenasDigitos.substring(2, 3)}`;
    }

    if (numeroApenasDigitos.length > 3) {
      formatoTelefone += `${numeroApenasDigitos.substring(3, 7)}`;
    }

    if (numeroApenasDigitos.length > 7) {
      formatoTelefone += `-${numeroApenasDigitos.substring(7, 11)}`;
    }

    return formatoTelefone;
  };

  const handleNomeChange = (e) => {
    setNome(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleTelefoneChange = (e) => {
    const novoValor = e.target.value;
    setTelefoneUser(formatarTelefone(novoValor));
  };

  const handleModeloCarroChange = (e) => {
    setModeloCarro(e.target.value);
  };

  const handleAnoCarroChange = (e) => {
    setAnoCarro(e.target.value);
  };

  const handleWhatsAppButtonClick = () => {
    const message = `Olá, tudo bem? Eu me chamo ${nome}, tenho um ${modeloCarro} ${anoCarro} e gostaria de uma cotação para meu veículo.`;

    const whatsappUrl = `https://wa.me/${telefone}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');

    window.dataLayer.push({
      'event': 'click_button_lead_qualificado',
      'email': email,

    });
  };
  return (
    <div className="proteja-section-wrapper">
      <div className="home-form-section">
        <h3 className="home-form-heading">Faça sua simulação agora mesmo!</h3>
        <br />
        <form action="post">
          <div className="form-section">
            <input
              style={{ width: '19rem', height: '2rem', fontSize: '1rem', marginBottom: '1rem' }} type="text" id="nome" name="nome" placeholder="Seu nome" value={nome}
              onChange={handleNomeChange} />
          </div>

          <div className="form-section">
            <input style={{ width: '19rem', height: '2rem', fontSize: '1rem', marginBottom: '1rem' }} type="email" id="email" name="email" placeholder="Seu email" required value={email}
              onChange={handleEmailChange} />
          </div>

          <div className="form-section" id="telefone">
            <input style={{ width: '19rem', height: '2rem', fontSize: '1rem', marginBottom: '1rem' }} type="tel" id="phone" name="phone" placeholder="Seu telefone" pattern="[0-9]{2}[9]{1}[0-9]{4}[0-9]{4}" required value={telefoneUser}
              onChange={handleTelefoneChange} />
          </div>

          <div className="form-section">
            <input style={{ width: '19rem', height: '2rem', fontSize: '1rem', marginBottom: '1rem' }} type="text" id="modeloCarro" name="modeloCarro" placeholder="Modelo do carro" required value={modeloCarro}
              onChange={handleModeloCarroChange} />
          </div>

          <div className="form-section">
            <label htmlFor="anoCarro">Escolha o ano do carro:</label>
            <select id="anoCarro" value={anoCarro} onChange={handleAnoCarroChange}>
              {anoDosCarros.map((ano) => (
                <option key={ano} value={ano}>
                  {ano}
                </option>
              ))}
            </select>
          </div>
          <br />
          <button onClick={handleWhatsAppButtonClick} className="secondary-button" target="blank" >
            Enviar <FiArrowRight />
          </button>
        </form>
      </div>
      <div>
        <h1>
          Proteja seu veículo!
        </h1>
        <p>Garanta a sua tranquilidade com proteção veicular que você pode confiar</p>
      </div>
    </div>
  );
};

export default ProtejaPatrimonio;
