import Particle from "./ParticlesBackground";
import "./Header.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import {BsFillCloudMoonFill} from 'react-icons/bs'


const Header = () => {
  const Main = () => {
    useEffect(() => {
      AOS.init();
    }, []);
  }

  function showParticle(){
   const root = document.querySelector(':root')
   const button = document.querySelector('button')
   root.style.setProperty('--bg-color', '#1b1b1b')
   root.style.setProperty('--header-text', '#fff')
   root.style.setProperty('--background-color', '#1b1b1b')
   root.style.setProperty('--font-color', '#fff')
   button.style.display = 'none'
  }

  return (
    <>
      <div className="container-header">
        <div className="particle">
          <Particle id="tsparticles" />
          <h1 data-aos="fade-right" data-aos-duration="1000">Hello! My Name Is <span> Haris Maulana <br /></span>
          I'm Frontend developer</h1>
          <button onClick={showParticle}><BsFillCloudMoonFill/></button>
        </div>
      </div>
    </>
  );
};

export default Header;
