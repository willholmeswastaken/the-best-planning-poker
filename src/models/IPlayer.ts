export interface IPlayer {
    id: string;
    name: string;
    isLeader: boolean;
    isSpectator: boolean;
    currentVoteValue: string;
}