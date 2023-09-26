import image from "../../assets/images/omar.webp";
import "./Header.css";
export const Header: React.FC = () => {
  return (
    <header className="header">
      <img src={image} alt="profile picture" className="header__image" />
      <section className="header__body">
        <h1 className="header__title">Omar Flores</h1>
        <h3 className="header__subtitle">Full Stack Web Developer</h3>
        <p>
          <i>
            &quot;Welcome to the Web Developer Portfolio. Explore a collection
            of projects, showcasing diverse skills and expertise.Unleash
            creativity, powered by the color palette: vibrant red, deep teal,
            lush green, warm orange, and soft peach. Navigate through the
            journey of web development, where passion meets proficiency. Connect
            with a world of possibilities. Let the code speak, and the designs
            mesmerize. Embrace the art and science of web development. Engage,
            Inspire, Create. &quot;
          </i>
        </p>
      </section>
    </header>
  );
};
