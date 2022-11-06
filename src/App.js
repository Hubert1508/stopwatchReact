import React, { useState, useEffect } from "react";
import './App.css';

function App() {

  let [hundSec, setHundSec] = useState(0)
  let [sec, setSec] = useState(0)
  let [min, setMin] = useState(0)
  let [zero, setZero] = useState("0")
  let [zeroSec, setZeroSec] = useState("0")

  

  const start = ()=>{
    
    const startButton = document.getElementById("start")
    const pauseButton = document.getElementById("pause")
    const stopButton = document.getElementById("stop")
    
    startButton.setAttribute("disabled", "disabled")

    let interval = setInterval(()=>{
      
      setHundSec(prevTime=>prevTime+1)
      
    },10)

    pauseButton.onclick = ()=>{

      startButton.removeAttribute("disabled", "disabled")

      clearInterval(interval)

    }

    stopButton.onclick = ()=>{

      startButton.removeAttribute("disabled", "disabled")

      setHundSec(hundSec=0)
      setSec(sec=0)
      setMin(min=0)
      setZero(zero="0")
      setZeroSec(zeroSec="0")
      clearInterval(interval)
    }
  }

  useEffect(()=>{

    if(hundSec===100){
        
      setHundSec(hundSec=0)

      setZero(hundSec="0")

      setSec(prevSec=>prevSec +1)

      if(sec>=9){

        setZeroSec(zeroSec="")

        if(sec===59){

          setSec(sec=0)

          setZeroSec(zeroSec="0")

          setMin(prevMin=>prevMin+1)

        }
      }
    }

    else if(hundSec>=10){
      
      setZero(zero="")

  }
  
  },[hundSec])
  

  return (
    <div className="App">

      <div>{min}:{zeroSec}{sec}:{zero}{hundSec}</div>
      <button id="start" onClick={start}>Start</button>
      <button id="stop">Stop</button>
      <button id="pause">Pause</button>

    </div>
  );
}

export default App;
