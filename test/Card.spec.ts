
import { Card } from '../src/Card';
import { YELLOW } from '../src/color/Yellow';
test('effective value test', () => {
    let card =new Card(YELLOW,3) 
    expect(card.effective()).toBe(35);
});