import './Footer.scss'

import {FaWhatsappSquare,} from "react-icons/fa";
import {AiFillFacebook,AiFillGithub,AiFillTwitterSquare,AiFillInstagram} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="foot-container">
        <h5>Contact Me</h5>
        <div className='contact'>
        <a href="https://wa.me/6281386329291"><FaWhatsappSquare/></a>
        <a href="https://www.facebook.com/harisrood/"><AiFillFacebook/></a>
        <a href="https://github.com/Haris-Maulana"><AiFillGithub/></a>
        <a href="https://twitter.com/harismaulana000"><AiFillTwitterSquare/></a>
        <a href="https://www.instagram.com/harismlnaslm/"><AiFillInstagram/></a>
        </div>
      </div>
      <div className="copyright">
      © Haris Maulana
      </div>
    </footer>
  );
}
 
export default Footer;