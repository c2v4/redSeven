import { cardComparator } from "../src/CardComparator";
import { Card } from "../src/Card";
import { VIOLET } from "../src/color/Violet";
import { BLUE } from "../src/color/Blue";
import { RED } from "../src/color/Red";
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
