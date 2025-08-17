import React, { useEffect } from 'react'
import Navbar from "./Navbar"
import { useNavigate, Outlet } from 'react-router-dom'
import Footer from './Footer'
import axios from 'axios'
import { Base_Url } from '../utils/constant'
import { useDispatch , useSelector } from 'react-redux'
import { addUser } from '../utils/userSlice';


const Body = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userData = useSelector((store) => store.user)

  // ✅ Keep the user logged in even after refresh (if cookie/session is still valid).
  // ✅ If backend returns 401 → token is invalid/expired → redirect to login page.
  const fetchUser = async () => {
    if (userData._id) return;
    try {
      const res = await axios(Base_Url+"/profile/view",{
        withCredentials:true
      })

      // ✅ Store the logged-in user details in Redux
      dispatch(addUser(res.data))
    } catch (err) {
      if(err.status === 401){
        // ✅ Unauthorized → token invalid or user not logged in → force redirect to login
        navigate("/login")
      }
      console.error(err)
    }
  }

  useEffect(()=>{
    fetchUser()
  },[])

  return (
    <div>
      <Navbar />
      {/* ✅ Renders the matching child route inside Body */}
      <Outlet />
      <Footer />
    </div>
  )
}

export default Body
