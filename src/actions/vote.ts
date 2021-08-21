import { PlayerAction } from "./player";

export const addVote = (vote: string): PlayerAction => ({
    type: "ADD_VOTE_ACTION",
    payload: vote
});