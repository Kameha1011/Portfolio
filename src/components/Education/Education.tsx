import { useState } from "react";
import uba from "../../assets/images/education/uba.png";
import udemy from "../../assets/images/education/udemy.png";
import mindhub from "../../assets/images/education/mindhub.png";
import "./Education.css";
export const Education: React.FC = () => {
  const [toggleTab, setToggleTab] = useState(false);
  const showCompleted = () => {
    setToggleTab(false);
  };
  const showInProgress = () => {
    setToggleTab(true);
  };
  return (
    <section className="education">
      <h2 className="section__title">Education</h2>
      <div className="tabview">
        <div className="tabview__titles">
          <h3
            onClick={showInProgress}
            className={toggleTab ? "tabview__title--active" : ""}
          >
            In Progress
          </h3>
          <h3
            onClick={showCompleted}
            className={!toggleTab ? "tabview__title--active" : ""}
          >
            Completed
          </h3>
        </div>
        {toggleTab ? (
          <div className="tabview__content">
            <div className="tabview__item">
              <img src={uba} alt="Logo UBA" className="tabview__itemImage" />
              <div className="tabview__itemInfo">
                <h4>Computer Science Engineering</h4>
                <h5>Universidad de Buenos Aires</h5>
                <p>2022-Present</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="tabview__content">
            <div className="tabview__item">
              <img
                src={mindhub}
                alt="Logo Mindhub"
                className="tabview__itemImage"
              />
              <div className="tabview_itemInfo">
                <h4>MERN Stack Development</h4>
                <h5>Mindhub</h5>
                <p>2023</p>
              </div>
            </div>
            <div className="tabview__item">
              <img
                src={mindhub}
                alt="Logo Mindhub"
                className="tabview__itemImage"
              />
              <div className="tabview_itemInfo">
                <h4>Frontend web development</h4>
                <h5>Mindhub</h5>
                <p>2023</p>
              </div>
            </div>
            <div className="tabview__item">
              <img
                src={udemy}
                alt="Logo Udemy"
                className="tabview__itemImage"
              />
              <div className="tabview_itemInfo">
                <h4>Fullstack Web Development</h4>
                <h5>Udemy</h5>
                <p>2022</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
