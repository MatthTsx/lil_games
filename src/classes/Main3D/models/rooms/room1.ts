import Room from "./room";
import * as THREE from 'three'

export default class Room1 extends Room{
    

    constructor(){
        super()
        const mat = new THREE.MeshBasicMaterial({color:"blue"})
        const geo = new THREE.BoxGeometry(2,2,2)
        const obj = new THREE.Mesh(geo, mat)
        this._objects.push(obj)
    }
}