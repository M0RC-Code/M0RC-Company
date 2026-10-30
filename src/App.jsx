import './App.css'
import Menu from "./Components/Menu.jsx";
import Header from "./Components/home/Header.jsx";
import About from "./Components/About.jsx";
import Services from "./Components/Services.jsx";
import Footer from "./Components/Footer.jsx";


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
        <Footer />
      </div>
    </>
  )
}

export default App
