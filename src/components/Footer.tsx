
import styled from "styled-components"
import {BsLinkedin, BsFacebook} from "react-icons/bs"
import {AiFillInstagram} from "react-icons/ai"

export default function Footer() {
  return (
    <FooterContainer>
        <span>Copyright &copy; 2023 Badas. All rights reserved</span>
        <ul>
            <li><a href="#hero">Início</a></li>
            <li><a href="#services">Serviços</a></li>
            <li><a href="#recommend">Recomendações</a></li>
            <li><a href="#testimonials">Clientes Satisfeitos</a></li>
        </ul>
        <ul className="social_links">
            <li><BsFacebook /></li>
            <li><BsLinkedin /></li>
            <li><AiFillInstagram /></li>
        </ul>
    </FooterContainer>
  )
}

const FooterContainer = styled.footer`
    display: flex;
    justify-content: space-evenly;
    background-color: #00a0df36;
    padding: 2.5rem;
    border-radius: 0.5rem;
    gap: 2rem;
    ul {
        display: flex;
        list-style-type: none;
        gap: 2rem;
        li {
            a {
                text-decoration: none;
                color: black;
                transition: 0.3s ease-in-out;
                &:hover {
                    color: #302ce9;
                }
            }
            svg {
                font-size: 1.3rem;
                transition: 0.3s ease-in-out;
                &:hover {
                    color: #302ce9;
                }
            }
        }
    }

    @media screen and (min-width:280px) and (max-width: 1024px) {
        flex-direction: column;
        gap: 2rem;
        ul {
            flex-direction: column;
        }
        .social_links {
            flex-direction: row;
        }
    }
`;
