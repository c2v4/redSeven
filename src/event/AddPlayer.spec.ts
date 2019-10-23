import {State} from "../State";
import {AddPlayer} from "./AddPlayer";
import {Player} from "../Player";

test('AddPlayer test',() => {
    const state = new State();
    let player = new Player();
    let addPlayer = new AddPlayer(player);

    addPlayer.apply(state);

    expect(state.getPlayers()).toContain(player);
});