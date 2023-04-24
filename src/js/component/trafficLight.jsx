
import React, {useState} from 'react'
import '/src/styles/trafficLight.css'

export const TrafficLight = () => {
    const [colorActivo, setColorActivo] = useState("")

    return (<>
        
        <div className='container'>
            <div className="bg-dark mx-5" id='palo' style={{maxWidth: "3em"}}></div>
            <div className="container bg-dark p-4 mx-0 mb-4 d-flex flex-column justify-content-center" style={{maxWidth: "10em"}}>
            <   div onClick={() => setColorActivo("rojo")} className={"rojo"+" "+`${colorActivo == 'rojo' ? "brillo" : " "}`}></div>
                <div onClick={() => setColorActivo("amarillo")} className={"amarillo"+" "+`${colorActivo == 'amarillo' ? "brillo" : " "}`}></div>
                <div onClick={() => setColorActivo("verde")} className={"verde"+" "+`${colorActivo == 'verde' ? "brillo" : " "}`}></div>
            </div>
        </div>

        </>)
}