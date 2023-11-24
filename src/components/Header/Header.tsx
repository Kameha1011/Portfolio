import { downloadFile } from "../../utils/downloadFile";
import image from "../../assets/images/omar.webp";
import "./Header.css";
export const Header: React.FC = () => {
  return (
    <header className="header" id="About">
      <figure className="header__figure">
        <img src={image} alt="profile picture" className="header__image" />
      </figure>
      <section className="header__body">
        <h1 className="section__title">Omar Flores</h1>
        <h2 className="header__subtitle">Full Stack Web Developer</h2>
        <p>
          <i>
            Welcome to my Portfolio! Currently steering the ship at Shiro
            Company, my startup venture. Open to exciting job opportunities and
            constantly tinkering with passion projects, all of which I&apos;m
            thrilled to showcase here. Dive in and explore! Contact me anytime;
            let&apos;s connect and make something amazing together!
          </i>
        </p>
        <button
          className="header__button"
          onClick={() => {
            downloadFile("/pdf/CV-OF.pdf", "CV-OF.pdf");
          }}
        >
          Download CV
        </button>
      </section>
    </header>
  );
};
