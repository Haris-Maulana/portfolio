import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav>
      <div className="lt-nav">
        <a href="index.html">
       Portfolio
        </a>
        </div>
      <div className="rt-nav">
        <a href="#profile">Profile</a>
        <a href="#project">Project</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
