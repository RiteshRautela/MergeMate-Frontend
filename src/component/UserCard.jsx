import React from 'react';

const UserCard = ({ user }) => {
    // Destructuring skills from the user object
    const { firstName, lastName, photoUrl, about, gender, age, skills=[] } = user;

    return (
        <div className="card bg-base-300 w-96 shadow-sm flex flex-wrap my-4">
            <figure>
                <img
                    src={photoUrl}
                    alt="default img" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{firstName + " " + lastName}</h2>
                {age && gender && <p>{age + ", " + gender}</p>}

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
                    <button className="btn btn-primary ">Ignore</button>
                    <button className="btn btn-primary">Interested</button>
                </div>
            </div>
        </div>
    );
};

export default UserCard;