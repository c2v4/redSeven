import { Card } from "../Card";
import R = require("ramda");
import { IColor, Rule } from "./IColor";

export const highestCardRule: Rule = (first: Array<Card>, second: Array<Card>) => {
    const findBestInHand = R.compose(
      R.reduce(Math.max, 0),
      R.map((c: Card) => c.effective())
    );
    return findBestInHand(first) - findBestInHand(second);
  };
  
  export const RED: IColor = {
    ordinal: 7,
    rule: highestCardRule
  };