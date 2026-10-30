import './App.css'
import Menu from "./Components/Menu.jsx";
import Header from "./Components/home/Header.jsx";
import About from "./Components/About.jsx";
import Services from "./Components/Services.jsx";

import { FaLinkedin, FaInstagram, FaTelegram, FaYoutube } from "react-icons/fa";

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
        <footer className='container-footer'>
          <span className="footer-title">M0RC</span>
          <div className="footer-menu">
            <a href="#" className='menu-home menu-btns'>Home</a>
            <a href="#" className='menu-about menu-btns'>About</a>
            <a href="#" className='menu-services menu-btns'>Services</a>
            <a href="#" className='menu-portofolio menu-btns'>Portofolio</a>
            <a href="#" className='menu-blog menu-btns'>Blog</a>
            <a href="#" className='menu-contect menu-btns'>Contect</a>
          </div>
          <span className='footer-description'></span>
          <div className="footer-social">
            <a href="#" className='social-linkdin socials'><FaLinkedin /></a>
            <a href="#" className='social-instagram socials'><FaInstagram /></a>
            <a href="#" className='social-telegram socials'><FaTelegram /></a>
            <a href="#" className='social-youtube socials'><FaYoutube /></a>
          </div>
        </footer>
      </div>
    </>
  )
}

export default App
