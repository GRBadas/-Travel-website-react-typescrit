import styled from 'styled-components'
import logo from "../assets/logo.png"
import {useState} from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { VscChromeClose } from 'react-icons/vsc'

interface ResponsiveNavProps {
    state: boolean;
}

export default function Navbar() {
    const [navbarState, setNavbarState] = useState<boolean>(false)

  return (
    <>
      <Nav>
        <div className="brand">
            <div className="container">
                <img src={logo} alt="" />
                Travelo
            </div>
            <div className="toggle">
                {
                    navbarState ? <VscChromeClose onClick={() => setNavbarState(false)}/> : 
                    <GiHamburgerMenu onClick={() => setNavbarState(true)}/>
                }
            </div>
        </div>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#recommend">Recommend</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
        </ul>
        <button>Connect</button>
      </Nav>
      <ResponsiveNav state={navbarState}>
      <ul>
            <li><a href="#hero" onClick={()=> setNavbarState(false)}>Hero</a></li>
            <li><a href="#services" onClick={()=> setNavbarState(false)}>Services</a></li>
            <li><a href="#recommend" onClick={()=> setNavbarState(false)}>Recommend</a></li>
            <li><a href="#testimonials" onClick={()=> setNavbarState(false)}>Testimonials</a></li>
        </ul>
      </ResponsiveNav>
    </>
  )
}

const Nav = styled.nav`
    display:flex;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    justify-content: space-between ;
    align-items: center;
    .brand {
        .container {
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 0.4rem;
            font-size: 1.4rem;
            font-weight: 900;
            text-transform: uppercase;
        }
        .toggle {
            display: none
        }
    }
    ul {
        display: flex;
        list-style-type: none;
        gap: 1rem;
        li {
            a{
                text-decoration: none;
                color: #0077b6;
                font-size: 1.2rem;
                transition: 0ms.1s ease-in-out;
                &:hover {
                    color: #023e8a;
                }
            }
            &:first-of-type {
                a{
                    font-weight: 600;
                }
            }
        }
    }
    button {
        padding: 0.5em 1rem;
        cursor: pointer;
        border-radius: 1rem;
        border: none;
        color: white;
        background-color: #48cae4;
        text-transform: uppercase;
        font-size: 1.1rem;
        letter-spacing: 0.1rem;
        transition: 0.3s ease-in-out;
        &:hover {
            background-color: #023e8a;
        }
    }

    @media screen and (min-width:280px) and (max-width: 1080px){
        .brand {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            .toggle {
                display: block;
            }
        }
        ul,button {
            display: none;
        }
    }
`;

const ResponsiveNav = styled.div<ResponsiveNavProps>`
    display: flex;
    position: absolute;
    z-index: 5;
    top: ${({state})=> state?"50px" : "-400px"};
    background-color: white;
    height: 30vh;
    width: 100%;
    align-items: center;
    transition: 0.3s ease-in-out;
    ul {
        list-style-type: none;
        width: 100%;
        li {
            width: 100%;
            margin: 1rem 0;
            margin-left: 2rem;
            a {
                text-decoration: none;
                color: #0077b6;
                font-size: 1.2rem;
                transition: 0.1s ease-in-out;
                &:hover {
                    color: #023e8a;
                }
            }
        }
    }
`;
