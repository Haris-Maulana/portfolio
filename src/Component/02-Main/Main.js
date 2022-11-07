import "./Main.scss";
import NewMe from "../../Assets/img/Image-Of-Me.png"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Main = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <section className="card first-card">
        <div id="profile">
          <h2>Profile</h2>
          <p data-aos="fade-right" data-aos-duration="1000">
            Hi!, my name is <b>Haris Maulana Salim</b> I'm from <b>Indonesia</b>
            . I was born on 21 February 2000. When i was a kid, i wanted to work
            at the office and be an IT guy, but destiny said another when i was
            18 i became a driver because of financial issues, but when i reached
            20 I realized that there is still hope to become an office guy that
            has an average life. At that moment i studied so hard to become an
            IT guy and my choice was to become a frontend developer; <br />
            <b>My journey</b> was kinda hard with self-learning. i can't even go
            to sleep when i'm not fully understanding what every code that i
            wrote . My first learning to become a frontend developer started
            with HTML and CSS and it was such an "easy task" I said but when
            javascript come i take my word for saying that time make me more
            <img
              data-aos="zoom-in-right"
              data-aos-duration="1000"
              src={NewMe}
              alt=""
              style={{
                width: "200px",
                float: "right",
                height: "300px",
                marginLeft: "1.1875rem",
                marginTop: "1.1875rem",
                border: "2px solid #1b1b1b",
                borderRadius: "15px",
                backgroundColor: "#1b1b1b",
              }}
            />
            comfortable with javascript and try framework react.js also I was
            trying to learn Backends like Nodejs, MySQL, MongoDB, and Express
            but im not very good at it. And when im 22 I try learning how to use
            Git and GitHub I try to create my first project and try to think
            what if I work with a team and create some components with them in
            22 i was learning how to <b>work in a team</b>.
          </p>
        </div>
      </section>
    </>
  );
};

export default Main;
