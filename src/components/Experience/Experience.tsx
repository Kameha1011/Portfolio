import { useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { ExperienceItemModal } from "./ExperienceItemModal/ExperienceItemModal";
import { EXPERIENCES } from "../../constants/experiences";
import { type Experience as ExperienceType } from "../../types";
import "./Experience.css";
import { useModal } from "../../hook/useModal";
export const Experience: React.FC = () => {
  const [experience, setExperience] = useState<ExperienceType>(EXPERIENCES[0]);
  const experiencesLeft = [];
  const experiencesRight = [];
  for (let i = 1; i <= EXPERIENCES.length; i++) {
    if (i % 2 === 0){ experiencesLeft.push(EXPERIENCES[i - 1]); continue;}
    experiencesRight.push(EXPERIENCES[i - 1]);
  }
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
          <div className="experience__column experience__column__left">
            {experiencesLeft.map((experience) => {
              return (
                <>
                  <div className="experience__item--blank"></div>
                  <div>

                    <div className="experience__item experience__item--left ">
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
                  </div>
                </>
              );
            })}
          </div>
          <div className="experience__stick"></div>
          <div className="experience__column experience__column__right">
            {experiencesRight.map((experience) => {
              return (
                <>
                  <div className="experience__item experience__item--right ">
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
                  <div className="experience__item--blank"></div>
                </>
              );
            })}
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
