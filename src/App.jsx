import './App.css'
import Menu from "./Components/Menu.jsx";
import Header from "./Components/home/Header.jsx";
import About from "./Components/About.jsx";
import Services from "./Components/Services.jsx";

import { FaLinkedin, FaInstagram, FaTelegram, FaYoutube, FaGithub} from "react-icons/fa";

function App() {

  return (
    <>
      {/* Menu Component */}
      <Menu />
      {/* Home Container Components */}
      <div className="container">
        <Header />
        <About />
        <Services />
        <footer className="container-footer">
          <div className="footer-menu">
            <span className="footer-title">M0RC</span>

            <nav className="menu-options">
              <a href="#home" className="menu-btns">Home</a>
              <a href="#about" className="menu-btns">About</a>
              <a href="#services" className="menu-btns">Services</a>
              <a href="#portfolio" className="menu-btns">Portfolio</a>
              <a href="#blog" className="menu-btns">Blog</a>
              <a href="#contact" className="menu-btns">Contact</a>
            </nav>
          </div>

          <div className="footer-bottom">
            <span className="footer-description">
              Build digital experiences
              <br />
              for a better tomorrow.
            </span>

            <div className="footer-social">
              <a href="#" aria-label="LinkedIn" className="socials"><FaLinkedin /></a>
              <a href="https://www.instagram.com/m0rc_dev" aria-label="Instagram" className="socials"><FaInstagram /></a>
              <a href="https://t.me/M0RC_Dev" aria-label="Telegram" className="socials"><FaTelegram /></a>
              <a href="https://youtube.com/@m0rc-code" aria-label="YouTube" className="socials"><FaYoutube /></a>
              <a href="https://github.com/M0RC-Code" aria-label="GitHub" className="socials"><FaGithub /></a>
            </div>
          </div>

          <div className="footer-copyright">
            © {new Date().getFullYear()} M0RC. All rights reserved.
          </div>
        </footer>
      </div>
    </>
  )
}

export default App
