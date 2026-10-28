import './App.css'
import Menu from "./Components/Menu.jsx"
import Header from "./Components/home/Header.jsx"

function App() {

  return (
    <>
      {/* Menu Component */}
      <Menu />
      {/* Home Container Components */}
      <div className="container-home">
        <Header />
        <div className="cards">
          <div className="card">
            <img src="#" alt="#" className='card-image'/>
            <span className="card-title">title</span>
            <span className="card-content"></span>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
