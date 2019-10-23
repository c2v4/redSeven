import { Card } from "../Card";
import { cards, IColor, ofOne } from './IColor';

const _number = (card:Card) => card.value.toString();

export const _ORANGE: IColor = {
  ordinal: 6,
  rule: cards(ofOne(_number))
};
