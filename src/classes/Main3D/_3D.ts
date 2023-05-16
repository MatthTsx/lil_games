import * as THREE from "three"
import Sizes from "./utils/Sizes";
import Timer from "./utils/Timer";
import CameraContainer from "./components/Camera";
import RendererContainer from "./components/Renderer";
import World from "./models/World";


export class _3D{

    static instance: _3D;

    // @ts-ignore
    _camera: CameraContainer; _Sizes: Sizes; _Timer: Timer; _scene : THREE.Scene; _canvas: HTMLCanvasElement; _rendererClass : RendererContainer; _roomId: number; _World : World

    //@ts-ignore
    _mesh: THREE.Mesh
    constructor(canvas? : any, roomId? : number){
        if(_3D.instance) return _3D.instance
        else
        _3D.instance = this

        this._roomId = roomId || 0
        this._canvas = canvas
        this._scene = new THREE.Scene()
        this._Sizes = new Sizes()
        this._Timer = new Timer()
        this._camera = new CameraContainer()
        this._rendererClass = new RendererContainer()
        this._World = new World()

        //TODO: Remover'
        const mat = new THREE.MeshBasicMaterial({ color: "red" })
        const geo = new THREE.BoxGeometry(2,3,2)
        this._mesh = new THREE.Mesh(geo, mat)
        this._scene.add(this._mesh)
        this._mesh.position.z = -5
        this._mesh.position.x = 5

        this._Sizes.on('resize', () => this.resize())
        this._Timer.on('update', () => this.update())
        this.rotate()
    }

    //TODO: Remover
    private rotate(){
        this._mesh.rotateY(0.01)
        this._mesh.rotateX(0.01)
        this._mesh.rotateZ(0.01)
        window.requestAnimationFrame(() => this.rotate())
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