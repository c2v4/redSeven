import { cardComparator } from "../src/CardComparator";
import { Color } from "../src/Color";
import { Card } from "../src/Card";
test("Compare 2 cards", () => {
  expect(
    cardComparator(new Card(Color.VIOLET, 3), new Card(Color.BLUE, 5))
  ).toBeLessThan(0);
});

test("Same value test", () => {
  expect(
    cardComparator(new Card(Color.RED, 4), new Card(Color.BLUE, 4))
  ).toBeGreaterThan(0);
});
