import Particle from "./ParticlesBackground";
import "./Header.scss";

const Header = () => {
  return (
    <>
      <div className="container-header">
        <div className="particle">
          <Particle id="tsparticles" />
          <h1>Hello! <span>My Name Is Haris Maulana</span></h1>
        </div>
      </div>
    </>
  );
};

export default Header;
