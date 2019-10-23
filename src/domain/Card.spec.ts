
import { YELLOW } from './color/Color';
import { Card } from './Card';
test('effective value test', () => {
    let card =new Card(YELLOW,3);
    expect(card.effective()).toBe(35);
});