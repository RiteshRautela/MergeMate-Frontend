import React, { useEffect } from 'react'
import { Base_Url } from "../utils/constant"
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux'
import { addConnections } from '../utils/connectionSlice'
const Connection = () => {
  const connections = useSelector((store) => store.connections)
  const dispatch = useDispatch()
  const fetchConnection = async () => {
    try {
      const res = await axios.get(Base_Url + "/user/connections", { withCredentials: true })
      console.log(res.data.data)
      dispatch(addConnections(res.data.data))
    } catch (err) {
      console.log(err.message)
    }
  }

  useEffect(() => {
    fetchConnection()
  }, [])
  // if no connection is not there , dont do anything just return
  if (!connections) {
   return(
    <div className="flex justify-center items-center h-screen gap-4">
    <span className="loading loading-infinity loading-xs"></span>
    <span className="loading loading-infinity loading-sm"></span>
    <span className="loading loading-infinity loading-md"></span>
    <span className="loading loading-infinity loading-lg"></span>
    <span className="loading loading-infinity loading-xl"></span>
  </div>
   )
  }
  // if the connection length is zero then no connection found
  if (connections.length === 0) return <h1 className='text-bold text-2xl'>No Connections Found</h1>

  return (
    <div className='text-center justify-center my-10 text-center'>
      <h1 className='text-bold text-3xl text-white'>connections</h1>
      {
        connections.map((connection) => {
          const { firstName, lastName, photoUrl, about, gender, age, skills } = connection
          return (
            <div className='m-4 p-4 b rounded-lg bg-base-300 flex w-1/2 mx-auto' key={connection.id}>
              <div className=''>
                <img className='w-20 h-20 rounded-full ' src={photoUrl} alt="photo" />
              </div>
              <div className='text-left mx-7 '>
                <h2 className='font-bold text-xl'>{firstName + " " + lastName}</h2>
                {age && gender && <p>{age + "  , " + gender}</p>}
                <div className="flex flex-wrap gap-2 mt-2">
                  {skills.map((skill, index) => (
                    <div key={index} className="badge badge-primary">
                      {skill}
                    </div>
                  ))}
                </div>
                <p>{about}</p>
              </div>
            </div>
          )

        })
      }


    </div>
  )
}

export default Connection

