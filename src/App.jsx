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
        <footer className='container-footer'>
          <div className="footer-menu">
            <span className="footer-title">M0RC</span>
            <div className="menu-options">
              <a href="#" className='menu-home menu-btns'>Home</a>
              <a href="#" className='menu-about menu-btns'>About</a>
              <a href="#" className='menu-services menu-btns'>Services</a>
              <a href="#" className='menu-portofolio menu-btns'>Portofolio</a>
              <a href="#" className='menu-blog menu-btns'>Blog</a>
              <a href="#" className='menu-contect menu-btns'>Contect</a>
            </div>
          </div>
          <span className='footer-description'>Build digital experiences
            for a better tomorrow.
          </span>
          <div className="footer-social">
            <a href="#" className='social-linkdin socials'><FaLinkedin /></a>
            <a href="https://www.instagram.com/m0rc_dev?dlrf=MXJ2azk2dG91MHVsMw==" className='social-instagram socials'><FaInstagram /></a>
            <a href="https://t.me/M0RC_Dev" className='social-telegram socials'><FaTelegram /></a>
            <a href="https://youtube.com/@m0rc-code?si=WHsVzdEY-kV-jEy2" className='social-youtube socials'><FaYoutube /></a>
            <a href="https://github.com/M0RC-Code" className='social-github socials'><FaGithub /></a>
          </div>
        </footer>
      </div>
    </>
  )
}

export default App
