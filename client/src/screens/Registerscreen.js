import React, { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { registerUser } from '../actions/userAction';
import Error from '../components/Error';
import Loading from '../components/Loading';
import Success from '../components/Success'

export default function Registerscreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const registerstate=useSelector(state=>state.registerUserReducer)
  const {error,loading,success}=registerstate
  const dispatch=useDispatch()
  function register() {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
    } else {
      const user = {
        name,
        email,
        password,
      };
      console.log(user);
      dispatch(registerUser(user))
    }
  }

  return (
    <div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 shadow p-3 mb-5 bg-white rounded">

          {loading &&(<Loading/>)}
          {success &&(<Success success="User registered sucessfully"/>)}
          {error && (<Error error="Email already registered"/>)}


          <h2 style={{ fontSize: '30px' }} className="text-center">
            Welcome
          </h2>
          <div>
            <input  
              required
              type="text"
              placeholder="Name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              required
              type="text"
              placeholder="Email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              required
              type="password" 
              placeholder="Password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              required
              type="password" 
              placeholder="Confirm password"
              className="form-control"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button onClick={register} className="btn mt-3 mb-3">
              Register
            </button><br/>
            <a style={{color:"black"}} href="/login">Click here to login</a>
          </div>
        </div>
      </div>
    </div>
  );
}
