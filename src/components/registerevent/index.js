import React, { useState, useEffect } from "react";

import { GoOctoface, GoCode ,GoBeaker} from 'react-icons/go'
import './style.scss';

export const RegisterEvent = () => {
  return  (
 <>
    <div className="registerEvent">
  <h2> <GoCode className="green iconleft"/><p>  Inscrição <span className="green">confirmada</span>! </p></h2> 

    <h1> Bem-vindo(a) ao Evento</h1>

    <p> Personalize seu ticket com seu perfil do Github, conecte sua conta abaixo!</p>

    <button className="githubConnect">
     <span> <GoOctoface/>  </span>
     <p> Conectar
       <GoBeaker className="gradient"/>
     </p>
    </button>
    </div>
    </>
  )
};
