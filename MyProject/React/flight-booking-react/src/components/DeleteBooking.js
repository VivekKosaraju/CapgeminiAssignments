import React,{useState, useEffect} from 'react'

import AuthService from "../services/auth.service";
import UserService from "../services/user.service";

const DeleteBooking = (props) => {
    const bookingsId =  props.match.params.id ;
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(true);
    const currentUser = AuthService.getCurrentUser();

    useEffect(() => {
        if(currentUser){
            UserService.deleteBooking(bookingsId).then(
            (response) => {
                setMessage("Booking cancled Succefully");
                setSuccessful(true);
                setLoading(false);
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
      var c = window.confirm("please login");
          props.history.push("/login")
          window.location.reload();
    }
    },[]);

    return (
        <div className="container">
            {message && (
            <div className="form-group">
              <div
                className={ successful ? "alert alert-success" : "alert alert-danger" }
                role="alert"
              >
                {message}
              </div>
            </div>
          )}
        </div>
    )
}

export default DeleteBooking
