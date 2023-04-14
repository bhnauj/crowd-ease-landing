import React from "react";
import styled from "styled-components";
import { Link } from 'react-scroll';
import useLocalStorage from "use-local-storage";
import night from "../../assets/night.png";
import morning from "../../assets/Morning.png";
import { useContext } from "react";
import ThemeContext from "../../context/themeContext";
import proposal from '../../assets/CrowdEaseProposal.pdf'

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  font-family: "Circular Std";

  li {
    padding: 10px 0 10px 30px;
    font-weight: 700;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: ${({ theme }) => (theme === 'dark' ? "black" : "white")};
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 4rem;
    right: 0;
    height: 100vh;
    width: 100%;
    transition: transform 0.3s ease-in-out;
    li {
      color: ${({ theme }) => (theme === 'dark' ? "white" : "black")};
    }
  }
`;

const RightNav = ({ open }) => {
  const { setThemeMode } = useContext(ThemeContext);
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setThemeMode(newTheme);
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Consumer>
      {() => (
        <Ul open={open} theme={theme}>
          <li><Link to="home" spy={true} smooth={true} offset={50} duration={500}>Overview</Link></li>
          <li><Link to="feature" spy={true} smooth={true} offset={-30} duration={500}>Feature</Link></li>
          <li><Link to="team" spy={true} smooth={true} offset={-150} duration={3000}>Team</Link></li>
          <li><Link to="contact" spy={true} smooth={true} offset={-150} duration={3000}>Contact</Link></li>
          <li>
            <button className="systemDesign"><a href="http://localhost:3000/pdf-name.pdf" target='_blank' rel="noreferrer">Design System</a></button>
          </li>
          <li>
            <button className="proposal"><a href={proposal} className="proposal" download>Download Proposal</a></button>
          </li>
          <li>
            <button className="theme" onClick={switchTheme}>
              {theme === "light" ? (
                <img src={night} alt="night" />
              ) : (
                <img src={morning} alt="morning" />
              )}
            </button>
          </li>
        </Ul>
      )}
    </ThemeContext.Consumer>
  );
};

export default RightNav;
