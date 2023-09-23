import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import "./Footer.css";
export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__links">
        <a
          href="https://www.linkedin.com/in/omar-flores2001/"
          target="_blank"
          rel="noreferrer"
          className="footer__link"
        >
          <AiFillLinkedin />
        </a>
        <a
          href="https://github.com/Kameha1011"
          target="_blank"
          rel="noreferrer"
          className="footer__link"
        >
          <AiFillGithub />
        </a>
        <a
          href="https://www.instagram.com/omrflrs01/"
          target="_blank"
          rel="noreferrer"
          className="footer__link"
        >
          <AiFillInstagram />
        </a>
      </div>
      <button className="footer__button">Download CV</button>
    </footer>
  );
};
