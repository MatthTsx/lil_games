import * as THREE from "three"
import Sizes from "./utils/Sizes";
import Timer from "./utils/Timer";
import CameraContainer from "./components/Camera";
import RendererContainer from "./components/Renderer";


export class _3D{

    static instance: _3D;

    // @ts-ignore
    _camera: CameraContainer; _Sizes: Sizes; _Timer: Timer; _scene : THREE.Scene; _canvas: HTMLCanvasElement; _rendererClass : RendererContainer

    constructor(canvas? : any){
        if(_3D.instance) return _3D.instance
        else
        _3D.instance = this

        this._canvas = canvas
        this._scene = new THREE.Scene()
        this._Sizes = new Sizes()
        this._Timer = new Timer()
        this._camera = new CameraContainer()
        this._rendererClass = new RendererContainer()

        const mat = new THREE.MeshBasicMaterial({ color: "red" })
        const geo = new THREE.BoxGeometry(2,3,2)
        const mesh = new THREE.Mesh(geo, mat)
        this._scene.add(mesh)

        this._Sizes.on('resize', () => this.resize())
        this._Timer.on('update', () => this.update())
    }

    private resize(){
        this._camera.resize()
        this._rendererClass.resize()
    }
    
    private update(){
        if(!this._rendererClass) return
        this._rendererClass.update()
    }
}