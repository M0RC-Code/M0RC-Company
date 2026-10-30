import "../Styles/About.css"
import { AiOutlineArrowRight } from "react-icons/ai";

const About = () => {
    return(
        <div className="container-about">
          <div className="about-contents">
            <h3 className='about-title'>About M0RC</h3>
            <h2 className='about-content'>Turning Ideas Into Digital Reality</h2>
            <span className='about-description'>We are a creative and technical team, passionate about
              building digital solutions that help brands grow. With a focus
              on quality, innovation and user sxperience, we turn your ideas
              into real, functional and beautiful products.
            </span>
            <button className='about-btn'>Learn More <AiOutlineArrowRight /></button>
          </div>
          <img src="../src/assets/images/about-image.jpg" alt="image!" className='about-image'/>
        </div>
    )
}

export default About;