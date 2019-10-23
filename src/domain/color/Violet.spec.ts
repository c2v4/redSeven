import { ORANGE, YELLOW, BLUE, GREEN, VIOLET, INDIGO } from "./Color";
import { Card } from "../Card";

test("Violet - most cards below 4", ()=>{
    expect(
        VIOLET.rule(
          [
            new Card(YELLOW, 1),
            new Card(BLUE, 2),
            new Card(GREEN, 3),
            new Card(GREEN, 4)
          ],
          [
            new Card(GREEN, 1),
            new Card(VIOLET, 1),
            new Card(INDIGO, 6),
            new Card(ORANGE, 7)
          ]
        )
      ).toBeGreaterThan(0);
});