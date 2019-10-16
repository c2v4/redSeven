import { Card } from "../Card";
import R = require("ramda");
import { highestCardRule } from "./Red";

export interface IColor {
  ordinal: number;
  rule: Rule;
}

export type Rule = (first: Array<Card>, second: Array<Card>) => number;

export const ofOne = (grouper: (a: Card) => string) => R.compose(
  R.reduce<Card[], Card[]>(R.maxBy((a: Card[]) => a.length), [] as Card[]),
  R.values,
  R.groupBy(grouper)
)

export const cards: (filter: (a:Card[]) => Card[]) => Rule = filter => (
  first,
  second
) => {
  var firstApplicable = filter(first);
  var secondApplicable = filter(second);
  const differenceInSizes = firstApplicable.length - secondApplicable.length;
  if (differenceInSizes == 0) {
    return highestCardRule(firstApplicable, secondApplicable);
  }
  return differenceInSizes;
};
