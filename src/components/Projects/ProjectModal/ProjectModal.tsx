import { forwardRef } from "react";
import { type Project } from "../../../types";
import "./ProjectModal.css";
interface Props {
  closeModal: () => void;
  closeModalOutside: (e: MouseEvent) => void;
  project: Project;
  ref: React.RefObject<HTMLDialogElement>;
}
export const ProjectModal = forwardRef<HTMLDialogElement, Props>(
  (props: Props, ref) => {
    const { closeModal, closeModalOutside, project } = props;
    const handleDialogClick: React.MouseEventHandler<HTMLDialogElement> = (
      e
    ) => {
      closeModalOutside(e.nativeEvent as MouseEvent);
    };
    return (
      <dialog
        className="projectModal"
        ref={ref}
        onClick={handleDialogClick}
      >
        <div className="projectModal__header">
          <h2 className="projectModal__title">{project.title}</h2>
          <p className="projectModal__description">{project.description}</p>
        </div>
        <div className="projectModal__body">
          <h4 className="projectModal__subTitle">Github URLs</h4>
          <ul className="projectModal__list">
            {project.github.map((repo, i) => (
              <li className="projectModal__listItem" key={i}>
                <a className="projectModal__link" target="_blank" rel="noreferrer" href={repo.link}>{repo.type}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="projectModal__footer">
          <button className="projectModal__button" onClick={closeModal}>
            Close
          </button>
        </div>
      </dialog>
    );
  }
);

ProjectModal.displayName = "ProjectModal";
