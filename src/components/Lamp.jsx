import React, { useState } from 'react'

const Lamp = () => {

    const [onOff, setonOff] = useState("off");

    const toogleOnOff = () => {
        if (onOff === "off") {
          setonOff("on")
        } else {
          setonOff("off")
        }
      }

    return (
        <div className='lamp-container'>
            <div className={`circle ${onOff}`}></div>
            <button onClick={toogleOnOff} className='btn'>{onOff}</button>
        </div>

    )
}

export default Lamp