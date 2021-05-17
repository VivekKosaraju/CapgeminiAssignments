import React,{useState, useEffect, useRef} from 'react'
import AuthService from "../../services/auth.service";
import UserService from "../../services/user.service";
import { Link } from 'react-router-dom';
import BeautyStars from 'beauty-stars';

const AllRatings = (props) => {
    const currentUser = AuthService.getCurrentUser();
    const [ratings,setRatings] = useState();
    const [message,setMessage] = useState("");

    useEffect(() => {
        if(!currentUser){
            var c = window.confirm("please login as Admin");
          props.history.push("/login")
          window.location.reload();
        }
        if(currentUser.roles.includes("ROLE_ADMIN")){
                UserService.getAllRatings().then(
                (response) => {
                    setRatings(response);
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

                { ratings && <div class="container overflow-auto"  >
                    <h2 style={{margin:"15px"}}>All Ratings</h2>      
                    <table class="table table-striped" >
                        <thead>
                        <tr>
                            <th>UserId</th>
                            <th>Rating</th>
                            <th>Review</th>
                        </tr>
                        </thead>
                        <tbody>
                            {ratings.map((rating,index)  => 
                                                            
                                                            <tr key={index}>
                                                                <td>{rating.userEmail}</td>
                                                                <td><BeautyStars value={rating.stars}/></td>
                                                                <td>{rating.review}</td>
                                                                <td><Link class="btn btn-danger" to={`/deleteRating/${rating.reviewId}`}>Delete</Link></td>
                                                            </tr>

                            )}
                        </tbody>
                    </table>
            </div> }

        </div>
    )
}

export default AllRatings
