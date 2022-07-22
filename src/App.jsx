import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Lamp from './components/Lamp';

function App() {
  const [onOff, setonOff] = useState("off");

  const toogleOnOff = () => {
    if (onOff === "off") {
      setonOff("on")
    } else {
      setonOff("off")
    }
  }
  return (
    <div className="App">


      <Lamp onOff={onOff} toogleOnOff={toogleOnOff} />
      <Lamp onOff={onOff} toogleOnOff={toogleOnOff} />
      <Lamp onOff={onOff} toogleOnOff={toogleOnOff} />



    </div>
  )
}

export default App
