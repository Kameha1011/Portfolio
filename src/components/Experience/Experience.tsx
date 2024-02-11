import { useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { ExperienceItemModal } from "./ExperienceItemModal/ExperienceItemModal";
import { EXPERIENCES } from "../../constants/experiences";
import { type Experience as ExperienceType } from "../../types";
import "./Experience.css";
import { useModal } from "../hook/useModal";
export const Experience: React.FC = () => {
  const [experience, setExperience] = useState<ExperienceType>(EXPERIENCES[0]);
  const { modalRef, openModal, closeModal, closeModalOutside } = useModal();
  const openExperienceModal = (experience: ExperienceType): void => {
    setExperience(experience);
    openModal();
  };
  return (
    <>
      <section className="experience" id="Experience">
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
                <h3>{experience.company}</h3>
                <p>{experience.period}</p>
                <p
                  className="experience__itemLink"
                  onClick={() => {
                    openExperienceModal(experience);
                  }}
                >
                  View More <AiOutlineRight />
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ExperienceItemModal
        closeModal={closeModal}
        closeModalOutside={closeModalOutside}
        experience={experience}
        ref={modalRef}
      />
    </>
  );
};
