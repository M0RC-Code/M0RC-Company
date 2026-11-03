import { useState } from "react";
import "../Styles/Menu.css"

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return(
    <div className="menu">
      <div className="menu-brand">
        <h1 className="brand-text">M0RC</h1>
      </div>

      {/* Hamburger button - only visible on mobile */}
      <button className="menu-hamburger" onClick={toggleMenu}>
        <span className={`bar ${isOpen ? "open" : ""}`}></span>
        <span className={`bar ${isOpen ? "open" : ""}`}></span>
        <span className={`bar ${isOpen ? "open" : ""}`}></span>
      </button>

      <div className={`menu-options ${isOpen ? "active" : ""}`}>
        <button className="options-home options">Home</button>
        <button className="options-about options">About</button>
        <button className="options-services options">Services</button>
        <button className="options-portofolio options">Portofolio</button>
        <button className="options-blog options">Blog</button>
        <button className="options-contect options">Contect</button>
      </div>

      <div className={`menu-touch ${isOpen ? "active" : ""}`}>
        <button className="menu-touch-btn">Get in Touch</button>
      </div>
    </div>
  )
}

export default Menu;