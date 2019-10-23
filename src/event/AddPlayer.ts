import {GameEvent} from "./GameEvent";
import {Player} from "../Player";
import {State} from "../State";

export class AddPlayer implements GameEvent {

    constructor(private player: Player) {

    }

    apply(state: State) {
        state.addPlayer(this.player);
    }

}