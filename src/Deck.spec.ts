import {Deck} from "./Deck";

test('Deck size test',()=>{
    const deck = new Deck();
    expect(deck.size()).toBe(49);
});


test('Deck dealing test',()=>{
    const deck = new Deck();
    let size = deck.size();
    deck.dealCard();
    expect(deck.size()).toBe(size-1);
});