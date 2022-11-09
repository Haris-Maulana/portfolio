import Particle from "./ParticlesBackground";
import "./Header.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


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
   button.style.display = 'none'
  }

  return (
    <>
      <div className="container-header">
        <div className="particle">
          <Particle id="tsparticles" />
          <h1 data-aos="fade-right" data-aos-duration="1000">Hello! My Name Is <span> Haris Maulana <br /></span>
          I'm Frontend developer</h1>
          <button onClick={showParticle}></button>
        </div>
      </div>
    </>
  );
};

export default Header;
