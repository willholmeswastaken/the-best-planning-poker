import { DispatchAction } from "../actions/shared";
import { IPlayer } from "../models/IPlayer";
import { IRoom } from "../models/IRoom";

export interface CurrentRoomState {
    id: string;
    name: string;
    players: Array<IPlayer>;
    currentTopic: string;
    isLeaderOnlyAllowedToShow: boolean;
}

const initialState = {
    id: '1',
    name: 'Wills Room',
    players: [],
    currentTopic: '',
    isLeaderOnlyAllowedToShow: true
};

export const roomReducer = (state: CurrentRoomState = initialState, action: DispatchAction<any>) => {
    switch (action.type) {
        case "ADD_ROOM_ACTION": {
            let room: IRoom = action.payload as IRoom;
            return { ...room };
        }
        default:
            return state;
    }
}