import React from 'react'
import { Base_Url } from "../utils/constant"
import { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import {addFeed}  from "../utils/feedSlice"
import UserCard from './UserCard'
const Feed = () => {

  const dispatch = useDispatch()
  const feed =useSelector((store) => store.feed)

  const getFeed = async() =>{
    if(feed) return
    try {
      const res = await axios.get(Base_Url+"/user/feed" , { withCredentials: true})
      console.log(res)
      dispatch(addFeed(res.data))
    } catch (err) {
      console.error(err.message)
    }
  }
  
  useEffect(()=>{
    getFeed()
  },[])

  return (
    feed && <div className='flex justify-center my-10 flex-wrap gap-6'>
      {/* <UserCard user={feed[0]}/> */}
      {feed.map((user) =>{
        return <UserCard key={user._id } user={user}/>
      })}
    </div>
  )
}

export default Feed
