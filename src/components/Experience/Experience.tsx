import { useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { ExperienceItemModal } from "./ExperienceItemModal/ExperienceItemModal";
import { EXPERIENCES } from "../../constants/experiences";
import { type Experience as ExperienceType } from "../../types";
import "./Experience.css";
export const Experience: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [experience, setExperience] = useState<ExperienceType>(EXPERIENCES[0]);
  const openModal = (experience: ExperienceType): void => {
    setExperience(experience);
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };
  const closeModal = (): void => {
    setIsOpen(false);
    document.body.style.overflow = "scroll";
  };
  return (
    <>
      <section className="experience">
        <h2 className="section__title">Experience</h2>
        <div className="experience__timeline">
          <div className="experience__stick">
            {EXPERIENCES.map((experience, i) => (
              <div
                className={`experience__item experience__item--${
                  i % 2 === 0 ? "left" : "right"
                }`}
                key={i}
              >
                <h4>{experience.company}</h4>
                <p>{experience.period}</p>
                <p
                  className="experience__itemLink"
                  onClick={() => {
                    openModal(experience);
                  }}
                >
                  View More <AiOutlineRight />
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {isOpen && (
        <ExperienceItemModal closeModal={closeModal} experience={experience} />
      )}
    </>
  );
};
