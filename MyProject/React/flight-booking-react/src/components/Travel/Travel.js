import React from 'react'
import tajmahal from "./../../assets/TajMahal.jfif"
import GoldenTemple from "./../../assets/GoldenTemple.jfif"
import Goa from "./../../assets/Goa.jfif"
import {Link} from "react-router-dom"

const Travel = () => {
    return (
        <div className="container bg-white shadow-lg p-3 mb-5 bg-white rounded " style={{padding:"15px 25px",marginTop:"35px",marginBottom:"35px"}}>
            <h2>Popular Tourist Spots</h2>
            <div className="row text-justify">
                <div className="col-md-3 col-sm-12 m-4 col-xs-12" style={{padding:"0 25px",boxShadow:"0px 2px 2px rgba(0, 0, 0, 0.3)"}}>
                   <Link to="/search"><img src={tajmahal} width="100%" height="150px" style={{borderRadius:"25px"}}></img></Link> 
                    <h4>Delhi</h4>
                    <p>A one day trip away from all your worries can be quite rejuvenating and fill you with new energy.</p>
                </div>
                <div className="col-md-3 col-sm-12 m-4 col-xs-12" style={{padding:"0 25px",boxShadow:"0px 2px 2px rgba(0, 0, 0, 0.3)"}}>
                    <Link to="/search"><img src={GoldenTemple} width="100%" height="150px" style={{borderRadius:"25px"}}></img></Link>
                    <h4>Golden Temple</h4>
                    <p>Amritsar is home to the spectacular Golden Temple, Sikhism's holiest shrine and one of India’s most serene and humbling sights.</p>
                </div>
                <div className="col-md-3 col-sm-12 m-4 col-xs-12" style={{padding:"0 25px",boxShadow:"0px 2px 2px rgba(0, 0, 0, 0.3)"}}>
                     <Link to="/search"><img src={Goa} width="100%" height="150px" style={{borderRadius:"25px"}}></img></Link>
                    <h4>Goa</h4>
                    <p>Goa has a tropical climate and can be visited all throughout the year with each season offering an amazing experience to the travellers.</p>
                </div>
            </div>
        </div>
    )
}

export default Travel
