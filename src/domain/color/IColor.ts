import R = require('ramda');

import { Card } from '../Card';

export interface IColor {
  ordinal: number;
  rule: Rule;
}

export type Rule = (first: Array<Card>, second: Array<Card>) => number;

export function longestArray<T>(arg:T[][]):T[]{
   return R.reduce<T[],T[]>(R.maxBy((a: T[]) => a.length), [] as T[])(arg);
}

export const ofOne = (grouper: (a: Card) => string) => R.compose(
  longestArray,
  (arg:{ [index: string]: Card[] }) => R.values(arg),
  R.groupBy(grouper)
);

export const cards: (filter: (a:Card[]) => Card[]) => Rule = filter => (
  first,
  second
) => {
  const firstApplicable = filter(first);
  const secondApplicable = filter(second);
  const differenceInSizes = firstApplicable.length - secondApplicable.length;
  if (differenceInSizes == 0) {
    return highestCardRule(firstApplicable, secondApplicable);
  }
  return differenceInSizes;
};

export const highestCardRule: Rule = (first: Array<Card>, second: Array<Card>) => {
  const findBestInHand = R.compose(
    R.reduce(Math.max, 0),
    R.map((c: Card) => c.effective())
  );
  return findBestInHand(first) - findBestInHand(second);
};
