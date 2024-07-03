type MonthYear = `${number}/${number}`;
export type Experience = {
  readonly company: string;
  readonly position: string;
  readonly period: `${MonthYear} - ${MonthYear | "Present"}`;
  readonly bullets: readonly string[];
};

export type Education = {
  src: string;
  alt: string;
  title: string;
  grade: string;
  period: MonthYear | `${MonthYear} - Present`;
  certificate?: `https://www.${string}` | `/pdf/${string}`;
};

export type SlideDirection = "left" | "right";

export type Project = {
  title: string;
  image: string;
  technologiesIcons: {
    name: string;
    icon: JSX.Element;
  }[];
  description: string;
  github: {
    type: string;
    link: string;
  }[];
  link: string;
};
