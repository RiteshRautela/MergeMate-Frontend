import React, { useEffect, useState } from 'react'
import Navbar from "./Navbar"
import { useLocation, useNavigate, Outlet } from 'react-router-dom'
import Footer from './Footer'
import axios from 'axios'
import { Base_Url } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../utils/userSlice'

const publicRoutes = ["/login", "/privacy-policy", "/refund-policy", "/contact"]

const Body = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const userData = useSelector((store) => store.user)
  const [isCheckingAuth, setIsCheckingAuth] = useState(true)

  const isPublicRoute = publicRoutes.includes(location.pathname)
  const isLoggedIn = !!userData?._id

  const fetchUser = async () => {
    if (userData?._id) {
      setIsCheckingAuth(false)
      if (location.pathname === "/login") {
        navigate("/feed")
      }
      return
    }

    try {
      const res = await axios(Base_Url + "/profile/view", {
        withCredentials: true
      })

      dispatch(addUser(res.data))

      if (location.pathname === "/login") {
        navigate("/feed")
      }
    } catch (err) {
      if (err.response?.status === 401 && !isPublicRoute) {
        navigate("/login")
      }
      console.error(err)
    } finally {
      setIsCheckingAuth(false)
    }
  }

  useEffect(() => {
    setIsCheckingAuth(true)
    fetchUser()
  }, [location.pathname])

  if (isCheckingAuth && !isPublicRoute) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    )
  }

  const showLayoutChrome = isLoggedIn || location.pathname !== "/login"

  return (
    <div>
      {showLayoutChrome && <Navbar />}
      <Outlet />
      {showLayoutChrome && <Footer />}
    </div>
  )
}

export default Body
