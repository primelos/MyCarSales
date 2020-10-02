import React, { useState } from "react";
import { axiosWithAuth } from "./utils/axiosWithAuth";


const Login = props => {
  const [enter, setEnter] = useState({
    username: "",
    password: ""
  });
  const log = e => {
    e.preventDefault();
    setEnter({
      ...enter,
      [e.target.name]: e.target.value
    });
  };
  const login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/login", enter)
      .then(sentMe => {
        localStorage.setItem("token", sentMe.data.payload);
        props.history.push("/protected");
      })
      .catch(err => console.log(err));
  };
  return (
    <div className='login-page'>
      
      <header> Welcome To CarBuyer.com</header>
      <div className='form-enter'>
        <form onSubmit={login}>
          <input
            type="text"
            name="username"
            placeholder="enter username"
            onChange={log}
          />
          <input
            type="password"
            name="password"
            placeholder="enter password"
            value={enter.password}
            onChange={log}
          />
          <button>Login In</button>
        </form>
      </div>
      <p>Testing Only login: user passwprd: asdf</p>
    </div>
  );
};

export default Login;
