import React from 'react'
import AirIndia from "./../assets/AirIndia.jpg"
import Indigo from "./../assets/Indigo.png"
import SpiceJet from "./../assets/SpiceJet.png"
import GoAir from "./../assets/GoAir.png"
import AirAsia from "./../assets/AirAsia.png"
import Vistara from "./../assets/Vistara.jpg"

const Logos = () => {
    return (
        <div className="container-fluid bg-white">
            <div className="col-md-12">
                <img className="m-5" src={AirIndia} height="100px" width="150px" alt="AirIndia"/>
                <img className="m-5" src={Indigo} height="100px" width="150px" alt="Indigo"/>
                <img className="m-4" src={SpiceJet} height="100px" width="150px" alt="SpiceJet"/>
                <img className="m-5" src={GoAir} height="100px" width="150px" alt="GoAir"/>
                <img className="m-4" src={AirAsia} height="100px" width="150px" alt="AirAsia"/>
                <img className="m-5" src={Vistara} height="100px" width="150px" alt="Vistara"/>
            </div>
        </div>
    )
}

export default Logos
