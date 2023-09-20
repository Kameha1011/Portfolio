type MonthYear = `${number}/${number}`;
export type Experience = {
  readonly company: string;
  readonly position: string;
  readonly period: `${MonthYear} - ${MonthYear | "Present"}`;
  readonly bullets: readonly string[];
};
