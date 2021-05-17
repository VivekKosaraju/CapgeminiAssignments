import React,{useState, useEffect, useRef} from 'react'
import AuthService from "../services/auth.service";
import UserService from "../services/user.service";
import { Link } from 'react-router-dom';

const AllBookings = (props) => {
    const currentUser = AuthService.getCurrentUser();
    const [bookings,setBookings] = useState();
    const [message,setMessage] = useState("");

    useEffect(() => {
        if(!currentUser){
            var c = window.confirm("please login as Admin");
          props.history.push("/login")
          window.location.reload();
        }
        if(currentUser.roles.includes("ROLE_ADMIN")){
                UserService.getAllBookings().then(
                (response) => {
                    setBookings(response);
                },
                (error) => {
                    const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();
        
                    setMessage(resMessage);
                }
                );
        
    }
    else{
      var c = window.confirm("please login as Admin");
          props.history.push("/login")
          window.location.reload();
    }
    },[]);
    
    return (
        <div className="container" >
            {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}

                { bookings && <div class="container overflow-auto"  >
                    <h2 style={{margin:"15px"}}>All Bookings</h2>      
                    <table class="table table-striped table-dark" >
                        <thead>
                        <tr>
                            <th>BookingId</th>
                            <th>UserId</th>
                            <th>firstName</th>
                            <th>lastName</th>
                            <th>PassengerEmail</th>
                            <th>Phone</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>BookingDate</th>
                            <th>flightNo</th>
                        </tr>
                        </thead>
                        <tbody>
                            {bookings.map((booking,index)  => 
                                                            
                                                            <tr key={index}>
                                                                <td>{booking.bookingId}</td>
                                                                <td>{booking.userEmail}</td>
                                                                <td>{booking.firstName}</td>
                                                                <td>{booking.lastName}</td>
                                                                <td>{booking.passengerEmail}</td>
                                                                <td>{booking.passengerPhone}</td>
                                                                <td>{booking.passengerAge}</td>
                                                                <td>{booking.gender}</td>
                                                                <td>{booking.bookingDate}</td>
                                                                <td>{booking.flightId}</td>
                                                                <td><Link class="btn btn-danger" to={`/deleteBooking/${booking.bookingId}`}>Cancle</Link></td>
                                                            </tr>

                            )}
                        </tbody>
                    </table>
            </div> }

        </div>
    )
}

export default AllBookings
