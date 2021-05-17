import React, {useEffect} from "react";
import AuthService from "../services/auth.service";

const Profile = (props) => {
  const currentUser = AuthService.getCurrentUser();

  useEffect(() => {
    if(currentUser){
   
    }
    else{
      var c = window.confirm("please login");
          props.history.push("/login")
          window.location.reload();
    }
})

  return (
    <div className="container-fluid" style={{padding:"0"}}>
      <header className="jumbotron ">
        <h3 className="text-dark text-center">
          Welcome <strong>{currentUser.id}!</strong>
        </h3>
      </header>
      <div className="card card-container">
        <img
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
            alt="profile-img"
            className="profile-img-card"
          />
          <div className="card-body">
                     <h4 className="card-title text-danger">{currentUser.id}</h4>
                     <div className="card-text">
                       
                       <strong>Email: </strong>{currentUser.username}<br/>
                            <strong>Authorities:</strong>
                          <ul>
                            {currentUser.roles &&
                              currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
                          </ul>
                          <span>
                            <strong>Token:</strong> {currentUser.token.substring(0, 20)} ...{" "}
                            {currentUser.token.substr(currentUser.token.length - 20)}
                            
                          </span>
                     </div>
          </div>
      </div>
     
    </div>
  );
};

export default Profile;