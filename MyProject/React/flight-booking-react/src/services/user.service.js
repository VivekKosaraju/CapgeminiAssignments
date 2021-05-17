import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8100/";

const getFlights = (source,destination,departDate) => {
  return axios.post(API_URL + "Flight/search",{
    source,
    destination,
    departDate,
  },{ headers: authHeader() }).then((response) => {
      if(response){
        console.log("Inside user service");
        console.log(response.data);
        console.log("Inside user service");
      }
      else{
        console.log("hiii")
      }
    return response.data;
  });
}

const addBooking = (data) => {
  return axios.post(API_URL + "Booking/bookings", data,
          { headers: authHeader() }).then((response) => {
        if(response){
          console.log("Inside user service");
          console.log(response.data);
          console.log("Inside user service");
        }
        else{
          console.log("hiii")
        }
      return response.data;
    });
}

const addFlight = (data) => {
  return axios.post(API_URL + "Flight/flights", data,
          { headers: authHeader() }).then((response) => {
        if(response){
          console.log("Inside user service");
          console.log(response.data);
          console.log("Inside user service");
        }
        else{
          console.log("hiii")
        }
      return response.data;
    });
}

const updateFlight = (data,id) => {
  return axios.put(API_URL + "Flight/flight/" + id, data,
          { headers: authHeader() }).then((response) => {
        if(response){
          console.log("Inside user service");
          console.log(response.data);
          console.log("Inside user service");
        }
        else{
          console.log("hiii")
        }
      return response.data;
    });
}

const deleteFlight = (id) => {
  return axios.delete(API_URL + "Flight/flight/" + id,
          { headers: authHeader() }).then((response) => {
        if(response){
          console.log("Inside user service");
          console.log(response.data);
          console.log("Inside user service");
        }
        else{
          console.log("hiii")
        }
      return response.data;
    });
}

const getBookings = (userEmail) => {
  return axios.get(API_URL + "Booking/bookingDetails/" + userEmail,
          { headers: authHeader() }).then((response) => {
        if(response){
          console.log("Inside user service");
          console.log(response.data);
          console.log("Inside user service");
        }
        else{
          console.log("hiii")
        }
      return response.data;
    });
}

const getAllBookings = () => {
  return axios.get(API_URL + "Booking/bookings",
          { headers: authHeader() }).then((response) => {
        if(response){
          console.log("Inside user service");
          console.log(response.data);
          console.log("Inside user service");
        }
        else{
          console.log("hiii")
        }
      return response.data;
    });
}

const getBooking = (id) => {
  return axios.get(API_URL + "Booking/booking/" + id,
          { headers: authHeader() }).then((response) => {
        if(response){
          console.log("Inside user service");
          console.log(response.data);
          console.log("Inside user service");
        }
        else{
          console.log("hiii")
        }
      return response.data;
    });
}

const deleteBooking = (Id) => {
  return axios.delete(API_URL + "Booking/booking/" + Id,
          { headers: authHeader() }).then((response) => {
        if(response){
          console.log("Inside user service");
          console.log(response.data);
          console.log("Inside user service");
        }
        else{
          console.log("hiii")
        }
      return response.data;
    });
}

const getAllFlights = () => {
  return axios.get(API_URL + "Flight/flights",
          { headers: authHeader() }).then((response) => {
        if(response){
          console.log("Inside user service");
          console.log(response.data);
          console.log("Inside user service");
        }
        else{
          console.log("hiii")
        }
      return response.data;
    });
}

const addRating = (data) => {
  return axios.post(API_URL + "Rating/addRating",data,
          { headers: authHeader() }).then((response) => {
        if(response){
          console.log("Inside user service");
          console.log(response.data);
          console.log("Inside user service");
        }
        else{
          console.log("hiii")
        }
      return response.data;
    });
}

const getAllRatings = () => {
  return axios.get(API_URL + "Rating/ratings",
          { headers: authHeader() }).then((response) => {
        if(response){
          console.log("Inside user service");
          console.log(response.data);
          console.log("Inside user service");
        }
        else{
          console.log("hiii")
        }
      return response.data;
    });
}


const deleteRating = (Id) => {
  return axios.delete(API_URL + "Rating/rating/" + Id,
          { headers: authHeader() }).then((response) => {
        if(response){
          console.log("Inside user service");
          console.log(response.data);
          console.log("Inside user service");
        }
        else{
          console.log("hiii")
        }
      return response.data;
    });
}

const getUserBoard = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};

const getModeratorBoard = () => {
  return axios.get(API_URL + "mod", { headers: authHeader() });
};

const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};

export default {
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
  getFlights,
  addBooking,
  getBookings,
  getAllFlights,
  addFlight,
  updateFlight,
  deleteFlight,
  getAllBookings,
  getBooking,
  addRating,
  getAllRatings,
  deleteBooking,
  deleteRating
};