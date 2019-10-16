import { IColor, Rule, ofOne, cards } from './IColor';
import { Card } from '../Card';

const color = (card:Card) => card.color.ordinal.toString() 

export const YELLOW: IColor = {
  ordinal: 5,
  rule: cards(ofOne(color))
};
