import EventEmitter from "events"


export default class Sizes extends EventEmitter{

    width: number
    height: number
    aspectRatio: number
    PixelRatio: number

    constructor(){
        super()

        this.width = window.innerWidth
        this.height = window.innerHeight
        this.aspectRatio = this.width / this.height
        this.PixelRatio = window.devicePixelRatio

        window.addEventListener('resize', () => this.update())
    }

    public update(){
        this.width = window.innerWidth
        this.height = window.innerHeight
        this.aspectRatio = this.width / this.height
        this.PixelRatio = window.devicePixelRatio

        this.emit('resize')
    }
}