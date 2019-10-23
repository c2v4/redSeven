import { INDIGO, YELLOW, VIOLET, GREEN, RED } from "./Color";
import { Card } from "../Card";

test('Indigo - longest Run', () => {
    expect(INDIGO.rule([
        new Card(YELLOW,4),
        new Card(VIOLET,2),
        new Card(YELLOW,6),
        new Card(GREEN,3)
    ],[
        new Card(INDIGO,4),
        new Card(INDIGO,3),
        new Card(RED,6),
        new Card(RED,7)
    ])).toBeGreaterThan(0)

});