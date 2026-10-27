import "../Styles/Menu.css"

const Menu = () => {
    return(
      <div className="menu">
        <div className="menu-brand">
          <h1 className="brand-text">M0RC</h1>
        </div>
        <div className="menu-options">
          <button className="options-home options">Home</button>
          <button className="options-about options">About</button>
          <button className="options-services options">Services</button>
          <button className="options-portofolio options">Portofolio</button>
          <button className="options-blog options">Blog</button>
          <button className="options-contect options">Contect</button>
        </div>
        <div className="menu-touch">
          <button className="menu-touch-btn">Get in Touch</button>
        </div>
      </div>
    )
}

export default Menu;