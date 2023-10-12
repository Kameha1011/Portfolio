import { useEffect} from "react";
import { Carousel } from "../Carousel/Carousel";
import "./Education.css";
export const Education: React.FC = () => {

  useEffect(() => {
    // const slides = makeSlides(cities, 4);
    // setCarouselSlides(slides);
  }, []);
  // useInterval(() => {
  //   if (activeSlide < carouselSlides.length) {
  //     setActiveSlide(activeSlide + 1);
  //   } else {
  //     setActiveSlide(1);
  //   }
  // }, 10000);
  return (
    <section className="education">
      <h2 className="section__title">Education</h2>
      <Carousel />
    </section>
  )
  // const [toggleTab, setToggleTab] = useState(false);
  // const showCompleted = () => {
  //   setToggleTab(false);
  // };
  // const showInProgress = () => {
  //   setToggleTab(true);
  // };
  // return (
  //   <section className="education">
  //     <h2 className="section__title">Education</h2>
  //     <div className="tabview">
  //       <div className="tabview__titles">
  //         <h3
  //           onClick={showInProgress}
  //           className={toggleTab ? "tabview__title--active" : ""}
  //         >
  //           In Progress
  //         </h3>
  //         <h3
  //           onClick={showCompleted}
  //           className={!toggleTab ? "tabview__title--active" : ""}
  //         >
  //           Completed
  //         </h3>
  //       </div>
  //       {toggleTab ? (
  //         <div className="tabview__content">
  //           <div className="tabview__item">
  //             <figure className="tabview__itemFigure">
  //               <img src={uba} alt="Logo UBA" className="tabview__itemImage" />
  //             </figure>
  //             <div className="tabview__itemInfo">
  //               <h4>Computer Science Engineering</h4>
  //               <h5>Universidad de Buenos Aires</h5>
  //               <p>2022-Present</p>
  //             </div>
  //           </div>
  //         </div>
  //       ) : (
  //         <div className="tabview__content">
  //           <div className="tabview__item">
  //             <figure className="tabview__itemFigure">
  //               <img
  //                 src={mindhub}
  //                 alt="Logo Mindhub"
  //                 className="tabview__itemImage"
  //               />
  //             </figure>
  //             <div className="tabview__itemInfo">
  //               <h4>MERN Stack Development</h4>
  //               <h5>Mindhub</h5>
  //               <p>2023</p>
  //             </div>
  //           </div>
  //           <div className="tabview__item">
  //             <figure className="tabview__itemFigure">
  //               <img
  //                 src={mindhub}
  //                 alt="Logo Mindhub"
  //                 className="tabview__itemImage"
  //               />
  //             </figure>
  //             <div className="tabview__itemInfo">
  //               <h4>Frontend web development</h4>
  //               <h5>Mindhub</h5>
  //               <p>2023</p>
  //             </div>
  //           </div>
  //           <div className="tabview__item">
  //             <figure className="tabview__itemFigure">
  //               <img
  //                 src={udemy}
  //                 alt="Logo Udemy"
  //                 className="tabview__itemImage"
  //               />
  //             </figure>
  //             <div className="tabview__itemInfo">
  //               <h4>Fullstack Web Development</h4>
  //               <h5>Udemy</h5>
  //               <p>2022</p>
  //             </div>
  //           </div>
  //         </div>
  //       )}
  //     </div>
  //   </section>
  // );
};
