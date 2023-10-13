import {
  FaUserAlt,
  FaBriefcase,
  FaCode,
  FaGraduationCap,
  FaEnvelopeOpenText,
} from "react-icons/fa";
export const SIDEBAR_ITEMS = [
  {
    title: "About",
    icon: <FaUserAlt />,
  },
  {
    title: "Experience",
    icon: <FaBriefcase />,
  },
  {
    title: "Projects",
    icon: <FaCode />,
  },
  {
    title: "Education",
    icon: <FaGraduationCap />,
  },
  {
    title: "Contact",
    icon: <FaEnvelopeOpenText />,
  },
] as const;
