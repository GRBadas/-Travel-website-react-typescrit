import {useState} from "react"
import styled from "styled-components";
import Destination1 from "../assets/Destination1.png";
import Destination2 from "../assets/Destination2.png";
import Destination3 from "../assets/Destination3.png";
import Destination4 from "../assets/Destination4.png";
import Destination5 from "../assets/Destination5.png";
import Destination6 from "../assets/Destination6.png";
import info1 from "../assets/info1.png";
import info2 from "../assets/info2.png";
import info3 from "../assets/info3.png";

interface Destination {
    image: string;
    title: string;
    subTitle: string;
    cost: string;
    duration: string;
}

export default function Recommend() {

    const data: Destination[] = [
        {
          image: Destination1,
          title: "Singapura",
          subTitle: "Singapura, oficialmente a República de Singapura, é um país localizado no sudeste da Ásia.",
          cost: "38,800",
          duration: "Aproximadamente 2 dias",
        },
        {
          image: Destination2,
          title: "Tailândia",
          subTitle: "A Tailândia é um país do sudeste asiático conhecido por sua culinária saborosa, praias exóticas e templos budistas magníficos.",
          cost: "54,200",
          duration: "Aproximadamente 2 dias",
        },
        {
          image: Destination3,
          title: "Paris",
          subTitle: "Paris, a capital da França, é uma importante cidade europeia e um centro mundial de arte, moda, cultura e gastronomia.",
          cost: "45,500",
          duration: "Aproximadamente 2 dias",
        },
        {
          image: Destination4,
          title: "Nova Zelândia",
          subTitle: "A Nova Zelândia é um país insular localizado no sudoeste do Oceano Pacífico, conhecido por suas paisagens impressionantes, esportes radicais e cultura maori.",
          cost: "24,100",
          duration: "Aproximadamente 2 dias",
        },
        {
          image: Destination5,
          title: "Bora Bora",
          subTitle: "Bora Bora é uma pequena ilha no sudoeste do Pacífico Sul, localizada a noroeste da Polinésia Francesa e conhecida por suas águas cristalinas e resorts de luxo.",
          cost: "95,400",
          duration: "Aproximadamente 2 dias",
        },
        {
          image: Destination6,
          title: "Londres",
          subTitle: "Londres, a capital da Inglaterra e do Reino Unido, é uma cidade histórica e vibrante, famosa por seus marcos icônicos, museus, teatros, lojas e restaurantes.",
          cost: "38,800",
          duration: "Aproximadamente 2 dias",
        },
      ];
    
      const packages: string[] = [
        "Curta o Fim de Semana",
        "Pacote de Feriado",
        "Turismo em Grupo",
        "Viagem Longa para Aproveitar",
      ];
    
      const [active, setActive] = useState<number>(1);

  return (
    <Section id="recommend">
        <div className="title">
            <h2>Destinos Recomendados</h2>
        </div>
        <div className="packages">
            <ul>
                {
                    packages.map((pkg,index) => {
                        return <li className={active===index+1 ? "active" : " "} 
                        onClick={() => setActive(index + 1)}>
                            {pkg}
                        </li>
                    })
                }
            </ul>
        </div>
        <div className="destinations">
            {
                data.map((destination)=> {
                    return (
                        <div className="destination">
                            <img src={destination.image} alt="Destination Image" />
                            <h3>{destination.title}</h3>
                            <p>{destination.subTitle}</p>
                            <div className="info">
                                <div className="services">
                                    <img src={info1} alt="" />
                                    <img src={info2} alt="" />
                                    <img src={info3} alt="" />
                                </div>
                                <h4>{destination.cost}</h4>
                            </div>
                            <div className="distance">
                                <span>1000Kms</span>
                                <span>{destination.duration}</span>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </Section>
  )
}

const Section = styled.section`
    padding: 2rem 0;
    .title {
        text-align: center;
    }
    .packages {
        display: flex;
        justify-content: center;
        margin: 2rem 0;
        ul {
            display: flex;
            justify-content: center;
            width: max-content;
        }
        li {
            padding: 1rem 2rem;
            border-bottom: 0.1rem solid black;
        }
        .active {
            border-bottom: 0.3rem solid #8338ec;
        }
    }
    .destinations {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 3rem;
        padding: 0 3rem;
        .destination {
            padding: 1rem;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            background-color: #cddee983;
            border-radius: 1rem;
            transition: 0.3s ease-in-out;
            &:hover {
                transform: translateX(0.4rem) translateY(-1rem);
                box-shadow: rgba(0,0,0,0.35) 0px 5px 15px;
            }
            img {
                width: 100%;
            }
            .info{
                display: flex;
                align-items: center;
                .services{
                    display: flex;
                    gap: 0.3rem;
                    img{
                        width: 2rem;
                        border-radius: 1rem;
                        background-color: #4d2ddb84;
                        padding: 0.2rem 0.4rem;
                    }
                }
            }
            display: flex;
            justify-content: space-between;
        }
        .distance {
            display: flex;
            justify-content: space-between;
        }
    }

    @media screen and (min-width:280px) and (max-width: 768px) {
        .packages {
            ul {
                li {
                    padding: 0 0.5rem;
                    font-size: 2vh;
                    padding-bottom: 1rem;
                }
                .active {
                    border-bottom-width: 0.2rem ;
                }
            }
        }
        .destinations {
            grid-template-columns: 1fr;
            padding: 0;
        }
    }
`;
