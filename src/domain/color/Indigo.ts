import { Card } from '../Card';
import { cards, IColor, longestArray } from './IColor';
import R = require("ramda");

const subarraysCurried = consecutiveSubarrays((a: Card) => a.value);

const inLongestRun: (a: Card[]) => Card[] = R.compose(
  longestArray,
  subarraysCurried,
  R.map((a: Card[]) => R.reduce<Card, Card>(R.maxBy((c: Card) => c.effective()), a[0])(a)),
  R.values,
  R.groupBy((a: Card) => a.value.toString())
);

function consecutiveSubarrays<T>(valueMapper: (v: T) => number): (input: T[]) => T[][] {
  return (input: T[]) => {
    const result: T[][] = [];
    const set: T[] = [];
    input.forEach((c: T) => { set[valueMapper(c)] = c });
    input.forEach((c: T) => {
      let value = valueMapper(c);
      if (set[value - 1]) {
        return
      }
      const temp:T[] = [];
      while(set[value]){
        temp.push(set[value]);
        delete set[value];
        value++;
      }
      result.push(temp)
    });
    return result;
  }
}


export const _INDIGO: IColor = {
  ordinal: 2,
  rule: cards(inLongestRun)
};
