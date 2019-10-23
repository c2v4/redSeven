import {Player} from "./Player";
import {State} from "./State";
import {Deck} from "./Deck";
import {GameEvent} from "./event/GameEvent";
import {Watcher} from "./Watcher";
import {AddPlayer} from "./event/AddPlayer";
import {AddToPalette} from "./event/AddToPalette";


export class Game implements Watcher{

    private readonly state:State;
    private currentPlayer:Player;

    constructor(players:ReadonlyArray<Player>,private deck:Deck, private watchers:Array<Watcher>){
        this.state = new State();
        this.watchers.push(this);
        this.initialize(players);
    }

    private publishEvent(event:GameEvent){
        this.watchers.forEach(watcher => watcher.consumeEvent(event));
    }

    consumeEvent(event:GameEvent){
        event.apply(this.state);
    }

    private initialize(players: ReadonlyArray<Player>) {
        players.forEach(player =>  this.publishEvent(new AddPlayer(player)));
        players.forEach(player => this.publishEvent(new AddToPalette(player,this.deck.dealCard())));
        //TODO: figure out current player and publish event
    }
}