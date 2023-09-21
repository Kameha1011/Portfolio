import { AiFillGithub } from "react-icons/ai";
import { GoLinkExternal } from "react-icons/go";
import { PROJECTS } from "../../constants/projects";
import "./Projects.css";
export const Projects: React.FC = () => {
  //TODO: put a tooltip for the icons
  return (
    <section className="projects">
      <h2 className="projects__title">Projects</h2>
      {PROJECTS.map((project, i) => (
        <article className="projects__card" key={i}>
          <div className="card__header">
            <figure className="card__figure">
              <img
                src={project.image}
                alt={project.title}
                className="card__image"
              />
            </figure>
          </div>
          <div className="card__body">
            <h2 className="card__title">{project.title}</h2>
            <div className="card__icons">
              {project.technologiesIcons.map((icon, i) => (
                  <span className="card__icon" key={i}>
                    {icon.icon}
                    <span className="card__tooltip">{icon.name}</span>                
                  </span>
              ))}
            </div>
          </div>
          <footer className="card__footer">
            <div className="card__actions">
              <a
                className="card__button card__button--view"
                href={project.link}
                target="_blank"
                rel="noreferrer"
                role="button"
              >
                <GoLinkExternal className="button__icon" />
                <p>View</p>
              </a>
              <a
                className="card__button card__button--github"
                href={project.github}
                target="_blank"
                rel="noreferrer"
                role="button"
              >
                <AiFillGithub className="button__icon" />
                <p>Github</p>
              </a>
            </div>
          </footer>
        </article>
      ))}
    </section>
  );
};
