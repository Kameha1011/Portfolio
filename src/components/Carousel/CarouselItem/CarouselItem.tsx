import { type Education } from "../../../types";
import "./CarouselItem.css";
interface Props {
  isActive: boolean;
  slideDirection: "left" | "right";
  items: Education;
}
export const CarouselItem: React.FC<Props> = ({
  isActive,
  slideDirection,
  items,
}) => {
  return (
    <div
      className={`carousel__item ${
        isActive
          ? `carousel__item--active--${slideDirection}`
          : `carousel__item--hidden--${slideDirection}`
      }`}
      style={{
        backgroundImage: `url(${items.src})`,
      }}
    >
      <div className="carousel__itemShade">
        <h2 className="carousel__itemTitle">{items.title}</h2>
        <h3 className="carousel__itemSubtitle">{items.grade}</h3>
        <p className="carousel__itemPeriod">{items.period}</p>
        {items.certificate && (
          <a
            href={items.certificate}
            target="_blank"
            rel="noreferrer"
            className="carousel__itemLink"
          >
            See Certificate
          </a>
        )}
      </div>
    </div>
  );
};
