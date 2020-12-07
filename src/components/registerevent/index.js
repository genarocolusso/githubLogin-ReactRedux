import React, { useState, useEffect } from "react";
import axios from "axios";
import { GoOctoface, GoCode, GoBeaker } from "react-icons/go";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as UserActions } from "../../store/ducks/users";

import "./style.scss";

const RegisterEvent = ({ user, login, isLogged }) => {
  const [data, setData] = useState([]);
  const redirect_uri = process.env.REACT_APP_REDIRECT_URI;
  const client_id = process.env.REACT_APP_CLIENT_ID;
  const client_secret = process.env.REACT_APP_CLIENT_SECRET;
  const api = process.env.REACT_APP_API_URI;

  useEffect(() => {
    async function getgit() {
      // After requesting Github access, Github redirects back to your app with a code parameter
      const url = window.location.href;
      const hasCode = url.includes("?code=");

      // If Github API returns the code parameter
      if (hasCode) {
        const newUrl = url.split("?code=");
        //["http://localhost:3000/", "6648b095a5756a4da61f"]
        window.history.pushState({}, null, newUrl[0]);
        // show url without code.
        const res = await axios.post(
          `${api}/api/auth?code=${newUrl[1]}&client_id=${client_id}&client_secret=${client_secret}`
        );

        const access_token = res.data.split("&")[0];

        const resUser = await axios.get(`${api}/api/user?${access_token}`);

        login(resUser.data, access_token);
      }
    }
    getgit();
  }, []);

  return (
    <>
      <div className="registerEvent">
        <h2>
          <GoCode className="green iconleft" />
          <p>
            Inscrição <span className="green">confirmada</span>! 
          </p>
        </h2>

        <h1> Bem-vindo(a) ao Evento</h1>

        <p>
          Personalize seu ticket com seu perfil do Github, conecte sua conta
          abaixo!
        </p>

        <a
          href={`https://github.com/login/oauth/authorize?scope=user&client_id=${client_id}&redirect_uri=${redirect_uri}`}
        >
          <button className="githubConnect">
            <span>
              <GoOctoface />
            </span>
             
              {
                !isLogged ? (
                  <p>Conectar  
                  <GoBeaker className="gradient" /></p>
               
                ) : (  <p> {user?.name ?? ""} </p>)
              }
             
             
          </button>
        </a>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  console.log(state);

  return {
    user: state.users.user,
    isLogged: state.users.isLogged,
  };
};

const mapDispatchToProps = (dispatch) => ({
  login: (user, token) => dispatch(UserActions.login(user, token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterEvent);
//connect recebe stado e retorna oq eu quero
