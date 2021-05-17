import React, { useState,useRef,useEffect } from 'react'
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import Select from "react-validation/build/select";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import UserService from "../services/user.service";
import AuthService from "../services/auth.service";
import Rating from "./Ratinngs/Rating";
import Logos from "./Logos";


const required = (value) => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };
  
  const validEmail = (value) => {
    if (!isEmail(value)) {
      return (
        <div className="alert alert-danger" role="alert">
          This is not a valid email.
        </div>
      );
    }
  };

  const vusername = (value) => {
    if (value.length < 3 || value.length > 20) {
      return (
        <div className="alert alert-danger" role="alert">
          The username must be between 3 and 20 characters.
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


const Booking = (props) => {
    const form = useRef();
    const checkBtn = useRef();
  
    const [firstName, setFirstName] = useState("");
    const [pemail, setPemail] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");

    const currentUser = AuthService.getCurrentUser();
    var uemail;
    const flightNumber = props.match.params.id ;

    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
  
    const onChangeFirstName = (e) => {
      const firstName = e.target.value;
      setFirstName(firstName);
    };
    const onChangeLastName = (e) => {
        const lastName = e.target.value;
        setLastName(lastName);
      };

    const onChangePemail = (e) => {
        const email = e.target.value;
        setPemail(email);
      };
  
    const onChangePhone = (e) => {
      const phone = e.target.value;
      setPhone(phone);
    };

    const onChangeAge = (e) => {
        const age = e.target.value;
        setAge(age);
      };

      const onChangeGender = (e) => {
        const gender = e.target.value;
        setGender(gender);
      };
  
    const handleRegister = (e) => {
      e.preventDefault();
      setLoading(true);
      setMessage("");
      setSuccessful(false);
  
      form.current.validateAll();
  
      if (checkBtn.current.context._errors.length === 0) {
        UserService.addBooking({
            "userEmail": uemail,
            "firstName": firstName,
            "lastName" : lastName,
            "passengerEmail": pemail,
            "passengerPhone": phone,
            "passengerAge": age,
            "gender": gender,
            "flightId": flightNumber
        }).then(
          (response) => {
            setMessage("Succefully Booked");
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

    useEffect(() => {
        if(currentUser){
            uemail = currentUser.username;
        }
        else{
          var c = window.confirm("please login");
              props.history.push("/login")
              window.location.reload();
        }
    })

    return (
      <div className="container-fluid" style={{padding:"0px",backgroundColor:"#e6ffff"}}>
        <Logos/>

            <div className="col-md-12 " >
                <div className="card card-container">
                  <img
                    src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                    alt="profile-img"
                    className="profile-img-card"
                  />

                  <Form onSubmit={handleRegister} ref={form} >
                    {!successful && (
                      <div>
                        <div className="form-group">
                          <label htmlFor="firstName">First Name</label>
                          <Input
                            type="text"
                            className="form-control"
                            name="firstName"
                            value={firstName}
                            onChange={onChangeFirstName}
                            validations={[required, vusername]}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="lastName">Last Name</label>
                          <Input
                            type="text"
                            className="form-control"
                            name="lastName"
                            value={lastName}
                            onChange={onChangeLastName}
                            validations={[required, vusername]}
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="pemail">Email</label>
                          <Input
                            type="text"
                            className="form-control"
                            name="passengerEmail"
                            value={pemail}
                            onChange={onChangePemail}
                            validations={[required, validEmail]}
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="phone">Phone</label>
                          <Input
                            type="text"
                            className="form-control"
                            name="passengerPhone"
                            value={phone}
                            onChange={onChangePhone}
                            validations={[required]}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="age">Age</label>
                          <Input
                            type="text"
                            className="form-control"
                            name="passengerAge"
                            value={age}
                            onChange={onChangeAge}
                            validations={[required]}
                          />
                        </div>

                        <div className="form-group">
                            <label htmlFor="gender">Gender</label>
                          <Select className="form-control" name="gender"  value={gender}
                              onChange={onChangeGender}
                              validations={[required,validate]} >
                                <option selected>--Please Select--</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </Select>
                        </div>

                        <div className="form-group">
                              <button className="btn btn-primary btn-block" disabled={loading}>
                                  {loading && (
                                      <span className="spinner-border spinner-border-sm"></span>
                                  )}
                                  <span>Confirm Book</span>
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
                {successful && (
                        <div style={{margin:"0px 30%"}}>
                          <Rating/>
                        </div>
                    )}
        </div>
      </div>
    )
};


export default Booking;
