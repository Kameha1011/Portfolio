import { type Experience } from "../../../types";
import "./ExperienceItemModal.css";
interface Props {
  closeModal: () => void;
  experience: Experience;
}
export const ExperienceItemModal: React.FC<Props> = ({
  closeModal,
  experience,
}) => {
  return (
    <div className="experienceItemModal__bg">
      <div className="experienceItemModal">
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
      </div>
    </div>
  );
};
