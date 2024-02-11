import { forwardRef } from "react";
import { type Experience } from "../../../types";
import "./ExperienceItemModal.css";
interface Props {
  closeModal: () => void;
  closeModalOutside: (e: MouseEvent) => void;
  experience: Experience;
  ref: React.RefObject<HTMLDialogElement>;
}
export const ExperienceItemModal = forwardRef<HTMLDialogElement, Props>(
  (props: Props, ref) => {
    const { closeModal, closeModalOutside, experience } = props;
    const handleDialogClick: React.MouseEventHandler<HTMLDialogElement> = (
      e
    ) => {
      closeModalOutside(e.nativeEvent as MouseEvent);
    };
    return (
      <dialog
        className="experienceItemModal"
        ref={ref}
        onClick={handleDialogClick}
      >
        <div className="experienceItemModal__header">
          <h2 className="experienceItemModal__title">{experience.company}</h2>
          <h4>{experience.position}</h4>
          <p className="experienceItemModal__date">{experience.period}</p>
        </div>
        <div className="experienceItemModal__body">
          <ul className="experienceItemModal__list">
            {experience.bullets.map((bullet, i) => (
              <li className="experienceItemModal__listItem" key={i}>
                {bullet}
              </li>
            ))}
          </ul>
        </div>
        <div className="experienceItemModal__footer">
          <button className="experienceItemModal__button" onClick={closeModal}>
            Close
          </button>
        </div>
      </dialog>
    );
  }
);

ExperienceItemModal.displayName = "ExperienceItemModal";
