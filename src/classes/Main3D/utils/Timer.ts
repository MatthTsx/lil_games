import EventEmitter from "events";


export default class Timer extends EventEmitter{

    currentTime: number
    TargetDelta: number
    lastUpdate: number
    fps: number //
    frames: number //
    fpsStart : number //

    constructor(){
        super()
        this.currentTime = Date.now()
        this.TargetDelta = 1000/120
        this.lastUpdate = this.currentTime
        this.fps = 0 //#TODO: remover o sistema de fps, ou n
        this.frames = 0 //
        this.fpsStart = Date.now(); //
        this.calc()
    }
    
    private calc(){
        const time = Date.now()
        if(time - this.lastUpdate >= this.TargetDelta){
            this.emit('update')
            this.lastUpdate = time
            this.currentTime = time
            this.frames += 1;
        }
        if(time - this.fpsStart >= 1000){ //
            this.fpsStart = time; //
            this.fps = this.frames //
            this.frames = 0 //
        } //
        window.requestAnimationFrame(() => this.calc())
    }

}