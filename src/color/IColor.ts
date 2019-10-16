import { Card } from "../Card";

export interface IColor {
  ordinal: number;
  rule: Rule;
}

export type Rule = (first: Array<Card>, second: Array<Card>) => number;
