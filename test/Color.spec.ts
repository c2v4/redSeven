import { Color, rule } from "../src/Color";
import { Card } from "../src/Card";
test("Red - highest card rule", () => {
  expect(
    rule(Color.RED)(
      [
        new Card(Color.YELLOW, 5),
        new Card(Color.BLUE, 1),
        new Card(Color.GREEN, 6),
        new Card(Color.GREEN, 4)
      ],
      [
        new Card(Color.GREEN, 3),
        new Card(Color.VIOLET, 6),
        new Card(Color.INDIGO, 1),
        new Card(Color.ORANGE, 1)
      ]
    )
  ).toBeGreaterThan(0);
});

test("Orange - cards of one number", () => {
  expect(
    rule(Color.ORANGE)(
      [
        new Card(Color.YELLOW, 2),
        new Card(Color.BLUE, 2),
        new Card(Color.GREEN, 2),
        new Card(Color.GREEN, 1)
      ],
      [
        new Card(Color.GREEN, 7),
        new Card(Color.VIOLET, 7),
        new Card(Color.INDIGO, 2),
        new Card(Color.ORANGE, 1)
      ]
    )
  ).toBeGreaterThan(0);
});

test("Orange - cards of one number, draw", () => {
  expect(
    rule(Color.ORANGE)(
      [
        new Card(Color.YELLOW, 7),
        new Card(Color.BLUE, 7),
        new Card(Color.GREEN, 3),
        new Card(Color.GREEN, 1)
      ],
      [
        new Card(Color.GREEN, 6),
        new Card(Color.VIOLET, 6),
        new Card(Color.INDIGO, 2),
        new Card(Color.ORANGE, 1)
      ]
    )
  ).toBeGreaterThan(0);
});
