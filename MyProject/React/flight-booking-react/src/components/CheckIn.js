import React,{useState,useRef,useEffect} from 'react'
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import UserService from "../services/user.service";
import AuthService from "../services/auth.service";

const required = (value) => {
    if (!value || value=="") {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };

const CheckIn = (props) => {

    const form = useRef();
    const checkBtn = useRef();
    const [flag,setFlag] = useState(false);
    const [booking,setBooking] = useState();
    const [bookingId, setBookingId] = useState();
  
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const currentUser = AuthService.getCurrentUser();

    const onChangeBooking = (e) => {
        const data = e.target.value;
        setBookingId(data);
      };

      const handleLogin = (e) => {
        setLoading(true);

        e.preventDefault();
    
        setMessage("");

                form.current.validateAll();
            
                if (checkBtn.current.context._errors.length === 0) {
                    UserService.getBooking(bookingId).then(
                    (responce) => {
                        if(responce){
                            setBooking(responce);
                            setFlag(true);
                            setLoading(false)
                            console.log(responce);
                    }
                    else
                    {
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
      
    
        };

        useEffect(() => {
            if(!currentUser.roles.includes("ROLE_MODERATOR"))
            {
                var c = window.confirm("please login as Moderator");
                props.history.push("/login")
                window.location.reload();
            }
        },[]);

    return (
        <div className="container-fluid">
                <div className="container">
                         <Form onSubmit={handleLogin} ref={form}>
                              
                                
                            <div className="form-group">
                                 <center><label htmlFor="bookingId" className="font-weight-bold">Enter Booking Id</label></center>
                                  <Input
                                    type="text"
                                    className="form-control"
                                    
                                    name="bookingId"
                                    value={bookingId}
                                    onChange={onChangeBooking}
                                    validations={[required]}
                                  />
                                </div>
                                <div className="form-group">
                                  <center> <button className="btn btn-primary btn-md " disabled={loading}>
                                      {loading && (
                                        <span className="spinner-border spinner-border-sm"></span>
                                      )}
                                      <span>Check</span>
                                    </button>
                                    </center>
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

                    {flag && <div className="card card-container">
                
                                    <div className="card-body">
                                        BookingId:
                                        <p className="font-weight-bold">{booking.bookingId}</p>
                                        Email:
                                        <p className="font-weight-bold">{booking.passengerEmail}</p>
                                        FirstName: 
                                        <p className="font-weight-bold">{booking.firstName}</p>
                                        LastName: 
                                        <p className="font-weight-bold">{booking.lastName}</p>
                                        Phone: 
                                        <p className="font-weight-bold">{booking.passengerPhone}</p>
                                        Age: 
                                        <p className="font-weight-bold">{booking.passengerAge}</p>
                                        Gender: 
                                        <p className="font-weight-bold">{booking.gender}</p>
                                        BookingDate: 
                                        <p className="font-weight-bold">{booking.bookingDate}</p>
                                        FlightNo:
                                        <p className="font-weight-bold">{booking.flightId}</p>
                                    </div>
                        
                        </div>}
            
        </div>
    )
}

export default CheckIn
