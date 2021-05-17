import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from 'react-bootstrap/Carousel'
import "./App.css";

import AuthService from "./services/auth.service";

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BoardUser from "./components/BoardUser";
import BoardModerator from "./components/BoardModerator";
import CheckIn from "./components/CheckIn";
import BoardAdmin from "./components/BoardAdmin";
import Search from "./components/Search";
import Booking from "./components/Booking";
import DeleteBooking from "./components/DeleteBooking";
import MyBookings from "./components/MyBookings";
import AllBookings from "./components/AllBookings";
import Flights from "./components/Flight/Flights";
import AddFlights from "./components/Flight/AddFlights";
import UpdateFlight from "./components/Flight/UpdateFlight";
import DeleteFlight from "./components/Flight/DeleteFlight";
import AllRatings from "./components/Ratinngs/AllRatings";
import DeleteRating from "./components/Ratinngs/DeleteRating";
import Footer from "./components/Footers/Footer";




const App = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };

  return (
    <div>
      
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container-fluid">
              <Link to={"/"} className="navbar-brand">
                MyFlights
              </Link>
              
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="collapsibleNavbar">      
                    <div className="navbar-nav mr-auto">
                      <li className="nav-item">
                        <Link to={"/home"} className="nav-link">
                         <strong>Home</strong> 
                        </Link>
                      </li>

                      {showModeratorBoard && (
                        <li className="nav-item">
                          <Link to={"/checkIn"} className="nav-link">
                            Check-In
                          </Link>
                        </li>
                      )}

                      {showAdminBoard && (
                        <li className="nav-item dropdown">
                          <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                            Admin
                          </a>
                          <div className="dropdown-menu">
                            <Link to={"/flights"} className="dropdown-item">
                              Flights
                            </Link>
                            <Link to={"/allBookings"} className="dropdown-item">
                              Bookings
                            </Link>
                            <Link to={"/allRatings"} className="dropdown-item">
                              Ratings
                            </Link>
                          </div>
                      </li>
                      )}

                      {currentUser && (
                        <li className="nav-item">
                          <Link to={"/user"} className="nav-link">
                            User
                          </Link>
                        </li>
                      )}
                    </div>

                    {currentUser ? (
                      <div className="navbar-nav ml-auto">
                        <li className="nav-item dropdown">
                          <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                            {currentUser.username}
                          </a>
                          <div className="dropdown-menu">
                            <Link to={"/profile"} className="dropdown-item">
                              Profile
                            </Link>
                            <Link to={"/myBookings"} className="dropdown-item">
                              MyBookings
                            </Link>
                          </div>
                        </li>
                        <li className="nav-item">
                          <a href="/login" className="nav-link" onClick={logOut}>
                            LogOut
                          </a>
                        </li>
                      </div>
                    ) : (
                      <div className="navbar-nav ml-auto">
                        <li className="nav-item">
                          <Link to={"/login"} className="nav-link">
                            Login
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link to={"/register"} className="nav-link">
                            Sign Up
                          </Link>
                        </li>
                      </div>
                    )}
                  </div>
            </div>
      </nav>

      <div className="container-fluid" style={{padding:"0px",margin:"0px"}}>
        <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/profile" component={Profile} />
          <Route path="/user" component={BoardUser} />
          <Route path="/mod" component={BoardModerator} />
          <Route path="/admin" component={BoardAdmin} />
          <Route path="/search" component={Search} />
          <Route path="/booking/:id" component={Booking} />
          <Route path="/myBookings" component={MyBookings} />
          <Route path="/allBookings" component={AllBookings} />
          <Route path="/deleteBooking/:id" component={DeleteBooking} />
          <Route path="/flights" component={Flights} />
          <Route path="/addFlights" component={AddFlights} />
          <Route path="/updateFlight/:id" component={UpdateFlight} />
          <Route path="/deleteFlight/:id" component={DeleteFlight} />
          <Route path="/allRatings" component={AllRatings} />
          <Route path="/deleteRating/:id" component={DeleteRating} />
          <Route path="/checkIn" component={CheckIn} />
        </Switch>
      </div>
    </div>
  );
};

export default App;