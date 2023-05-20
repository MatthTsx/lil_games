import { _3D } from "../_3D";
import { assets } from "../constants/models";
import Resources from "./resorces";
import GetRoom from "./rooms/getRooms";
import type Room from "./rooms/room";


export default class World{

    _3Dparent : _3D
    _resoucers : Resources
    _room : Room
    _currentRoom : number

    constructor(){
        this._3Dparent = new _3D()
        this._resoucers = new Resources(assets)
        this._currentRoom = this._3Dparent._roomId
        this._room = GetRoom(this._currentRoom)

        this._resoucers.on('ready', () => this.setRoom(this._currentRoom))
    }

    public setRoom(id : number){
        this._room.setObjects(this._resoucers._items[id] || [])
    }

    public update(){
        this._currentRoom = this._3Dparent._roomId
        this._room.remove()
        this._room = GetRoom(this._currentRoom)
        this.setRoom(this._currentRoom)
    }
}