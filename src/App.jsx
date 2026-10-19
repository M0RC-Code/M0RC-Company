import './App.css'
import Menu from "./Components/Menu.jsx"

function App() {

  return (
    <>
      <Menu />
      <div className="container-home">
        <div className="contents">
          <div className="contents-tags">
            <div className="tag-1 tags">Innovation</div>
            <div className="tag-2 tags">Design</div>
            <div className="tag-3 tags">Technology</div>
          </div>
          <div className="contents-title">
            We Build Digital Experinces That <span className="contents-title-black">Matter</span>
          </div>
          <div className="contents-caption">
            M0RC is a modern digital studio focused on creating
            high-quality websites, web applications and brand experiences
            for forward-thinking businesses.
          </div>
          <div className="contents-btns">
            <button className="btns-left">Our Services</button>
            <button className="btns-right">View Portfolio</button>
          </div>
        </div>
        <div className="image-bg">
          <img src="../src/assets/images/header.jpg" alt="bg image" className="image-bg-img"/>
        </div>
      </div>
    </>
  )
}

export default App
