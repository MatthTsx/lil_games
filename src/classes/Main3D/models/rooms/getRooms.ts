import Room from "./room";
import Room1 from "./room1";

export default function GetRoom(id: number){
    if(id == 1) return new Room1()
    return new Room
}