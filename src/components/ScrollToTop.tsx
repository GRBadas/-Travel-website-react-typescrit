import styled from "styled-components"
import logo from "../assets/logo.png"
import {useState} from "react"

interface ToTopProps {
  scrollState: boolean;
}

export default function ScrollToTop() {
    const [scrollState, setScrollState] = useState<boolean>(false);

    const toTop = ():void => {
      window.scrollTo({top:0})
    };

    window.addEventListener("scroll", () => {
      window.pageYOffset > 200 ? setScrollState(true) : setScrollState(false);
    })

  return (
    <ToTop scrollState={scrollState} onClick={() => toTop()}>
      <img src={logo} alt="" />
    </ToTop>
  )
}

const ToTop = styled.div<ToTopProps>`
  display: ${({ scrollState }) => (scrollState ? "block" : "none")};
  position: fixed;
  bottom: 1rem;
  right: 2rem;
  z-index: 10;
  cursor: pointer;
  img {
    height: 1.5rem;
  }
  border-radius: 2rem;
  background-color: #1900ff39;
  padding: 0.3rem;
`;
