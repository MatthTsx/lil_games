import type { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { _3D } from "../_3D";
import * as THREE from 'three'
import World from "./World";

export default class Room {

    _3Dparent : _3D
    _scene : THREE.Scene
    _objects : Array<THREE.Object3D<THREE.Event>> = []
    _World : World

    constructor(){
        this._3Dparent = new _3D()
        this._scene = this._3Dparent._scene
        this._World = this._3Dparent._World

    }

    public setObjects(objects: Array<GLTF>){
        this._objects = []
        objects.forEach((obj) => {
            this._objects.push(obj.scene)
        })
        
    }

    private Load(assets: typeof this._objects){
        assets.forEach((model) => {
            this._scene.add(model);
        })
    }
}