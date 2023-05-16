import * as THREE from 'three'
import { _3D } from '../_3D'
import Sizes from '../utils/Sizes'

export default class RendererContainer{
    renderer : THREE.WebGLRenderer
    _3DParent : _3D
    _camera : THREE.PerspectiveCamera
    _canvas : HTMLCanvasElement
    _sizes : Sizes
    _scene : THREE.Scene

    constructor(){

        this._3DParent = new _3D()
        this._canvas = this._3DParent._canvas
        this._sizes = this._3DParent._Sizes
        this._scene = this._3DParent._scene
        this._camera = this._3DParent._camera._camera

        this.renderer = this.createRenderer()
    }

    private createRenderer(){
        const rend = new THREE.WebGLRenderer({
            canvas: this._canvas,
            antialias: true,
            alpha: true,
        })

        rend.outputEncoding = THREE.sRGBEncoding
        rend.toneMapping = THREE.CineonToneMapping
        rend.toneMappingExposure = 1.75
        rend.shadowMap.enabled = true //sombras
        rend.shadowMap.type = THREE.PCFShadowMap //tipo das sombras
        rend.setSize(this._sizes.width, this._sizes.height)
        rend.setPixelRatio(this._sizes.PixelRatio)
        rend.setClearColor("#967f39", .0)
        //0x000000
        return rend
    }

    public resize(){
        this.renderer.setSize(this._sizes.width, this._sizes.height)
        this.renderer.setPixelRatio(this._sizes.PixelRatio)
    }

    public update(){
        this.renderer.render(this._scene, this._camera)
    }
}