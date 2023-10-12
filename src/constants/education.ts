import uba from "../assets/images/education/uba_ing.jpg";
import udemy from "../assets/images/education/udemy.jpg";
import elearning1 from "../assets/images/education/e-learning1.jpg";
import elearning2 from "../assets/images/education/e-learning2.jpg";
import ap from "../assets/images/education/ap.jpg";
import { type Education } from "../types";

export const EDUCATION: ReadonlyArray<Education> = [
  {
    src: uba,
    alt: "UBA",
    title: "Universidad de Buenos Aires",
    grade: "Computer Science Engineering",
  },
  {
    src: udemy,
    alt: "Udemy",
    title: "Udemy",
    grade: "Full Stack Web Developer",
    certificate:
      "https://www.udemy.com/certificate/UC-35e104ad-dfc1-47dd-803b-6f67bbc4908b/",
  },
  {
    src: elearning1,
    alt: "Mindhub",
    title: "Mindhub",
    grade: "Full Stack Web Developer",
    certificate:
      "https://www.credly.com/badges/394edbbc-3bd3-4081-a847-ee01b9b29bae/linked_in_profile",
  },
  {
    src: elearning2,
    alt: "Mindhub",
    title: "Mindhub",
    grade: "Frontend Web Developer",
    certificate:
      "https://www.credly.com/badges/1c92ab8e-913b-49f3-b5d5-e4967a49b0f4/public_url",
  },
  {
    src: ap,
    alt: "AP",
    title: "Argentina Programa",
    grade: "Full Stack Web Developer",
  }
] as const;
