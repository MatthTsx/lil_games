import React from 'react'

import Home from './Home'
import Megasena from './Megasena'
import ParImpar from './ParImpar'
import PedraPapelTesoura from './PedraPapelTesoura'
import type { _2Props } from '../providers/Screen'


function GetScreen({...Props} : _2Props) {

    if(Props.id == 1) return <Megasena {...Props}/>
    if(Props.id == 2) return <ParImpar {...Props}/>
    if(Props.id == 3) return <PedraPapelTesoura {...Props}/>

  return <Home {...Props} color='#6e8ef5'/>
}

export default GetScreen