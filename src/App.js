import videoIllustration from "./Boards.mp4";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import footerLogo from "./logoFooter.png";
import ios from "./ios.png";
import android from "./android.png";
import darkios from "./darkios.png";
import darkAndroid from "./darkAndroid.png";
import logo from './logo.png';
import logoLight from './logoLight.png';
import mapAnim from "./MapAnim.png";
import dropDown from "./dropDown.png";
import dropDownDark from "./dropDownDark.png";
import hotel from "./assets/LandingDay.png";
import hotelNight from "./assets/LandingNight.png";
import useLocalStorage from "use-local-storage";
import Team from "./component/team";
import { Link } from 'react-scroll';
import React from "react";
import SliderModel from "./component/slider.js";
import Navbar from "./component/Nav/Navbar.js";

import ThemeContext from './context/themeContext.js';

function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  console.log('context theme is', theme)

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setThemeMode: setTheme}}>
      <div className="App" data-theme={theme}>
        <header id="home">
          <Navbar />
        </header>
        <body>
          <section>
            
            <div className="heroImage">
            <p className="heroHeading">
                Be in the Know. Track events and monitor live crowds with ease!
              </p>
              <p className="heroHeading2 mainText">
              Crowd Ease assists restaurant managers to plan their <br/> resources and marketing strategy.
              </p>
              {/* <p className="mainText heroHeading3" >
              Scroll for more <br/>
              <Link to="overview" spy={true} smooth={true} offset={-50} duration={3000}>
              {theme === "light" ? (
                  <img src={dropDown} alt="dropDown"/>
                ) : (
                  <img src={dropDownDark} alt="dropDown" />
                )}
              </Link>
              </p> */}

            {theme === "light" ? (
                  <img src={hotel} alt="night" />
                ) : (
                  <img src={hotelNight} alt="android" />
                )}
              
              
            </div>
          </section>
          <section id="overview" className="crowdEaseMain">
            <div>
            <video className="video" controls>
              <source src={videoIllustration} type="video/mp4" />
            </video>
            </div>
            <div>
              <p className="headingMain">Why Crowd Ease?</p>
              <p className="WhyCrowdEaseDetail">
              Crowd Ease is a mobile app that assists restaurant managers in planning their resources and marketing strategy by providing weekly information on events and live crowd tracking around their area.
It allows you to check a full-week event forecast that will assist you in tracking down big events and being up to date with real-time crowd data. With this information, you can optimize your resources and inventory and streamline operations thanks to our cutting-edge technology. CROWD EASE is ready to take your restaurant to the next level!
              </p>
            </div>
          </section>
          <section id="feature">
            <div className="slide-container">
              <p className="teamHeading">
                <b>Main Features</b>
              </p>

              <SliderModel theme={theme} />
            </div>
          </section>
          <Team id="team" theme={theme} />

          <section id="contact" className="mainFooter">
            <div className="footerFormArea">
              <p className="mainFooterHeading">Let's Get Connected</p>
              <p className="mainFooterDesc">
                Got a question? We would love to hear from you.
              </p>
              <form >
                <input type="text" id="name" name="name" placeholder="Name" />{" "}
                <br />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                />{" "}
                <br />
                <input
                  type="text"
                  id="message"
                  name="message"
                  placeholder="Write your Message"
                />
                <br />
                <button className="formButton">Submit</button>
              </form>
            </div>
            <div>

            {theme === "light" ? (
                <img className="footerLogoDetail" src={logoLight} alt="night" />
              ) : (
                <img className="footerLogoDetail" src={footerLogo} alt="logo" /> 
              )}



              {/* <img src={footerLogo} alt="logo" /> */}
              <p className="comingSoon">Coming soon to</p>
              <div className="appAvailable">
                {theme === "light" ? (
                  <img src={darkAndroid} alt="night" />
                ) : (
                  <img src={android} alt="android" />
                )}
                {theme === "light" ? (
                  <img src={darkios} alt="ios" />
                ) : (
                  <img src={ios} alt="ios" />
                )}
              </div>
            </div>
          </section>
        </body>
        <footer>
          <p>&#169; 2023 Crowd Ease</p>
        </footer>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
