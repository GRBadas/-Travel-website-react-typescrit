
import styled from "styled-components"
import badas from "../assets/badas.jpg"

export default function Testimonials() {
  return (
    <Section id="testimonials">
      <div className="title">
        <h2>Clientes Satisfeitos</h2>
      </div>
      <div className="testimonials">
      <div className="testimonial">
        <p>
            Texto sobre qualquer coisa escrito aqui só
            pra enrolar e fingir que tem alguma coisa
        </p>
        <div className="info">
            <img src={badas} alt="" />
            <div className="details">
                <h4>Badas</h4>
                <span>CEO - Badas Web Solutions</span>
            </div>
        </div>
      </div>

      <div className="testimonial">
        <p>
            Texto sobre qualquer coisa escrito aqui só
            pra enrolar e fingir que tem alguma coisa
        </p>
        <div className="info">
            <img src={badas} alt="" />
            <div className="details">
                <h4>Badas</h4>
                <span>CEO - Badas Web Solutions</span>
            </div>
        </div>
      </div>

      <div className="testimonial">
        <p>
            Texto sobre qualquer coisa escrito aqui só
            pra enrolar e fingir que tem alguma coisa
        </p>
        <div className="info">
            <img src={badas} alt="" />
            <div className="details">
                <h4>Badas</h4>
                <span>CEO - Badas Web Solutions</span>
            </div>
        </div>
      </div>
      </div>

    </Section>
  )
}
const Section = styled.section`
    margin: 5rem 0;
    .title {
        text-align: center;
        margin-bottom: 2rem;
    }


    .testimonials {
        display: flex;
        justify-content: center;
        margin: 0 2rem;
        gap: 2rem;
        .testimonial {
            padding: 2rem;
            border-radius: 0.5rem;
            background-color: #cddee983;
            box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
            transition: 0.3s ease-in-out;
            &:hover {
                transform: translateX(0.4rem) translateY(-1rem);
            }
            .info {
                display: flex;
                justify-content: center;
                gap: 1rem;
                align-items: center;
                margin-top: 1rem;
                img {
                    height: 3rem;
                    border-radius: 0.8rem;
                }
                .details {
                    span {
                        font-size: 0.9rem;
                    }
                }
            }
        }
    }

    @media screen and (min-width:280px) and (max-width: 768px) {
        .testimonials {
            flex-direction: column;
            margin: 0;
            .testimonial {
                justify-content: center;
                .info {
                    flex-direction: column;
                    justify-content: center;
                }
            }
        }
    }
`;
