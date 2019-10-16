import { YELLOW } from '../../src/color/Yellow';
import { Card } from '../../src/Card';
import { GREEN } from '../../src/color/Green';
import { VIOLET } from '../../src/color/Violet';
import { INDIGO } from '../../src/color/Indigo';
import { RED } from '../../src/color/Red';
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