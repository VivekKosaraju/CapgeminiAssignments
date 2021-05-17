import React, { useState, useEffect ,useRef} from "react";
import Carousel from 'react-bootstrap/Carousel'
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import {Link} from "react-router-dom";
import Footer from "./Footers/Footer";
import Travel from "./Travel/Travel";
import News from "./News/News";
import Logos from "./Logos";

import flight5 from "./../assets/flight5.jpg"
import flight6 from "./../assets/flight6.jpg"
import coupon1 from "./../assets/HappyEasyGo.jpg"

import AuthService from "../services/auth.service";
import UserService from "../services/user.service";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};


const Home = (props) => {


  return (
    <div className="container-fluid" style={{padding:"0px",backgroundColor:"#e6ffff"}}>
      <header>
        <div className="container-fluid" style={{padding:"0px"}}>
         <div className="row text-center" style={{padding:"0px"}}> 
          <div className="col-md-12" style={{margin:"0 auto",padding:"0px"}}>
              <Carousel>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={flight5}
                        alt="First slide"
                        height="600px"
                      />
                      <Carousel.Caption>
                        <h3>Book Your Flight Tickets Now</h3>
                        <p>We provide flight tickets at low cost</p>
                        
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={flight6}
                        alt="Second slide"
                        height="600px"
                      />

                      <Carousel.Caption>
                        <h3>Stay Safe. Save Lives</h3>
                        <p>We provide best and high quality services in your journey</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80"
                        alt="Third slide"
                        height="600px"
                      />

                      <Carousel.Caption>
                        <h3>Together we can fight</h3>
                        <p>Continue to wear mask and use sanitizers.</p>
                      </Carousel.Caption>
                    </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </header>
      
      <div className="container">
        <Link to="/search" className="btn btn-primary" style={{margin: "20px 40%"}}>Search Flights <i class="fas fa-search"></i></Link>
      </div>
      
      
      

      <div className="container">
        <div className="row text-center">
          <div className="col-md-5 w-100 col-sm-12 m-4 bg-white shadow-lg  mb-5 pt-3 bg-white rounded ">
            <i className="far fa-money-bill-alt fa-3x" style={{color:"#279c46"}}></i>
            <h4>BEST PRICE GUARANTEED</h4>
            <p>Find a lower price?We'll refund you 200% of the difference.</p>
          </div>
          <div className="col-md-5 w-100 col-sm-12 m-4 bg-white shadow-lg  mb-5 pt-3 bg-white rounded ">
            <i className="far fa-clock fa-3x "></i>
            <h4>24*7 SUPPORT</h4>
            <p>We're always here for you - reach us 24 hours a day, 7 days a week.</p>
          </div>
        </div>
      </div>

      <Travel/>

    <Logos/>

    <Footer/>
      
    </div>
  );
};

export default Home;