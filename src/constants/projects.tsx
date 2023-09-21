import yelpcamp from "../assets/images/projects/yelpcamp.png";
import fakeEcommerce from "../assets/images/projects/fakeEcommerce.png";
import pokedex from "../assets/images/projects/pokemon.png";
import cmLP from "../assets/images/projects/leslysocialmedia.png";
import cardDetail from "../assets/images/projects/interactiveForm.png";
import amazingEvents from "../assets/images/projects/amazingEvents.png";
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
      <FaBootstrap key={1} />,
      <SiExpress key={2} />,
      <SiMongodb key={3} />,
      <SiMongoose key={4} />,
    ],
    github: "https://github.com/kameha1011/yelpcamp",
    link: "https://yelpcamp-jhka.onrender.com/",
  },
  {
    title: "Fake ecommerce",
    image: fakeEcommerce,
    technologiesIcons: [<FaBootstrap key={1} />, <SiReact key={2} />],
    github: "https://github.com/Kameha1011/react-ecommerce",
    link: "https://react-ecommerce-eight-plum.vercel.app/",
  },
  {
    title: "Amazing Events",
    image: amazingEvents,
    technologiesIcons: [
      <SiHtml5 key={1} />,
      <SiCss3 key={2} />,
      <SiJavascript key={3} />,
    ],
    github: "https://github.com/Kameha1011/-AmazingEvents_FLORES",
    link: "https://amazing-events-flores.vercel.app/",
  },
  {
    title: "Pokedex",
    image: pokedex,
    technologiesIcons: [<SiCss3 key={1} />, <SiReact key={2} />],
    github: "https://github.com/Kameha1011/Pokedex",
    link: "https://pokedex-mu-five.vercel.app/",
  },
  {
    title: "Interactive Card Details",
    image: cardDetail,
    technologiesIcons: [<SiHtml5 key={1} />, <SiCss3 key={2} />, <SiJavascript key={3} />],
    github: "https://github.com/Kameha1011/Interactive-Card-Details-Form",
    link: "https://interactive-card-details-form-five.vercel.app/",
  },
  {
    title: "CM Landing page",
    image: cmLP,
    technologiesIcons: [<SiHtml5 key={1} />, <SiCss3 key={2} />, <FaBootstrap key={3} />],
    github: "https://github.com/Kameha1011/LeslyCabreraLandingPage",
    link: "https://lesly-cabrera-landing-page.vercel.app/",
  },
];
