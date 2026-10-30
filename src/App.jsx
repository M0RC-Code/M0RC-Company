import './App.css'
import Menu from "./Components/Menu.jsx";
import Header from "./Components/home/Header.jsx";
import About from "./Components/About.jsx";

function App() {

  return (
    <>
      {/* Menu Component */}
      <Menu />
      {/* Home Container Components */}
      <div className="container">
        <Header />
        <About />
      </div>
    </>
  )
}

export default App
