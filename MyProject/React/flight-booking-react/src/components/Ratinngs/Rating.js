import React, { useState,useRef,useEffect } from 'react'
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import BeautyStars from 'beauty-stars';

import UserService from "../../services/user.service";
import AuthService from "../../services/auth.service";


const required = (value) => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };

const Rating = (props) => {

    const form = useRef();
    const checkBtn = useRef();

    const [stars,setStars] = useState(0);
    const [review, setReview] = useState("");
    var userEmail = null;
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const currentUser = AuthService.getCurrentUser();


    const onChangeStars = (e) => {
        const rating = e.target.value;
        setStars(rating);
    }

    const onChangeReview = (e) => {
        const value = e.target.value;
        setReview(value);
    }
    
    

    const handleRegister = (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");
        setSuccessful(false);
    
        form.current.validateAll();
        
        if (checkBtn.current.context._errors.length === 0) {
          userEmail = currentUser.username;
          UserService.addRating({
            userEmail,
            stars,
            review
          }).then(
            (response) => {
              setMessage("Thank You..!");
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
              setSuccessful(false);
              setLoading(false);
            }
          );
        }
      };

    return (
        <div>

                    <Form onSubmit={handleRegister} ref={form}>
                        {!successful && (
                            <div>
                            <div className="form-group">
                                <label htmlFor="rating" className="text-primary lead">Please Rate Your Experience</label>
                                <BeautyStars 
                                    name="rating"
                                    value={stars}
                                    onChange={value => setStars(value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="review">Review</label>
                                <Input
                                type="text"
                                className="form-control"
                                name="review"
                                value={review}
                                onChange={onChangeReview}
                                validations={[required]}
                                />
                            </div>
                            <div className="form-group">
                                        <button className="btn btn-warning btn-block" disabled={loading}>
                                            {loading && (
                                                <span className="spinner-border spinner-border-sm"></span>
                                            )}
                                            <span>Submit</span>
                                        </button>
                                </div>
                            </div> 
                           
                        )}

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
                    <CheckButton style={{ display: "none" }} ref={checkBtn} />
                    </Form>
        </div>
    )
}

export default Rating
