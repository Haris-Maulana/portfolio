import "./Main.scss";
import NewMe from "../../Assets/img/Image-Of-Me.png";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { FaCss3Alt, FaReact, FaSass, FaNodeJs, FaFigma} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {BiGitBranch} from 'react-icons/bi'

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Main = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  let root = document.querySelector(":root");
  let sliderIndex = getComputedStyle(root).getPropertyValue('--slider-index')
  setInterval (()=>{
    var xMedia = window.matchMedia("(max-width: 700px)")
    if(xMedia.matches){
      root.style.setProperty('--slider-index', 0)
    } else {
      if(sliderIndex < 7){
        root.style.setProperty('--slider-index', sliderIndex++)
      } else if (sliderIndex = 0){
        root.style.setProperty('--slider-index', sliderIndex++)
      } 
      else {
        root.style.setProperty('--slider-index', 0)
      }
    }
    
  },3000)

  return (
    <>
      {/* ABOUT */}
      <section className="card">
        <div id="profile">
          <h2 data-aos="fade-down">Profile</h2>
          <div className="info-container">
            <div className="img-container">
              <img
                className="img-1"
                data-aos="zoom-in-right"
                data-aos-duration="1000"
                src={NewMe}
                alt=""
              />
            </div>
            <div className="para-container">
              <p data-aos="fade-right" data-aos-duration="1000">
                I am a graduate of Public High School majoring Natural science.
                In my free time i am a self-taught programmer and familiar with
                programming languages such as javascript and it's framewok like
                React and Next and for my structure and styling i always use
                HTML with CSS or SASS. Also i can use framework such as
                Tailwind.Also i am good student that can learn fast and
                hardworking at the same time.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* SLIDER */}
      <section>
        <div className="slider-container">
          <div className="Slider">
            {/* Program Languange */}
            <div className="programlang">
              <div className="title-program">
                <h2>HTML5</h2>
              </div>
              <div className="programUse">
                <AiFillHtml5 className="icons-program" />
              </div>
            </div>
            <div className="programlang">
              <div className="title-program">
                <h2>Css3</h2>
              </div>
              <div className="programUse">
                <FaCss3Alt className="icons-program" />
              </div>
            </div>
            <div className="programlang">
              <div className="title-program">
                <h2>Javascript</h2>
              </div>
              <div className="programUse">
                <IoLogoJavascript className="icons-program" />
              </div>
            </div>
            <div className="programlang">
              <div className="title-program">
                <h2>React</h2>
              </div>
              <div className="programUse">
                <FaReact className="icons-program" />
              </div>
            </div>
            <div className="programlang">
              <div className="title-program">
                <h2>Sass</h2>
              </div>
              <div className="programUse">
                <FaSass className="icons-program" />
              </div>
            </div>
            <div className="programlang">
              <div className="title-program">
                <h2>Node</h2>
              </div>
              <div className="programUse">
                <FaNodeJs className="icons-program" />  
              </div>
            </div>
            <div className="programlang">
              <div className="title-program">
                <h2>Git</h2>
              </div>
              <div className="programUse">
                <BiGitBranch className="icons-program" />  
              </div>
            </div>
            <div className="programlang">
              <div className="title-program">
                <h2>Github</h2>
              </div>
              <div className="programUse">
                <AiFillGithub className="icons-program" />  
              </div>
            </div>
            <div className="programlang">
              <div className="title-program">
                <h2>Figma</h2>
              </div>
              <div className="programUse">
                <FaFigma className="icons-program" />  
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
