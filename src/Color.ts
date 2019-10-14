import { Card } from "./Card";
import R = require("ramda");

export enum Color {
  VIOLET,
  INDIGO,
  BLUE,
  GREEN,
  YELLOW,
  ORANGE,
  RED
}

export const rule: (color: Color) => Rule = (color: Color) => {
  switch (color) {
    case Color.RED:
      return highestCardRule;
    case Color.ORANGE:
      return cardsOfOneNumber;
  }
  throw new Error("unexpected color");
};

type Rule = (first: Array<Card>, second: Array<Card>) => number;

const highestCardRule: Rule = (first: Array<Card>, second: Array<Card>) => {
  const findBestInHand = R.compose(
    R.reduce(Math.max, 0),
    R.map((c: Card) => c.effective())
  );
  return findBestInHand(first) - findBestInHand(second);
};

const cardsOfOneNumber: Rule = (first: Array<Card>, second: Array<Card>) => {
  var applicable = R.compose(
    R.reduce<Card[], Card[]>(R.maxBy((a: Card[]) => a.length), [] as Card[]),
    R.values,
    R.groupBy((a: Card) => a.value.toString())
  );
  var firstApplicable = applicable(first);
  var secondApplicable = applicable(second);
  const differenceInSizes = firstApplicable.length - secondApplicable.length;
  if (differenceInSizes == 0) {
    return highestCardRule(firstApplicable, secondApplicable);
  }
  return differenceInSizes;
};
