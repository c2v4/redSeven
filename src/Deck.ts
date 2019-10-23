import * as R from "ramda";
import {COLORS} from "./domain/color/Color";
import {Card} from "./domain/Card";
import {IColor} from "./domain/color/IColor";

export class Deck {

    private cards: Card[];

    constructor() {
        let cards: Card[] = R.chain<number, Card>(
            value => R.map<IColor, Card>(color =>
                new Card(color, value))(COLORS))(R.range(1, 8));
        Deck.shuffleArray(cards);
        this.cards = cards;
    }

    dealCard(): Card {
        let card = Deck.randomElement(this.cards);
        this.cards = R.without([card], this.cards);
        return card;
    }

    size(): number {
        return this.cards.length;
    }

    private static shuffleArray<T>(array: T[], numberGenerator: () => number = () => Math.random()) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(numberGenerator() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    private static randomElement<T>(array: T[], numberGenerator: () => number = () => Math.random()) {
        return array[Math.floor(numberGenerator() * array.length)];
    }
}