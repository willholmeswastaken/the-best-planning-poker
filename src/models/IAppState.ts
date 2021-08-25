import { IPlayer } from "./IPlayer";
import { IRoom } from "./IRoom";

export interface IAppState {
    currentPlayer: IPlayer;
    currentRoom: IRoom;
}

