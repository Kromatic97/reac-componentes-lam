import React from 'react'

const Lamp = ({ onOff, toogleOnOff }) => {

    return (
        <div>
            <div className={`circle ${onOff}`}></div>
            <button onClick={toogleOnOff} className='btn'>{onOff}</button>
        </div>

    )
}

export default Lamp