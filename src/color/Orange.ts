import { IColor, Rule, ofOne, cards } from './IColor';
import { Card } from "../Card";

const _number = (card:Card) => card.value.toString()

export const ORANGE: IColor = {
  ordinal: 6,
  rule: cards(ofOne(_number))
};
