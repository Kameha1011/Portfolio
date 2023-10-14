import { useState } from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { FloatingSideBarItem } from "./FloatingSideBarItem/FloatingSideBarItem";
import { SIDEBAR_ITEMS } from "../../constants/sideBarItems";
import "./FloatingSideBar.css";
export const FloatingSideBar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const toggleFloatingSidebar = (): void => {
    setOpen(!open);
  };

  return (
    <nav className={`floatingSidebar ${open && "floatingSidebar--open"}`}>
      <ul className="floatingSidebar__list">
        {SIDEBAR_ITEMS.map((item) => (
          <FloatingSideBarItem key={item.title} {...item} />
        ))}
      </ul>
      <button
        className={`floatingSidebar__toggle ${
          open && "floatingSidebar__toggle--open"
        }`}
        type="button"
        aria-label="Toggle floating sidebar"
        onClick={toggleFloatingSidebar}
      >
        <IoIosArrowDroprightCircle
          className={`floatingSidebar__toggleIcon ${
            open && "floatingSidebar__toggleIcon--open"
          }`}
        />
      </button>
    </nav>
  );
};
