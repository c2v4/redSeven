import { Card } from "./Card";
import { cardComparator } from "./CardComparator";
import { BLUE, RED, VIOLET } from './color/Color';
test("Compare 2 cards", () => {
  expect(
    cardComparator(new Card(VIOLET, 3), new Card(BLUE, 5))
  ).toBeLessThan(0);
});

test("Same value test", () => {
  expect(
    cardComparator(new Card(RED, 4), new Card(BLUE, 4))
  ).toBeGreaterThan(0);
});
