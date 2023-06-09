import { styled } from 'styled-components'
import hero from "../assets/hero.jpg"

export default function Hero() {
  return (
    <Section id='hero'>
        <div className="background">
            <img src={hero} alt="" />
            <div>
                <div className="content">
                    <div className="title">
                        <h1>VIAJE E EXPLORE</h1>
                        <p>
                        Viagens surpreendentes, momentos inesquecíveis.
                        </p>
                    </div>
                    <div className="search">
                        <div className="container">
                            <label htmlFor="">Escolha seu destino</label>
                            <input type="text" placeholder='Procurar' />
                        </div>
                        <div className="container">
                            <label htmlFor="">Check-in</label>
                            <input type="date"/>
                        </div>
                        <div className="container">
                            <label htmlFor="">Check-out</label>
                            <input type="date" />
                        </div>
                        <button>Explore agora</button>
                    </div>
                </div>
            </div>
        </div>
    </Section>
  )
}

const Section = styled.section`
    position: relative;
    margin-top: 2rem;
    width: 100%;
    height: 100%;
    .background {
        height: 100%;
        img {
            width: 100%;
            filter: brightness(60%);
        }
    }
    .content {
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        z-index: 3;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        margin-top: 10%;
        .title {
            color: white;
            h1 {
                font-size: 3rem;
                letter-spacing: 0.2rem;
            }
            p {
                text-align: center;
                padding: 0 10vw;
                margin-top: 0.5rem;
                font-size: 1.2rem;
                text-transform: uppercase;
            }
        }
        .search {
            display: flex;
            background-color: #ffffffce;
            padding: 0.5rem;
            border-radius: 0.5rem;
            .container {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                padding: 0 1.5rem;
                label {
                    font-size: 1.1rem;
                    color: #370057;
                }
                input {
                    background-color: transparent;
                    border: none;
                    text-align: center;
                    color: black;
                    &[type="date"] {
                        padding-left: 1rem;
                    }
                    &::placeholder {
                        color: black;
                    }
                    &:focus {
                        outline: none;
                    }
                }
            }
            button {
                padding: 1rem;
                cursor: pointer;
                border-radius: 0.3rem;
                border: none;
                color: white;
                background-color: #7300b6;
                font-size: 0.9rem;
                text-transform: uppercase;
                transition: 0.3s ease-in-out;
                &:hover {
                    background-color: #370057;
                }
            }
        }
    }

    @media screen and (min-width:280px) and (max-width: 980px) {
        height: 25rem;
        .background {
            img {
                height: 100%;
            }
        }
        .content {
            .title {
                h1 {
                    font-size: 1rem;
                }
                p {
                    font-size: 0.8rem;
                    padding: 1vw;
                }
            }
            .search {
                flex-direction: column;
                padding: 0.8rem;
                gap: 0.8rem;
                .container {
                    padding: 0 0.8rem;
                    input[type="date"] {
                        padding-left: 1rem;
                    }
                }
                button {
                    padding: 1rem;
                    font-size: 1rem;
                        }
            }
        }
    }
`;