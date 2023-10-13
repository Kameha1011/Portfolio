import { useState, useRef } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { ExperienceItemModal } from "./ExperienceItemModal/ExperienceItemModal";
import { EXPERIENCES } from "../../constants/experiences";
import { type Experience as ExperienceType } from "../../types";
import "./Experience.css";
export const Experience: React.FC = () => {
  const modalRef = useRef<HTMLDialogElement>(null);
  const [experience, setExperience] = useState<ExperienceType>(EXPERIENCES[0]);
  const openModal = (experience: ExperienceType): void => {
    setExperience(experience);
    modalRef.current?.showModal();
    document.body.style.overflowY = "hidden";
  };
  const closeModal = (): void => {
    modalRef.current?.close();
    document.body.style.overflowY = "scroll";
  };
  const closeModalOutside = (e: MouseEvent): void => {
    const dialogDimensions =
      modalRef.current?.getBoundingClientRect() as DOMRect;
    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
      closeModal();
    }
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
      <ExperienceItemModal
        closeModal={closeModal}
        closeModalOutside={closeModalOutside}
        experience={experience}
        ref={modalRef}
      />
    </>
  );
};
