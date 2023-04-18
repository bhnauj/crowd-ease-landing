import { React , useContext } from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import logo from '../../logo.png';
import logoLight from '../../logoLight.png';
import logoEnim from '../../logo.gif';
import logoLightEnim from '../../logoLight.gif'
import ThemeContext from '../../context/themeContext';

const Nav = styled.nav`
  height: 55px;
  border-bottom: 3px solid var(--text-heading-dark);
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    padding: 15px 0;
  }
`

const Navbar = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Nav>
      <div className="logo">
      {theme === "light" ? (
                <img className='logoMain' src={logoLightEnim} alt="night" />
              ) : (
                <img className='logoMain' src={logoEnim}  alt="logo" />
              )}
        
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar