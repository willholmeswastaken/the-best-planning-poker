import { IPlayer } from "./IPlayer";

export interface IAppState {
    currentPlayer?: IPlayer;
    currentRoomId?: string;
    currentRoom?: IRoom;
}

export interface IRoom {
    id: string;
    name: string;
    players: Array<IPlayer>;
    currentTopic: string;
    isLeaderOnlyAllowedToShow: boolean;
}