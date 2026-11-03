import "../Styles/Services.css"

import { SiDevbox } from "react-icons/si";
import { FaQuidditch, FaComments } from "react-icons/fa";
import { IoIosPricetag } from "react-icons/io";
import { AiOutlineArrowRight } from "react-icons/ai";

const Services = () => {
    return(
        <div className="container-services">
          <span className="service-intro">Our Services</span>
          <div className="service-header">
            <h2 className='service-title'>What We Do</h2>
            <button className='service-btn'>View All Services <AiOutlineArrowRight /></button>
          </div>
          <div className="cards">
            <div className="card" style={{ "--delay": "0s" }}>
              <div className="card-icons"><SiDevbox /></div>
              <h3 className="card-title">Web Development</h3>
              <span className='card-description'>Modern, fast and scalable
                web applications tailored
                to your needs.
              </span>
            </div>
            <div className="card" style={{ "--delay": "0.1s" }}>
              <div className="card-icons"><FaQuidditch /></div>
              <h3 className="card-title">UI/UX Design</h3>
              <span className='card-description'>User-centered designs
                that create real
                engagement.
              </span>
            </div>
            <div className="card" style={{ "--delay": "0.2s" }}>
              <div className="card-icons"><IoIosPricetag /></div>
              <h3 className="card-title">Branding</h3>
              <span className='card-description'>Build a strong Brand
                identity that makes you
                stand out.
              </span>
            </div>
            <div className="card" style={{ "--delay": "0.3s" }}>
              <div className="card-icons"><FaComments /></div>
              <h3 className="card-title">Consulting</h3>
              <span className='card-description'>Strategic advice to help
                you grow and succeed
                in the digital world.
              </span>
            </div>
          </div>
        </div>
    )
}

export default Services;