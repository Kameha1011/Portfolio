import yelpcamp from "../assets/images/projects/yelpcamp.webp";
import fakeEcommerce from "../assets/images/projects/fakeEcommerce.webp";
import pokedex from "../assets/images/projects/pokemon.webp";
import cmLP from "../assets/images/projects/leslysocialmedia.webp";
import cardDetail from "../assets/images/projects/interactiveForm.webp";
import amazingEvents from "../assets/images/projects/amazingEvents.webp";
import { FaBootstrap } from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiReact,
  SiHtml5,
  SiCss3,
  SiJavascript,
} from "react-icons/si";
export const PROJECTS = [
  {
    title: "Yelpcamp",
    image: yelpcamp,
    technologiesIcons: [
      { name: "Bootstrap", icon: <FaBootstrap key={1} /> },
      { name: "Express", icon: <SiExpress key={2} /> },
      { name: "MongoDB", icon: <SiMongodb key={3} /> },
      { name: "Mongoose", icon: <SiMongoose key={4} /> },
    ],
    github: "https://github.com/kameha1011/yelpcamp",
    link: "https://yelpcamp-jhka.onrender.com/",
  },
  {
    title: "Fake ecommerce",
    image: fakeEcommerce,
    technologiesIcons: [
      { name: "Bootstrap", icon: <FaBootstrap key={1} /> },
      { name: "React", icon: <SiReact key={2} /> },
    ],
    github: "https://github.com/Kameha1011/react-ecommerce",
    link: "https://react-ecommerce-eight-plum.vercel.app/",
  },
  {
    title: "Amazing Events",
    image: amazingEvents,
    technologiesIcons: [
      { name: "HTML", icon: <SiHtml5 key={1} /> },
      { name: "CSS", icon: <SiCss3 key={2} /> },
      { name: "JavaScript", icon: <SiJavascript key={3} /> },
    ],
    github: "https://github.com/Kameha1011/-AmazingEvents_FLORES",
    link: "https://amazing-events-flores.vercel.app/",
  },
  {
    title: "Pokedex",
    image: pokedex,
    technologiesIcons: [
      { name: "CSS", icon: <SiCss3 key={1} /> },
      { name: "React", icon: <SiReact key={2} /> },
    ],
    github: "https://github.com/Kameha1011/Pokedex",
    link: "https://pokedex-mu-five.vercel.app/",
  },
  {
    title: "Interactive Card Details",
    image: cardDetail,
    technologiesIcons: [
      { name: "HTML", icon: <SiHtml5 key={1} /> },
      { name: "CSS", icon: <SiCss3 key={2} /> },
      { name: "JavaScript", icon: <SiJavascript key={3} /> },
    ],
    github: "https://github.com/Kameha1011/Interactive-Card-Details-Form",
    link: "https://interactive-card-details-form-five.vercel.app/",
  },
  {
    title: "CM Landing page",
    image: cmLP,
    technologiesIcons: [
      { name: "HTML", icon: <SiHtml5 key={1} /> },
      { name: "CSS", icon: <SiCss3 key={2} /> },
      { name: "Bootstrap", icon: <FaBootstrap key={3} /> },
    ],
    github: "https://github.com/Kameha1011/LeslyCabreraLandingPage",
    link: "https://lesly-cabrera-landing-page.vercel.app/",
  },
];
