import { Color } from '../src/Color';
import { Card } from '../src/Card';
test('effective value test', () => {
    let card =new Card(Color.YELLOW,3) 
    expect(card.effective()).toBe(34);
});