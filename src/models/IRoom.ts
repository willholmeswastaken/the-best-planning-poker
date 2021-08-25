import { IPlayer } from "./IPlayer";

export interface IRoom {
    id: string;
    name: string;
    players: Array<IPlayer>;
    currentTopic: string;
    isLeaderOnlyAllowedToShow: boolean;
}