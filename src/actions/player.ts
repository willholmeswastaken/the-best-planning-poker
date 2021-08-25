import { IPlayer } from "../models/IPlayer";
import { DispatchAction } from "./shared";

export const addPlayer = (player: IPlayer): DispatchAction<IPlayer> => ({
    type: "ADD_PLAYER_ACTION",
    payload: player
});

export const addVote = (vote: string): DispatchAction<string> => ({
    type: "ADD_VOTE_ACTION",
    payload: vote
});