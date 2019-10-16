import { Card } from "../../src/Card";
import { RED } from '../../src/color/Red';
import { YELLOW } from '../../src/color/Yellow';
import { BLUE } from '../../src/color/Blue';
import { GREEN } from '../../src/color/Green';
import { INDIGO } from '../../src/color/Indigo';
import { ORANGE } from '../../src/color/Orange';
import { VIOLET } from '../../src/color/Violet';

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
