import { Card } from "../Card";
import { BLUE, GREEN, INDIGO, ORANGE, VIOLET, YELLOW } from './Color';

test("Orange - cards of one number", () => {
  expect(
    ORANGE.rule(
      [
        new Card(YELLOW, 2),
        new Card(BLUE, 2),
        new Card(GREEN, 2),
        new Card(GREEN, 1)
      ],
      [
        new Card(GREEN, 7),
        new Card(VIOLET, 7),
        new Card(INDIGO, 2),
        new Card(ORANGE, 1)
      ]
    )
  ).toBeGreaterThan(0);
});

test("Orange - cards of one number, draw", () => {
  expect(
    ORANGE.rule(
      [
        new Card(YELLOW, 7),
        new Card(BLUE, 7),
        new Card(GREEN, 3),
        new Card(GREEN, 1)
      ],
      [
        new Card(GREEN, 6),
        new Card(VIOLET, 6),
        new Card(INDIGO, 2),
        new Card(ORANGE, 1)
      ]
    )
  ).toBeGreaterThan(0);
});
