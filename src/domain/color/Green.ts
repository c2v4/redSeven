import { IColor, cards } from './IColor';
import { Card } from '../Card';
import R = require('ramda');

const even: (a: Card[]) => Card[] = R.filter((card: Card) => card.value % 2 == 0);

export const _GREEN: IColor = {
  ordinal: 4,
  rule: cards(even)
};
