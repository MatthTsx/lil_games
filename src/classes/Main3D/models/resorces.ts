import { EventEmitter } from "events";
import { _3D } from "../_3D";
import { type GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Assets, Loaders } from "~/interfaces";

export default class Resources extends EventEmitter{

    _3Dparent : _3D
    _Loaders : Loaders

    _assets : Array<Assets>
    _items: Array<Array<GLTF>> = new Array()
    _queue: number = 0
    _loaded: number = 0

    constructor(assets : Array<Assets>){
        super()
        this._3Dparent = new _3D()
        this._Loaders = this.setLoaders()

        this._assets = assets
        for(const asset of assets){
            this._queue += asset.length
        }

        this.setLoaders()
        this.startLoading()
    }

    private setLoaders(){
        const gltf = new GLTFLoader()
        return {
            gltf
        }
    }

    private startLoading(){
        for(const a of this._assets){
            for(const asset of a){
                if(asset.type == "gltf"){
                    this._Loaders.gltf.load(asset.path, (file) => {
                        this.LoadedFile(file, this._assets.indexOf(a))
                    })
                }
            }
        }
    }

    private LoadedFile(file : GLTF, numb: number){
        if(!this._items[numb] || !this._items) return
        // @ts-ignore
        this._items[numb][this._items.length] = file
        this._loaded++

        if(this._loaded = this._queue) this.emit('ready')
    }
}