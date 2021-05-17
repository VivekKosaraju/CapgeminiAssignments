import React, { useState, useRef, useEffect } from 'react'
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import Select from "react-validation/build/select";
import CheckButton from "react-validation/build/button";
import UserService from "../services/user.service";
import { Link } from 'react-router-dom';
import coupon1 from "./../assets/HappyEasyGo.jpg"
import coupon2 from "./../assets/Coupon2.jpg"
import Logos from './Logos';

const required = (value) => {
  if (!value || value == "") {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const validate = (value) => {
  if (value.length < 1 || value.length > 15) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required
      </div>
    );
  }
};



const Search = (props) => {

  const form = useRef();
  const checkBtn = useRef();
  const [flag, setFlag] = useState(false);
  const [flights, setFlights] = useState();

  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");





  const onChangeSource = (e) => {
    const source = e.target.value;
    setSource(source);
  };

  const onChangeDestination = (e) => {
    const destination = e.target.value;
    setDestination(destination);
  };

  const onChangeDate = (e) => {
    const date = e.target.value;
    setDate(date);
  };

  const handleLogin = (e) => {
    setLoading(true);
    const user = JSON.parse(localStorage.getItem("user"));

    e.preventDefault();


    setMessage("");

    setFlag(false);
    setFlights();

    if (user) {

      form.current.validateAll();

      if (checkBtn.current.context._errors.length === 0) {
        UserService.getFlights(source, destination, date).then(
          (responce) => {
            if (responce) {
              setFlights(responce);
              console.log(responce);
            }
            else {
              setMessage("No flights available");
            }
          },
          (error) => {
            const resMessage =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();

            setLoading(false);
            setMessage(resMessage);
          }
        );
      } else {
        setLoading(false);
      }
    } else {
      setLoading(false);
      var c = window.confirm("please login");
      if (c) {
        props.history.push("/login")
      }

    }

  };



  useEffect(() => {
    if (flights) {
      setFlag(true);
      setLoading(false);
    }
    console.log(flights);
  });

  return (
    <div className="container-fluid" style={{ padding: "0", backgroundColor: "#e6ffff" }} >
      <Logos />
      <div className="row">
        <div className="col-md-4 bg-white shadow-lg bg-white rounded ">
          <img src={coupon1} alt="Coupon" width="80%" style={{ marginTop: "100px", marginLeft: "50px" }} />
          <img src={coupon2} alt="Coupon" width="80%" style={{ marginTop: "100px", marginLeft: "50px" }} />
        </div>

        <div className="col-md-8  " style={{ padding: "50px" }}>

          <div className="card card-container bg-light" style={{ padding: "30px 30px" }}>
            <img
              src="https://p.kindpng.com/picc/s/491-4910127_airplane-clipart-logo-airplane-logo-png-transparent-png.png"
              alt="Search-Logo"
              className="profile-img-card"
            />

            <Form onSubmit={handleLogin} ref={form}>


              <div className="form-group">
                <label htmlFor="source">From</label>
                <Select className="form-control" name="source" value={source}
                  onChange={onChangeSource}
                  validations={[required, validate]} >
                  <option selected>--Please Select--</option>
                  <option value="Hyderabad">Hyderabad</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Bangalore">Bangalore</option>
                  <option value="Goa">Goa</option>
                </Select>
              </div>

              <div className="form-group">
                <label htmlFor="destination">To</label>
                <Select className="form-control" name="destination" value={destination}
                  onChange={onChangeDestination}
                  validations={[required, validate]} >
                  <option selected>--Please Select--</option>
                  <option value="Hyderabad">Hyderabad</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Bangalore">Bangalore</option>
                  <option value="Goa">Goa</option>
                </Select>
              </div>

              <div className="form-group">
                <label htmlFor="date">Date</label>
                <Input
                  type="date"
                  className="form-control"

                  name="date"
                  value={date}
                  onChange={onChangeDate}
                  validations={[required]}
                />
              </div>

              <div className="form-group">
                <button className="btn btn-primary btn-block" disabled={loading}>
                  {loading && (
                    <span className="spinner-border spinner-border-sm"></span>
                  )}
                  <span>Search</span>
                </button>
              </div>

              {message && (
                <div className="form-group">
                  <div className="alert alert-danger" role="alert">
                    {message}
                  </div>
                </div>
              )}
              <CheckButton style={{ display: "none" }} ref={checkBtn} />
            </Form>
          </div>
        </div>
      </div>


      { flag && <div class="container-fluid">
        <h2>Below are the avalible flights</h2>
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th>FlightNO</th>
              <th>Company</th>
              <th>Depart</th>
              <th>Duration</th>
              <th>Arrival</th>
              <th>Fare</th>
            </tr>
          </thead>
          <tbody>
            {flights.map((flight, index) =>

              <tr key={index}>
                <td>{flight.flightNumber}</td>
                <td><img src={flight.logo} width="50px" height="50px" /></td>
                <td>
                  {flight.source}<br />
                  {flight.departDate}<br />
                  {flight.departTime}
                </td>
                <tb>
                  {flight.travelTime}<br />
                  <i class="fas fa-long-arrow-alt-right fa-3x"></i>
                </tb>
                <td>
                  {flight.destination}<br />
                  {flight.arrivalDate}<br />
                  {flight.arrivalTime}
                </td>

                <td>{flight.fare}</td>
                <td><Link class="btn btn-primary" to={`/booking/${flight.flightNumber}`}>Book</Link></td>
              </tr>

            )}
          </tbody>
        </table>
        {/* <div className="row">
                            {flights.map((flight,index)  => 
                                                              
                                                          <div className="col-md-3 col-sm-6 bg-white" key={index} style={{margin:"3%"}}>
                                                            <dl className="row">
                                                              <dt className="col-sm-6">FlightNO</dt>
                                                              <dt className="col-sm-6">{flight.flightNumber}</dt>
                                                              <dt className="col-sm-6">From</dt>
                                                              <dt className="col-sm-6">{flight.source}</dt>
                                                              <dt className="col-sm-6">To</dt>
                                                              <dt className="col-sm-6">{flight.destination}</dt>
                                                              <dt className="col-sm-6">Date</dt>
                                                              <dt className="col-sm-6">{flight.date}</dt>
                                                              <dt className="col-sm-6">Time</dt>
                                                              <dt className="col-sm-6">{flight.time}</dt>
                                                              <dt className="col-sm-6">Fare</dt>
                                                              <dt className="col-sm-6">{flight.fare}</dt>
                                                            </dl>
                                                          </div>
  
                              )}
                      </div>
                      */}
      </div>}



    </div>
  )



}


export default Search;