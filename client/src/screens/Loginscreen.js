import React, { useState, useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { loginUser } from '../actions/userAction';
import Error from '../components/Error';
import Loading from '../components/Loading';


export default function Loginscreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const loginstate=useSelector(state=>state.loginUserReducer)
    const {loading,error}=loginstate
    const dispatch = useDispatch();

    useEffect(() => {
        if (localStorage.getItem('currentUser')) {
            window.location.href = '/';
        }
    }, []);

    const login = () => {
        const user = {
            email,
            password,
        };
        console.log("Logging in with user:", user);
        dispatch(loginUser(user));
    };

    return (
        <div className="row justify-content-center mt-5">
            <div className="col-md-5 shadow p-3 mb-5 bg-white rounded">
                <h2 style={{ fontSize: '30px' }} className="text-center">
                    Login
                </h2>
                {loading && (<Loading/>)}
                {error && (<Error error="Invalid credentials"/>)}



                <div>
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
                    <button onClick={login} className="btn mt-3 mb-3">
                        Login
                    </button>
                    <br />
                    <a style={{ color: "black" }} href="/register">Click here to register</a>
                </div>
            </div>
        </div>
    );
}
