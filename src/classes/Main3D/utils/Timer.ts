import EventEmitter from "events";


export default class Timer extends EventEmitter{

    currentTime: number
    TargetDelta: number
    lastUpdate: number

    constructor(){
        super()
        this.currentTime = Date.now()
        this.TargetDelta = 1000/60
        this.lastUpdate = this.currentTime

        this.calc()
    }
    
    private calc(){
        const time = Date.now()
        if(time - this.lastUpdate >= this.TargetDelta){
            this.emit('update')
            this.lastUpdate = time
            this.currentTime = time
        }
        window.requestAnimationFrame(() => this.calc())
    }

}