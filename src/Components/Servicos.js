import React from "react";
import brazil from "../Assets/brazil.png";
import callCenter from "../Assets/call-center.png";
import car2 from "../Assets/car-2.png";
import carCollision from "../Assets/car-collision.png";
import car from "../Assets/car.png";
import fenderBender from "../Assets/fender-bender.png";
import fire from "../Assets/fire.png";
import hacker from "../Assets/hacker.png";


const Servicos = () => {
  const coberturaData = [
    {
      image: brazil,
      title: "Proteção em todo Brasil",
      text: "Conte com nossa proteção e auxilio em todo o Brasil.",
    },
    {
      image: callCenter,
      title: "Assistência 24/7",
      text: "Conte com serviços de 800km de guincho, chaveiro, taxi aux, troca de pneu, falta de combustível, pane elétrica e mecânica. *VERIFIQUE CONDIÇÔES.",
    },
    {
      image: car2,
      title: "Perda total",
      text: "Caso o estrago se configure em Perda Total, ressarcimento de até 100% do valor de tabela FIPE do seu veículo. *VERIFIQUE CONDIÇÕES",
    },
    {
      image: carCollision,
      title: "Proteção para terceiros",
      text: "Em caso de acidentes envolvendo terceiros, cobrimos os danos causados ao veículo automotivo de acordo com o plano contratado.",
    },
    {
      image: car,
      title: "Carro reserva",
      text: "Em casos de colisão e seu veículo precise ir para a oficina, conte com a cobertura de carro reserva por até 10 dias. *VERIFIQUE CONDIÇÕES.",
    },
    {
      image: fenderBender,
      title: "Colisão",
      text: "Conserto do seu veículo, em casos de acidente. *VERIFIQUE CONDIÇÕES",
    },
    {
      image: fire,
      title: "Incêndio",
      text: "Indenização total ou parcial em casos de incêndio decorrente de colisão.",
    },
    {
      image: hacker,
      title: "Furto e roubo",
      text: "Ressarcimento de até 100% do valor da tabela FIPE em casos de rubo ou furto do seu veículo. *VERIFIQUE CONDIÇÕES.",
    },
  ];
  return (
    <div className="facility-wrapper">
      <h1 className="primary-subheading">Nossas coberturas</h1>
      <div className="about-section-text-container">
        <div className="work-section-bottom">
          {coberturaData.map((data) => (
            <div className="servico-info" key={data.title}>
              <div className="info-boxes-img-container">
                <img src={data.image} alt="" />
                <h2>{data.title}</h2>
              </div>
              <div>
                <p>{data.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Servicos;
