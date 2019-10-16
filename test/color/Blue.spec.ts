import { YELLOW } from '../../src/color/Yellow';
import { Card } from '../../src/Card';
import { GREEN } from '../../src/color/Green';
import { VIOLET } from '../../src/color/Violet';
import { INDIGO } from '../../src/color/Indigo';
import { RED } from '../../src/color/Red';
import { BLUE } from '../../src/color/Blue';
import { ORANGE } from '../../src/color/Orange';
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