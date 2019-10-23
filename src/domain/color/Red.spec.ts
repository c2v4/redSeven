import { Card } from "../Card";
import {BLUE, ORANGE, YELLOW, GREEN, VIOLET, INDIGO, RED} from './Color'

test("Red - highest card rule", () => {
  expect(RED.rule([
    new Card(YELLOW, 5),
    new Card(BLUE, 1),
    new Card(GREEN, 6),
    new Card(GREEN, 4)
  ], [
    new Card(GREEN, 3),
    new Card(VIOLET, 6),
    new Card(INDIGO, 1),
    new Card(ORANGE, 1)
  ])).toBeGreaterThan(0);
});
