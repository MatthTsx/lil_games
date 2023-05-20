
export enum P {
    Par = 1,
    Impar = 2
}

export interface P_ {
    value: number,
    escolha: number,
    resp: P,
    winner: number,
}

export default function getParOrImpar(value_ : number, choice: P){
    const resp = {
        value: Math.floor(Math.random() * 11),
        escolha: choice == P.Par ? P.Impar : P.Par,
        resp: P.Par,
        winner: 0, //1 = player, 2 = pc
    }

    resp.resp = (value_ + resp.value) % 2 != 0 ? P.Impar : P.Par
    resp.winner = resp.resp == choice ? 1 : 2

    return resp
}