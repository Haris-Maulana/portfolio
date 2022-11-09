import "./Main.scss";
import NewMe from "../../Assets/img/Image-Of-Me.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Main = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <section className="card">
        <div id="profile">
          <h2>Profile</h2>
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
                I am a graduate of Public High School majoring Natural
                science.In my free time i am a self-taught programmer and
                familiar with programming languages such as javascript and it's
                framewok like React and Next and for my structure and styling i
                always use HTML with CSS or SASS. Also i can use framework such
                as Tailwind. I am a critical thinker with good management of
                time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
