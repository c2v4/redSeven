import { IColor, cards } from './IColor';
import { Card } from '../Card';
import { color } from './Yellow';
import R = require('ramda');

const ofAllDifferentColor: (a: Card[]) => Card[] =
  R.compose(
    R.map<Card[], Card>((a: Card[]) => R.reduce<Card, Card>(R.maxBy<Card>((c: Card) => c.value), a[0], a)),
    R.values,
    R.groupBy(color)
  )

export const _BLUE: IColor = {
  ordinal: 3,
  rule: cards(ofAllDifferentColor)
};
