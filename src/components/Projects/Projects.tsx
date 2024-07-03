import { useState } from "react";
import { MdOutlineDescription } from "react-icons/md";
import { GoLinkExternal } from "react-icons/go";
import { PROJECTS } from "../../constants/projects";
import "./Projects.css";
import { type Project } from "../../types";
import { useModal } from "../../hook/useModal";
import { ProjectModal } from "./ProjectModal/ProjectModal";
export const Projects: React.FC = () => {
  const [project, setProject] = useState<Project>(PROJECTS[0]);
  const { modalRef, openModal, closeModal, closeModalOutside } = useModal();
  const openProjectModal = (project: Project): void => {
    setProject(project);
    openModal();
  }
  return (
    <>
      <section className="projects" id="Projects">
        <h2 className="section__title">Projects</h2>
        <article className="projects__cardContainer">
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
                  <button
                    onClick={() => openProjectModal(project)}
                    className="card__button card__button--github"
                  >
                    <MdOutlineDescription className="button__icon" />
                    <p>View Details</p>
                  </button>
                </div>
              </footer>
            </article>
          ))}
        </article>
      </section>
      <ProjectModal closeModal={closeModal} closeModalOutside={closeModalOutside} project={project} ref={modalRef} />
    </>
  );
};
