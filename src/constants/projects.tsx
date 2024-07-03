import yelpcamp from "../assets/images/projects/yelpcamp.webp";
import fakeEcommerce from "../assets/images/projects/fakeEcommerce.webp";
import pokedex from "../assets/images/projects/pokemon.webp";
import cmLP from "../assets/images/projects/leslysocialmedia.webp";
import cardDetail from "../assets/images/projects/interactiveForm.webp";
import amazingEvents from "../assets/images/projects/amazingEvents.webp";
import mytinerary from "../assets/images/projects/mytinerary.webp";
import { FaBootstrap } from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiReact,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiRedux,
  SiGooglecloud,
} from "react-icons/si";
import {type Project } from "../types";

export const PROJECTS: Project[] = [
  {
    title: "Yelpcamp",
    image: yelpcamp,
    technologiesIcons: [
      { name: "Bootstrap", icon: <FaBootstrap key={1} /> },
      { name: "Express", icon: <SiExpress key={2} /> },
      { name: "MongoDB", icon: <SiMongodb key={3} /> },
      { name: "Mongoose", icon: <SiMongoose key={4} /> },
    ],
    description:
      "Yelpcamp is a comprehensive web application developed as part of the Full Stack Web Developer course by Colt Steele. I followed his tutorials and added some additional features to create a platform for exploring campgrounds, reading reviews, and checking availability. This project was built using Node.js (Express.js), MongoDB, Mongoose, EJS, and Bootstrap and is deployed on Render.",
    github: [
      {
        type: "Monolithic",
        link: "https://github.com/Kameha1011/yelpcamp",
      },
    ],
    link: "https://yelpcamp-jhka.onrender.com/",
  },
  {
    title: "Fake ecommerce",
    image: fakeEcommerce,
    technologiesIcons: [
      { name: "Bootstrap", icon: <FaBootstrap key={1} /> },
      { name: "React", icon: <SiReact key={2} /> },
    ],
    description:
      "Fake Ecommerce App is a demonstration of an ecommerce platform where you can explore various products, search by name or category, and even add products to your shopping cart for checkout. This app is built using React and leverages several key technologies, including API Context, React Router Dom, Axios, React Icons, and Bootstrap. To populate the app with products, we've integrated the Fake Store API, which provides a collection of fictional products.",
    github: [
      {
        type: "Frontend",
        link: "https://github.com/Kameha1011/fake-ecommerce",
      },
    ],
    link: "https://react-ecommerce-eight-plum.vercel.app/",
  },
  {
    title: "My Tinerary",
    image: mytinerary,
    technologiesIcons: [
      { name: "Bootstrap", icon: <FaBootstrap key={1} /> },
      { name: "React", icon: <SiReact key={2} /> },
      { name: "Redux", icon: <SiRedux key={3} /> },
      { name: "Mongoose", icon: <SiMongoose key={4} /> },
      { name: "MongoDB", icon: <SiMongodb key={5} /> },
      { name: "Express", icon: <SiExpress key={6} /> },
      { name: "Google Cloud", icon: <SiGooglecloud key={7} /> },
    ],
    description:
      "Mytinerary is a city travel rewiew app that I created on the Mindhub's Full stack web development bootcamp with scrum modality. It allows users to create their own account and add their favorite cities, Google sign in, and add comments. The app was built using React, Redux, Mongoose, MongoDB, Express, and Google Cloud. This project was deployed on Vercel.",
    github: [
      {
        type: "Frontend",
        link: "https://github.com/Kameha1011/mytinerary-omarFlores",
      },
      {
        type: "Backend",
        link: "https://github.com/Kameha1011/mytinerary-back-omarFlores",
      },
    ],
    link: "https://mytinerary-omar-flores.vercel.app/",
  },
  {
    title: "Amazing Events",
    image: amazingEvents,
    technologiesIcons: [
      { name: "HTML", icon: <SiHtml5 key={1} /> },
      { name: "CSS", icon: <SiCss3 key={2} /> },
      { name: "JavaScript", icon: <SiJavascript key={3} /> },
    ],
    description:
      "Amazing Events is a basic event showcase that focuses on displaying event statistics, details, and provides functionalities to simplify event searching.",
    github: [
      {
        type: "Frontend",
        link: "https://github.com/Kameha1011/-AmazingEvents_FLORES",
      },
    ],
    link: "https://amazing-events-flores.vercel.app/",
  },
  {
    title: "Pokedex",
    image: pokedex,
    technologiesIcons: [
      { name: "CSS", icon: <SiCss3 key={1} /> },
      { name: "React", icon: <SiReact key={2} /> },
    ],
    description:
      "Pokedex is a web application that allows users to search for and view information about different pokemons. The app was built using React and deployed on Vercel.",
    github: [
      {
        type: "Frontend",
        link: "https://github.com/Kameha1011/Pokedex",
      },
    ],
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
    description:
      "This is a solution to the Interactive card details form challenge on Frontend Mentor.",
    github: [
      {
        type: "Frontend",
        link: "https://github.com/Kameha1011/Interactive-Card-Details-Form",
      },
    ],
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
    description: "This is a simple Landing Page for offering CM services, it was made with html css bootstrap and vanilla javascript where you can see some simple but nice animations made with css and that are triggered using javascript intersection observers.",
    github: [
      {
        type: "Frontend",
        link: "https://github.com/Kameha1011/LeslyCabreraLandingPage",
      },
    ],
    link: "https://lesly-cabrera-landing-page.vercel.app/",
  },
];
