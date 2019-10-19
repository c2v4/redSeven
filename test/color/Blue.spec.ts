import { Card } from '../../src/Card';
import {BLUE, ORANGE, YELLOW, GREEN} from '../../src/color/Color'

test("Blue - cards of all different color",()=>{
    expect(BLUE.rule([
        new Card(ORANGE,5),
        new Card(ORANGE,4),
        new Card(YELLOW,3),
        new Card(BLUE,2)
    ],[
        new Card(GREEN,7),
        new Card(GREEN,6),
        new Card(BLUE,6),
        new Card(GREEN,1)
    ]
    )).toBeGreaterThan(0);
})