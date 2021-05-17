import React,{useState, useEffect, useRef} from 'react'
import AuthService from "../services/auth.service";
import UserService from "../services/user.service";
import { Link } from 'react-router-dom';

const MyBookings = (props) => {
    
    const currentUser = AuthService.getCurrentUser();
    var uemail = null;
    const [bookings,setBookings] = useState();
    const [message,setMessage] = useState("");
   // const [flag,setFlag] = useState(false);

    useEffect(() => {
        if(currentUser){
                uemail = currentUser.username;
                UserService.getBookings(uemail).then(
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
               // if(!flag && bookings){
                //    setFlag(true);
                //}
            
        }
        else{
          var c = window.confirm("please login");
              props.history.push("/login")
              window.location.reload();
        }
    },[])
    
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
                    <h2 style={{margin:"20px"}}>My Bookings</h2>      
                    <table class="table table-striped table-dark" >
                        <thead>
                        <tr>
                            <th>BookingId</th>
                            <th>Company</th>
                            <th>firstName</th>
                            <th>lastName</th>
                            <th>PassengerEmail</th>
                            <th>Phone</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>BookingDate</th>
                            <th>flightNo</th>
                            <th>Depart</th>
                            <th>Duration</th>
                            <th>Arrival</th>
                            <th>Fare</th>
                        </tr>
                        </thead>
                        <tbody>
                            {bookings.map((details,index)  => 
                                                            
                                                            <tr key={index}>
                                                                <td>{details.booking.bookingId}</td>
                                                                <td><img src={details.flight.logo} width="50px" height="50px"/></td>
                                                                <td>{details.booking.firstName}</td>
                                                                <td>{details.booking.lastName}</td>
                                                                <td>{details.booking.passengerEmail}</td>
                                                                <td>{details.booking.passengerPhone}</td>
                                                                <td>{details.booking.passengerAge}</td>
                                                                <td>{details.booking.gender}</td>
                                                                <td>{details.booking.bookingDate}</td>
                                                                <td>{details.booking.flightId}</td>
                                                                
                                                                <td>
                                                                  {details.flight.source}<br/>
                                                                  {details.flight.departDate}<br/>
                                                                  {details.flight.departTime}
                                                                </td>
                                                                <tb>
                                                                  {details.flight.travelTime}<br/>
                                                                 <i class="fas fa-long-arrow-alt-right fa-3x"></i> 
                                                                </tb>
                                                                <td>
                                                                  {details.flight.destination}<br/>
                                                                  {details.flight.arrivalDate}<br/>
                                                                  {details.flight.arrivalTime}
                                                                </td>

                                                                <td>{details.flight.fare}</td>
                                                                <td><Link class="btn btn-danger" to={`/deleteBooking/${details.booking.bookingId}`}>Cancle</Link></td>
                                                            </tr>

                            )}
                        </tbody>
                    </table>
            </div> }

        </div>
    )
}

export default MyBookings
