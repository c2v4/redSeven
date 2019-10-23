import {GameEvent} from "./GameEvent";
import {Player} from "../Player";
import {Card} from "../domain/Card";
import {State} from "../State";

export class AddToPalette implements GameEvent {

    constructor(private player: Player,private card: Card) {

    }

    apply(state: State) {
        state.addToPalette(this.player,this.card);
    }

}