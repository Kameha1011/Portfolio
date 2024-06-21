import { useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import { CarouselItem } from "./CarouselItem/CarouselItem";
import { EDUCATION } from "../../constants/education";
import { type SlideDirection } from "../../types";
import "./Carousel.css";

export const Carousel: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(1);
  const [slideDirection, setSlideDirection] = useState<SlideDirection>("right");
  return (
    <div className="carousel">
      <GrPrevious
        className="carousel__previous"
        role="button"
        onClick={() => {
          activeSlide > 1 && setActiveSlide(activeSlide - 1);
          activeSlide === 1 && setActiveSlide(EDUCATION.length);
          setSlideDirection("left");
        }}
      />
      <div className="carousel__itemsContainer">
        {EDUCATION.map((items, index) => {
          return (
            <CarouselItem
              key={index}
              isActive={activeSlide === index + 1}
              slideDirection={slideDirection}
              items={items}
            />
          );
        })}
      </div>
      <GrNext
        className="carousel__next"
        role="button"
        onClick={() => {
          activeSlide < EDUCATION.length && setActiveSlide(activeSlide + 1);
          activeSlide === EDUCATION.length && setActiveSlide(1);
          setSlideDirection("right");
        }}
      />
    </div>
  );
};
