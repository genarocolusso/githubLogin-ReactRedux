import React, { useState } from "react";
import './style.scss'
import { GoOctoface } from 'react-icons/go'


import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as UserActions } from "../../store/ducks/users";


  const EventTicket = ({user}) => {

   

  return (
    <>
     <div> 
  <div className="eventTicket"> 
    
    <div className="rightSide">
      <div className="eventDate"></div>
      <div className="eventUser">
        <div className="userImg">
          
            {user?.avatar_url ?(
              <img src={user?.avatar_url ? user?.avatar_url : ""} />
            ) : ""
            }
          
     
        </div>
        <div className="userInfos">
          <div className="userName">
            {user ? user.name : "YourFullName"}
          </div>
          <div className="githubUser">
          <GoOctoface/>  <p>
            {user ? user.login : "youtgithub"}</p>
          </div>
        </div>
      </div>
    </div>

    <div className="leftSide">
      <div className="eventTicketDetail">

      </div>
    </div>

  </div>
          <br/>    
  <div className="techs">Tecnologias utilizadas: React, Redux, Express, github oauth, Duck pattern</div> 
  </div>
  
   </>
  )
};


const mapStateToProps = state => ({
  user: state.users.user
});
  
export default connect(
  mapStateToProps 
)(EventTicket);