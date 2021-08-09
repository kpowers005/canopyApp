import {IoLogoGithub, IoLogoLinkedin} from "react-icons/io5";
import './Footer.css';


function Footer () {
  return (
    <footer className='actual__footer'>
      <ul className='footer-list'>Created by: <a href='https://www.kylepowers.net/'>Kyle Powers</a></ul>
        <li><a href='https://github.com/kpowers005'><IoLogoGithub /></a></li>
        <li><a href='https://www.linkedin.com/in/kyle-powers-63739b133/'><IoLogoLinkedin /></a></li>
    </footer>
  )
}

export default Footer;
