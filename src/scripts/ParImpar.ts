
export enum P {
    Par = 1,
    Impar = 2
}

export interface P_ {
    value: number,
    escolha: number,
    resp: P,
}

export default function getParOrImpar(value_ : number){
    const resp = {
        value: Math.floor(Math.random() * 100) + 1,
        escolha: value_ % 2 == 0 ? P.Impar : P.Par,
        resp: P.Par
    }

    resp.resp = (value_ + resp.value) % 2 != 0 ? P.Impar : P.Par

    return resp
}