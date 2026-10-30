import './App.css'
import Menu from "./Components/Menu.jsx"
import Header from "./Components/home/Header.jsx"

function App() {

  return (
    <>
      {/* Menu Component */}
      <Menu />
      {/* Home Container Components */}
      <div className="container">
        <Header />
        <div className="container-about">
          <h3 className='about-title'>About M0RC</h3>
          <h2 className='about-content'>Turning Ideas Into Digital Reality</h2>
          <span className='about-description'>We are a creative and technical team, passionate about
            building digital solutions that help brands grow. With a focus
            on quality, innovation and user sxperience, we turn your ideas
            into real, functional and beautiful products.
          </span>
          <button className='about-btn'>Learn More --</button>
          <img src="#" alt="" className='about-image'/>
        </div>
      </div>
    </>
  )
}

export default App
