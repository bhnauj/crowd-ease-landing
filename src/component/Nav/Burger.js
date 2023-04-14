import React ,{useState, useContext} from 'react';
import ThemeContext from '../../context/themeContext';
import styled from 'styled-components'
import RightNav from './RightNav';

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

  body {
    overflow-y:  ${({ open }) => open ? 'hidden' : 'auto'};
  }
`;

const Burger = () => {
    const [open, setOpen] = useState(false);
    const { theme } = useContext(ThemeContext);
  return (
    <>
    <StyledBurger theme={theme} open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
    <RightNav open={open} />
    </>
  )
}

export default Burger
