

export enum Choice{
    rock = 1,
    paper = 2,
    scissors = 3
}

export enum WinStatus{
    win = 1,
    tie = 2,
    loss = 3
}

export interface Props{
    choice: Choice
}

export interface resp {
    choice: Choice,
    winner: WinStatus
}

interface winProps{
    choice1 : Choice,
    enemy : Choice
}

function isWinning({...winProps} : winProps){
    if(winProps.choice1 == winProps.enemy) return WinStatus.tie

    if(winProps.choice1 == Choice.rock && winProps.enemy == Choice.scissors) return WinStatus.win 
    if(winProps.choice1 == Choice.rock && winProps.enemy == Choice.paper) return WinStatus.loss 

    if(winProps.choice1 == Choice.paper && winProps.enemy == Choice.rock) return WinStatus.win 
    if(winProps.choice1 == Choice.paper && winProps.enemy == Choice.scissors) return WinStatus.loss

    if(winProps.choice1 == Choice.scissors && winProps.enemy == Choice.paper) return WinStatus.win 
    if(winProps.choice1 == Choice.scissors && winProps.enemy == Choice.rock) return WinStatus.loss

    return WinStatus.tie
}

export function getPPT({...Props} : Props){
    const choice_ = Math.floor(Math.random() * 3) + 1
    const c = Choice[choice_] as unknown as Choice

    const resp : resp = {
        choice: Choice[c] as unknown as Choice,
        winner: WinStatus.tie
    }
    resp.winner = isWinning({ choice1: Props.choice, enemy: resp.choice })

    return resp
}