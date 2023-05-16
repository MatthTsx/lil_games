

export default function GetMegaNumbers(){
    const number = new Array(6);
    for (let index = 0; index < number.length; index++) {
        number[index] = Math.floor(Math.random() * 60) + 1;
    }

    return number;
}