import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from "react-router-dom";
import { Base_Url } from '../utils/constant';

function Login() {
  // Corrected typo from setEmialId to setEmailId
  const [email, setEmailId] = useState("chum@gmail.com");
  const [password, setPassword] = useState("chumT@123_321");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");
  const [isLogInForm, setIsLogInForm] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(Base_Url + "/login", {
        emailId: email,
        password: password
      }, {
        withCredentials: true
      });
      dispatch(addUser(res.data));
      navigate("/feed");
    } catch (err) {
      setError(err.response?.data || "something went wrong");
      console.error("Login failed:", err.response?.data);
    }
  };

  const handleSignUp = async () => {
    try {
      const res = await axios.post(Base_Url + "/signup", {

        firstName: firstName,
        lastName: lastName,
        emailId: email,
        password: password
      }, {
        withCredentials: true
      });
      dispatch(addUser(res.data));
      navigate("/profile");
    } catch (err) {
      setError(err.response?.data || "something went wrong");
      console.error("Login failed:", err.response?.data);
    }
  };



  return (
    <div className='flex justify-center my-10'>
      <div className="card bg-base-300 w-96 shadow-sm rounded-lg">
        <div className="card-body">
          <h2 className="card-title justify-center">{isLogInForm ? "Login" : "SignUp"}</h2>
          <div className="space-y-4 mt-4">


            {!isLogInForm && <> <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                className="grow"
                placeholder="Enter First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </label>

              <label className="input input-bordered flex items-center gap-2">
                <input
                  type="text"
                  className="grow"
                  placeholder="Enter Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </label>
            </>
            }


            {/* ## FIX: Corrected structure for Email input */}
            <label className="input input-bordered flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
              <input
                type="email"
                className="grow"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmailId(e.target.value)}
                required
              />
            </label>

            {/* ## FIX: Corrected structure for Password input */}
            <label className="input input-bordered flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
              <input
                type="password"
                className="grow"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
          </div>

          <p className='text-red-600 h-4 text-sm'>{error}</p>

          <div className="card-actions justify-center required my-5">
            <button className="btn btn-primary w-full" onClick={isLogInForm ? handleLogin : handleSignUp}>{isLogInForm ? "Login" : "SignUp"}</button>
          </div>
          <p className='cursor-pointer m-auto py-2' onClick={() => setIsLogInForm((value) => !value)}>{isLogInForm ? "New User ? SignUp Here" : "Existing User ? Login Here"}</p>
        </div>
      </div>
    </div>
  );
}

export default Login;