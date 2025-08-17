import axios from 'axios'
import React, { useState } from 'react'
import {useDispatch} from 'react-redux';
import { addUser } from '../utils/userSlice';
import {useNavigate} from "react-router-dom"
import { Base_Url } from '../utils/constant';


function Login() {
  const [email, setEmialId] = useState("chum@gmail.com")
  const [password, setPassword] = useState("chumT@123_321")
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // handle login click
  const handleLogin = async () =>{
    
    // to make an api call using AXIOS
    try {
      const res = await axios.post(Base_Url+"/login" , {
        emailId:email,
        password:password
      },{
        withCredentials: true // ✅ This tells Axios to include cookies
      })
      // write data to store
      dispatch(addUser(res.data))
      // once user loggged in navigate the user to feed url("/feed") it must be same as we used in  <Route path="/feed" element={<Feed/>} />
       navigate("/feed")

    } catch (err) {
      console.log("Error" + err.message)
    }
  }
  return (
    <div className='flex justify-center my-10 '>
      <div className="card bg-base-300 w-96 shadow-sm rounded-lg  ">
        <div className="card-body">
          <h2 className="card-title  justify-center">Login</h2>
          <div>
            <label className="input my-7">
              <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input 
              type="email" 
              placeholder="yourmail@.com" 
              value={email}
              onChange={(e)=>setEmialId(e.target.value)}
              required
              />
            </label>

            <label className="input validator">
              <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
                  ></path>
                  <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                </g>
              </svg>
              <input
                type="password"
                required
                placeholder="Password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                

              />
            </label>

          </div>
          <div className="card-actions justify-center required my-5">
            <button className="btn btn-primary " onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
