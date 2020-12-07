import React, { useState } from "react";
import './style.scss'
import { GoOctoface, GoCode ,GoBeaker} from 'react-icons/go'
export const EventTicket = () => {
  return (
    <>
  <div className="eventTicket"> 
    
    <div className="rightSide">
      <div className="eventDate"></div>
      <div className="eventUser">
        <div className="userImg">

        </div>
        <div className="userInfos">
          <div className="userName">
            Your FullName
          </div>
          <div className="githubUser">
          <GoOctoface/>  <p>Yougithub</p>
          </div>
        </div>
      </div>
    </div>

    <div className="leftSide">
      <div className="eventTicketDetail">

      </div>
    </div>

  </div>
  </>
  )
};
