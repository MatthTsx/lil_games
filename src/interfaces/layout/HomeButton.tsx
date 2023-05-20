import React, { Dispatch, SetStateAction } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'

interface Props{
    func: Dispatch<SetStateAction<number>>
}

function HomeButton({ func }: Props) {
    const [hover, setHover] = React.useState(false)
  return (
    <div>
        <button className='fixed top-0 left-0 w-16 h-16' onClick={() => func(0)}>
            <FontAwesomeIcon icon={faHouse} className='w-8 h-8 opacity-60 hover:opacity-100 hover:w-10 hover:h-10
            transition-all' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
            bounce={hover}/>
        </button>
    </div>
  )
}

export default HomeButton