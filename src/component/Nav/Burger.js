import React ,{useState, useContext, useEffect} from 'react';
import ThemeContext from '../../context/themeContext';
import styled from 'styled-components'
import RightNav from './RightNav';

import useLocalStorage from "use-local-storage";
import night from "../../assets/night.png";
import morning from "../../assets/Morning.png";

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: sticky;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ theme }) => theme === 'dark' ? 'white' : 'black'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const Burger = () => {
    const [open, setOpen] = useState(false);
    
    const { setThemeMode } = useContext(ThemeContext);
    useEffect(()  => {
      if(open) {
        document.body.classList.add('lock-scroll');
      } else {
        document.body.classList.remove('lock-scroll');
      }
      
  
      return () => {
          document.body.classList.remove('lock-scroll');
      };
  }, [open]);

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
    <>
    <StyledBurger theme={theme} open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
     <button className="theme" onClick={switchTheme}>
              {theme === "light" ? (
                <img src={night} alt="night" />
              ) : (
                <img src={morning} alt="morning" />
              )}
      </button>
    
    <RightNav open={open} setOpen={setOpen} />
    </>
  )
}

export default Burger
