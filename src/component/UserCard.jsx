import React from 'react'

const UserCard = ({user}) => {
    const {firstName , lastName , photoUrl ,  about , gender ,age , skills }  = user
     console.log(user)
    return (
        <div className="card bg-base-300 w-96 shadow-sm flex flex-wrap my-4">
            <figure>
                <img
                    src={photoUrl}
                    alt="default img" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{firstName + " " +  lastName}</h2>
              { age&&gender&&<p>{age + ", " + gender}</p>}
                
                <p classname="text-red-400">{about}</p>
                <div className="card-actions justify-center my-9">
                    <button className="btn btn-primary ">Ignore</button>
                    <button className="btn btn-primary">Interested</button>
                </div>
            </div>
        </div>
    )
}

export default UserCard
