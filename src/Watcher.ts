import {GameEvent} from "./event/GameEvent";

export interface Watcher {
    consumeEvent(event: GameEvent):void;
}