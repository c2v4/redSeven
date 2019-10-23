import {State} from "../State";
import {Player} from "../Player";
import {AddPlayer} from "./AddPlayer";
import {AddToPalette} from "./AddToPalette";
import {Card} from "../domain/Card";
import {RED} from "../domain/color/Color";

test('AddToPalette test',()=>{
    const state = new State();
    let player = new Player();
    let addPlayer = new AddPlayer(player);
    addPlayer.apply(state);
    let card = new Card(RED,7);
    let addToPalette = new AddToPalette(player,card);

    addPlayer.apply(state);
    addToPalette.apply(state);

    expect(state.getPalette(player)).toContain(card);
});