import { EventEmitter } from "events";
import { _3D } from "../_3D";
import { type GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Assets, Loaders } from "~/interfaces";

export default class Resources extends EventEmitter{

    _3Dparent : _3D
    _Loaders : Loaders

    _assets : Assets
    _items: Array<Array<GLTF>> = new Array()
    _queue: number
    _loaded: number = 0

    constructor(assets : Assets){
        super()
        this._3Dparent = new _3D()
        this._Loaders = this.setLoaders()

        this._assets = assets
        this._queue = assets.length

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
        for(const asset of this._assets){
            if(asset.type == "gltf"){
                this._Loaders.gltf.load(asset.path, (file) => {
                    this.LoadedFile(file)
                })
            }
        }
    }

    private LoadedFile(file : GLTF){
        if(!this._items[0]) return
        this._items[0][this._items.length] = file
        this._loaded++

        if(this._loaded = this._queue) this.emit('ready')
    }
}
// slt Vargas, reforma trabalhista Temer -- estudar para a prox aula de Ética