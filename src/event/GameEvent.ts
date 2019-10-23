import {State} from "../State";

export interface GameEvent {
    apply(state: State):void;
}