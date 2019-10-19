
import { Card } from '../../src/Card';
import { GREEN, INDIGO, RED, VIOLET, YELLOW } from '../../src/color/Color';
test("Green - most even cards",()=>{
    expect(GREEN.rule([
        new Card(YELLOW,4),
        new Card(VIOLET,2),
        new Card(YELLOW,6),
        new Card(GREEN,3)
    ],[
        new Card(INDIGO,3),
        new Card(INDIGO,1),
        new Card(RED,6),
        new Card(RED,1)
    ]
    )).toBeGreaterThan(0);
})