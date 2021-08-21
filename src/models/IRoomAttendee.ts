export interface IRoomAttendee {
    id: string;
    name: string;
    isLeader: boolean;
    isSpectator: boolean;
    currentVoteValue: string;
}