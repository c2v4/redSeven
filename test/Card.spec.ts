
import { YELLOW } from '../src/color/Color';
import { Card } from '../src/Card';
test('effective value test', () => {
    let card =new Card(YELLOW,3) 
    expect(card.effective()).toBe(35);
});