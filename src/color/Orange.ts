import { highestCardRule } from "./Red";
import { IColor, Rule } from "./IColor";
import { Card } from "../Card";
import R = require("ramda");

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

export const ORANGE: IColor = {
  ordinal: 6,
  rule: cardsOfOneNumber
};
