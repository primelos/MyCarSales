import React, { useState } from "react";
import { auth } from '../firebase'
import { useHistory, Link } from 'react-router-dom'

const Login = props => {
  const [enter, setEnter] = useState({email: '', password: ''});

  const history = useHistory()
  const { email, password } = enter

 async function loginApp(e) {
    e.preventDefault();
    // setEnter({
    //   ...enter,
    //   [e.target.name]: e.target.value
    // });
   
    await auth.signInWithEmailAndPassword(email, password)
    history.push('/protected')
  };

  const handleChange = (e) => {
    const { value, name } = e.target
    setEnter({ ...enter, [name]: value})
  }

  // const login = e => {
  //   e.preventDefault();
  //   axiosWithAuth()
  //     .post("/login", enter)
  //     .then(sentMe => {
  //       localStorage.setItem("token", sentMe.data.payload);
  //       props.history.push("/protected");
  //     })
  //     .catch(err => console.log(err));
  // };

  return (
    <div className="login-page">
      <header> Welcome To CarBuyer.com</header>
      <div className="form-enter">
        <form onSubmit={loginApp}>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            onChange={handleChange}
            value={email}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={password}
            onChange={handleChange}
            required
          />
          <button type="submit">Login In</button>
        </form>
      </div>
      <p>New User -{'>'} <Link to='signup'>Sign Up</Link></p>
    </div>
  );
};

export default Login;
