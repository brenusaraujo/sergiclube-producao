import React from "react";
import Levi from "../Assets/Levi.png";
import CentralPet from "../Assets/central-pet.png";
import Cleybi from "../Assets/CLEYBI.png";
import helpservice from "../Assets/helpservice.jpg";
import nordescar from "../Assets/nordescar.jpeg";
import parceiro1 from "../Assets/parceiro1.jpeg";
import RsParabrisa from "../Assets/rs-parabrisa.png";
import FarmaciaLuiz from "../Assets/farmacialuiz.jpg"

const Work = () => {
  const workInfoData = [
    {
      image: Levi,
      title: "Levi Autopeças",
      text: "(71) 3043-9385 / (71) 9 9123-5658",
    },
    {
      image: CentralPet,
      title: "Central Pet",
      text: "(71) 9 9925-4262",
    },
    {
      image: Cleybi,
      title: "Cleybir motors",
      text: "(71) 3018-1880 / 9 9200-6465",
    },
    {
      image: helpservice,
      title: "Help Service",
      text: "(71) 9 9966-5890",
    },
    {
      image: nordescar,
      title: "Nordescar Monitoramento",
      text: "(71) 9 9900-1888",
    },
    {
      image: parceiro1,
      title: "Perfect Car",
      text: "(71) 9 9200-6465",
    },
    {
      image: RsParabrisa,
      title: "RS para-brisa",
      text: "(71) 9 8808-8673 / 3212-9256",
    },
    {
      image: FarmaciaLuiz,
      title: "Farmácia Luis",
      text: "(71) 9 9717-0036",
    },
  ];
  return (
    <div className="consultants-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Clube de vantagens</p>
        <h1 className="primary-heading">Confira quem são nosso parceiros</h1>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
              <h2>{data.title}</h2>
            </div>
            <div className="container-parceiros">
              <p>{data.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
