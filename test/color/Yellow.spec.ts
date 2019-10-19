import { Card } from '../../src/Card';
import { BLUE, GREEN, ORANGE, YELLOW } from '../../src/color/Color';
test("Yellow - cards of one color",()=>{
    expect(YELLOW.rule([
        new Card(YELLOW,2),
        new Card(YELLOW,6),
        new Card(BLUE,1),
        new Card(GREEN,5)
    ],[
        new Card(ORANGE,6),
        new Card(GREEN,4),
        new Card(GREEN,1),
        new Card(YELLOW,4)
    ]
    )).toBeGreaterThan(0);
})