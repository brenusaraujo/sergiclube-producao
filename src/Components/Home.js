import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { ImWhatsapp } from "react-icons/im"
import { useState } from "react";
import BotaoTelefone from "../Assets/botaoassistencia.jpg"

function calcularAnoDosCarros(intervaloAnos) {
  const anoAtual = new Date().getFullYear();
  const anoInicial = anoAtual - intervaloAnos + 1;
  const anoDosCarros = Array.from({ length: intervaloAnos }, (_, index) => anoInicial + index);
  return anoDosCarros;
}

const Home = () => {
  const intervaloAnos = 15;
  const anoDosCarros = calcularAnoDosCarros(intervaloAnos);
  const telefone = 5571992402531;
  const telefoneBoleto = 5571999011086;
  const telefoneNovo = 5579999042338;
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefoneUser, setTelefoneUser] = useState('');
  const [modeloCarro, setModeloCarro] = useState('');
  const [anoCarro, setAnoCarro] = useState(new Date().getFullYear());
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
          <h1 className="primary-heading">
            Juntos, protegemos o que importa: o seu veículo e sua tranquilidade!
          </h1>
          <p>
            *Não somos seguradora
          </p>
          <button onClick={handleWhatsAppButtonClickWithoutMessage} className="whatsapp-button" target="blank">
            <ImWhatsapp /> Segunda via do boleto
          </button>
        </div>
        {/* <div className="home-form-section">
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
        </div> */}
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
