import { DispatchAction } from "../actions/shared";
import { IPlayer } from "../models/IPlayer";

export interface CurrentPlayerState {
    id: string;
    name: string;
    isLeader: boolean;
    isSpectator: boolean;
    currentVoteValue: string;
}

const initialState = {
    id: '1',
    name: 'Will',
    isLeader: false,
    isSpectator: false,
    currentVoteValue: '2'
};

export const playerReducer = (state: CurrentPlayerState = initialState, action: DispatchAction<any>) => {
    switch (action.type) {
        case "ADD_VOTE_ACTION": {
            return { ...state, currentVoteValue: action.payload };
        }
        case "ADD_PLAYER_ACTION": {
            let player: IPlayer = action.payload as IPlayer;
            return { ...player };
        }
        default:
            return state;
    }
}