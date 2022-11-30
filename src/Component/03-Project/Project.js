import "./Project.scss";
import image1 from "./images/1.png";
import image2 from "./images/2.png";
import image3 from "./images/3.png";
import image4 from "./images/4.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const Project = () => {

  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <div id="project" className="project">
      <h2 data-aos="fade-down">Project</h2>
      <div className="project-wrap">
        <div className="project-container-row">
          <a data-aos="fade-right" data-aos-duration="1000" href="https://e-commerce-react-theta-nine.vercel.app/">
            <img src={image1} alt="H-Commerce" />
            <p>
              "E-commerce"<br /> Created with react js and some little object that used 2 times to
              make simple and straight forward website for e-commercial. <br />
              TAP TO GO TO THE LINK <br /> STACK : "React" "Node" "Sass"
            </p>
          </a>
          <a data-aos="fade-left" data-aos-duration="1000" href="https://coffee-project-eight.vercel.app/">
            <img src={image2} alt="H-Coffee" />
            <p> "Coffee Shop" <br /> Created with Reactjs and Api from 2 resources to create an attractive website for a simple article about a coffee.
             <br />(if menu didnt show than my quota for free package is exhaust)
              TAP TO GO TO THE LINK <br /> STACK : "React", "Api" , "Sass"</p>
              
          </a>
        </div>
        <div className="project-container-row">
          <a data-aos="fade-right" data-aos-duration="1000" href="https://h-spotify-haris-maulana.vercel.app/">
            <img src={image3} alt="H-passgenerator" />
            <p> H-Spotify `On Going` <br />
              Website that created with an API from spotify and ReactJs that user can play and login into spotify<br />
              TAP TO GO TO THE LINK <br /> STACK : "React" "Sass" "Node"
            </p>
          </a>
          <a data-aos="fade-left" data-aos-duration="1000" href="https://my-portfolio-two-neon.vercel.app/">
            <img src={image4} alt="" />
            <p></p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
