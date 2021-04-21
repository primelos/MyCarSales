import React, { useState } from 'react'
import { auth } from "../firebase";
import { useHistory, Link } from "react-router-dom";



const SignUp = () => {
  const [enter, setEnter] = useState({ email: "", password: "", confirmPassword:'' });
  const [error, setError] = useState('')

  const history = useHistory();
  const { email, password, confirmPassword } = enter;

  async function loginApp(e) {
    e.preventDefault();
    // setEnter({
    //   ...enter,
    //   [e.target.name]: e.target.value
    // });
    if( password !== confirmPassword){
      return setError('Passwords do not match')
    }
    try {
      setError('')
      await auth.createUserWithEmailAndPassword(email, password);
      history.push("/protected");

    } catch {
      setError('Failed to create an account')
    }
  }

  const handleChange = (e) => {
    const { value, name } = e.target;
    setEnter({ ...enter, [name]: value });
  };

  return (
    <div className="login-page">
      <header> Welcome To CarBuyer.com</header>
      <div className="form-enter">
        {error && <p className='error-signup'>{error}</p>}
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
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={handleChange}
            required
          />
          <button type="submit">Sign up</button>
        </form>
      </div>
      <p>
        Already have an account <Link to="/">Login</Link>
      </p>
    </div>
  );
};

export default SignUp
