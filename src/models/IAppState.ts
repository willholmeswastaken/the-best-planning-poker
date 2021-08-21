import { IRoomAttendee } from "./IRoomAttendee";

export interface IAppState {
    displayName: string;
    currentRoomId?: string;
    currentRoom?: IRoom;
}

export interface IRoom {
    id: string;
    name: string;
    attendees: Array<IRoomAttendee>;
    currentTopic: string;
    isLeaderOnlyAllowedToShow: boolean;
}