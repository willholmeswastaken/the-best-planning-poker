import { IRoom } from "../models/IRoom";
import { DispatchAction } from "./shared";

export const addRoom = (room: IRoom): DispatchAction<IRoom> => ({
    type: "ADD_ROOM_ACTION",
    payload: room
});