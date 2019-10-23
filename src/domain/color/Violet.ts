import { IColor, cards } from './IColor';
import { Card } from '../Card';
import R = require('ramda');

const below4: (a: Card[]) => Card[] = R.filter((c:Card) => c.value<4);

export const _VIOLET: IColor = {
  ordinal: 1,
  rule: cards(below4)
};
