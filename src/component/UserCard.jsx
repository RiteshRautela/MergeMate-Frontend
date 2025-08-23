import axios from 'axios';
import React from 'react';
import { Base_Url } from "../utils/constant"
import { useDispatch } from 'react-redux';
import { removUserFromFeed } from '../utils/feedSlice';

const UserCard = ({ user }) => {
    const dispatch = useDispatch()
    // Destructuring skills from the user object
    const { _id,firstName, lastName, photoUrl, about, gender, age, skills=[] } = user;

    const handleSendRequest = async(status , userId) =>{
        try {
            const res = await axios.post(Base_Url+"/request/send/"+status+"/" +  userId ,{} , {withCredentials:true} )
            dispatch(removUserFromFeed(userId))

        } catch (err) {
            console.log(err.message)
        }
    }

    return (
        <div className="card bg-base-300 w-96 shadow-sm flex flex-wrap my-4">
            <figure>
                <img
                    src={photoUrl}
                    alt="default img" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{firstName + " " + lastName}</h2>
                {age && gender && <p>{age +   " || "  + gender}</p>}

                {/* Corrected "classname" to "className" */}
                <p className="text-red-400 my-2">{about}</p>

                {/* --- START: Added Skills Section --- */}
                {/* This section only renders if the skills array exists and is not empty */}
                {skills && skills.length > 0 && (
                    <div className="my-4">
                        <h3 className="text-lg font-semibold mb-2">Skills</h3>
                        <div className="flex flex-wrap gap-2">
                            {/* Map over the skills and display each one as a badge */}
                            {skills.map((skill, index) => (
                                <div key={index} className="badge badge-secondary">
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                {/* --- END: Added Skills Section --- */}

                <div className="card-actions justify-center my-9">
                    <button className="btn  btn-secondary mx-2" onClick={()=>handleSendRequest("ignored" , _id)}>Ignore</button>
                    <button className="btn btn-accent mx-2" onClick={()=>handleSendRequest("interested" , _id)}>Interested</button>
                </div>
            </div>
        </div>
    );
};

export default UserCard;