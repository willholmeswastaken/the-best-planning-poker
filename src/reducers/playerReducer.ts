import { PlayerAction } from "../actions/player";

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

export const playerReducer = (state: CurrentPlayerState = initialState, action: PlayerAction) => {
    switch (action.type) {
        case "ADD_VOTE_ACTION": {
            return { ...state, currentVoteValue: action.payload };
        }
        default:
            return state;
    }
}