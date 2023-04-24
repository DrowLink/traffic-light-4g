
import React, {useState} from 'react'
import '/src/styles/trafficLight.css'

export const TrafficLight = () => {
    const [colorActivo, setColorActivo] = useState("verde")

    return (<>
        
        <div className='container'>
            <div className="bg-dark mx-5" id='palo' style={{maxWidth: "3em"}}></div>
            <div className="container bg-dark p-4 mx-0 mb-4 d-flex flex-column justify-content-center" style={{maxWidth: "10em"}}>
            <   div className="rojo"></div>
                <div className="amarillo"></div>
                <div className={"verde"+" "+`${colorActivo == 'verde' ? "brillo" : " "}`}></div>
            </div>
        </div>

        </>)
}