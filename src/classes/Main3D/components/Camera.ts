import * as THREE from 'three'
import { _3D } from '../_3D'
import Sizes from '../utils/Sizes'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default class CameraContainer{

    _camera : THREE.PerspectiveCamera
    _3DParent : _3D
    _Sizes : Sizes
    _Scene : THREE.Scene
    _Orb : OrbitControls
    _canvas : HTMLCanvasElement

    constructor(){
        this._3DParent = new _3D()
        this._Sizes = this._3DParent._Sizes
        this._Scene = this._3DParent._scene
        this._canvas = this._3DParent._canvas

        this._camera = this.createCamera()
        this._Orb = new OrbitControls(this._camera, this._canvas)
        this._Orb.enableZoom = true
        this._Scene.add(this._camera)
    }

    private createCamera(){
        const cam = new THREE.PerspectiveCamera(
            35,
            this._Sizes.aspectRatio,
            0.1,
            1000
        )
        cam.position.z = 10
        return cam
    }

    public resize(){
        this._camera.aspect = this._Sizes.aspectRatio
        this._camera.updateProjectionMatrix()
    }

}