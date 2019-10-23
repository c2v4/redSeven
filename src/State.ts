import {Player} from "./Player";
import {Card} from "./domain/Card";

export class State {
    private players: Array<Player> = [];
    private palettes:Map<Player,Array<Card>> = new Map<Player, Array<Card>>();

    getPlayers(): Player[] {
        return this.players;
    }

    addPlayer(player: Player) {
        this.players.push(player);
        this.palettes.set(player,[]);
    }

    getPalette(player: Player) {
        return this.palettes.get(player);
    }

    addToPalette(player: Player, card: Card) {
        let playerPalette:Array<Card> = this.palettes.get(player)!;
        playerPalette.push(card);
    }
}