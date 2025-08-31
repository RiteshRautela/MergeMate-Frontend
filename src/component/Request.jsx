import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { Base_Url } from '../utils/constant'
import { addRequest } from '../utils/requestSlice'
import { useEffect } from 'react'
import { removeRequest } from '../utils/requestSlice'



const Request = () => {
    const dispatch = useDispatch();
    const requests = useSelector((store) => store.requests)
   
 

    const reviewRequest = async(status, _id) =>{
        try {
        const res = await axios.post(Base_Url+"/request/review/"+status+"/"+_id ,{} ,{withCredentials:true})
        dispatch(removeRequest(_id))
        } catch (err) {
            
        }
    }
    const fetchRequest = async () => {
        try {
            const res = await axios.get(Base_Url + "/user/requests/received", { withCredentials: true })
            dispatch(addRequest(res.data.data))
        } catch (err) {
            console.error(err.response.data)
        }
    }
    useEffect(() => {
        fetchRequest()
    }, [])

    if (!requests) {
        return (
            <div className="flex justify-center items-center h-screen gap-4">
                <span className="loading loading-infinity loading-xs"></span>
                <span className="loading loading-infinity loading-sm"></span>
                <span className="loading loading-infinity loading-md"></span>
                <span className="loading loading-infinity loading-lg"></span>
                <span className="loading loading-infinity loading-xl"></span>
            </div>
        )
    }

    if (requests.length === 0) return <h1 className='text-bold text-2xl flex justify-center my-10'>No Requests Found</h1>


    return (
        <div className='text-center justify-center my-10 text-center'>
            <h1 className='text-bold text-3xl text-white'>Connection Requests</h1>
            {
                requests.map((request) => {
                    const { firstName, lastName, photoUrl, about, gender, age, skills } = request.fromUserId
                    return (
                        <div className='m-4 p-4 b rounded-lg bg-base-300 flex justify-between items-center  w-2/3 mx-auto' key={request.id}>
                            <div className=''>
                                <img className='w-20 h-20 rounded-full ' src={photoUrl} alt="photo" />
                            </div>
                            <div className='text-left mx-7 '>
                                <h2 className='font-bold text-xl'>{firstName + " " + lastName}</h2>
                                {age && gender && <p>{age + "  , " + gender}</p>}
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {skills?.map((skill, index) => (
                                        <div key={index} className="badge badge-primary">
                                            {skill}
                                        </div>
                                    ))}
                                </div>
                                <p>{about}</p>
                            </div>
                            <div >
                                <button className="btn btn-secondary mx-2" onClick={()=>reviewRequest("rejected" , request._id)}>Reject</button>
                                <button className="btn btn-accent mx-2" onClick={()=>reviewRequest("accepted",request._id)}>Accept</button>
                            </div>
                        </div>
                    )

                })
            }


        </div>
    )
}

export default Request
