import React from 'react';
import { useState } from 'react';
import UserCard from "./UserCard"
import { Base_Url } from "../utils/constant"
import axios from "axios"
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const EditProfile = ({ user }) => {
  // const {firstName , lastName , age , about ,gender , photoUrl} = user;
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [age, setAge] = useState(user.age);
  const [gender, setGender] = useState(user.gender);
  const [about, setAbout] = useState(user.about);
  // const [skills, setSkills] = useState(user.skills);
  const [skills, setSkills] = useState(user.skills ? user.skills.join(', ') : "");
  const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
  const [error, setError] = useState("");
  const [showTost, setShowTost] = useState(false)
  const dispatch = useDispatch()




  const saveProfile = async () => {
    // clear error
    setError("")
    try {
      const skillsArray = skills.split(',').map(s => s.trim());
      const res = await axios.patch(Base_Url + "/profile/edit", {
        firstName,
        lastName,
        photoUrl,
        about,
        gender,
        age,
        skills: skillsArray
      }, { withCredentials: true })
      dispatch(addUser(res.data?.data))
      setShowTost(true)
      // close the tost after 3 sec 
      setTimeout(() => {
        setShowTost(false)
      }, 3000)

    } catch (err) {
      setError(err?.response?.data)
    }
  }

  return (
    <> <div className='flex justify-center my-10'>
      <div className='flex justify-center mx-10 '>
        <div className="card bg-base-300 w-96 shadow-sm rounded-lg">
          <div className="card-body">
            <h2 className="card-title justify-center">Edit Profile</h2>

            <div className="space-y-4">
              {/* First Name Input */}
              <div className="form-control">
                {/* CHANGE: Added space and margin-bottom (mb-1) */}
                <label className="label mb-1">
                  <span className="label-text">First Name: </span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  className="input input-bordered w-full"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>

              {/* Last Name Input */}
              <div className="form-control">
                {/* CHANGE: Added space and margin-bottom (mb-1) */}
                <label className="label mb-1">
                  <span className="label-text">Last Name: </span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  className="input input-bordered w-full"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>

              {/* Photo URL Input */}
              <div className="form-control">
                {/* CHANGE: Added space, margin, and corrected input type */}
                <label className="label mb-1">
                  <span className="label-text">Photo URL: </span>
                </label>
                <input
                  type="url"
                  placeholder="https://example.com/image.png"
                  className="input input-bordered w-full"
                  value={photoUrl}
                  onChange={(e) => setPhotoUrl(e.target.value)}
                  required
                />
              </div>


              {/* Age Input */}
              <div className="form-control">
                <label className="label mb-1">
                  <span className="label-text">Age: </span>
                </label>
                <input
                  //  CHANGE: Reverted to a standard text input
                  type="text"
                  placeholder="Enter your age"
                  className="input input-bordered w-full"
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                  required
                />
              </div>

              {/* Gender Input */}
              <div className="form-control">
                {/* CHANGE: Added colon, space, margin, and corrected input type */}
                <label className="label mb-1">
                  <span className="label-text">Gender: </span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your gender"
                  className="input input-bordered w-full"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  required
                />
              </div>

              {/* skills */}
              {/* Gender Input */}
              <div className="form-control">
                {/* CHANGE: Added colon, space, margin, and corrected input type */}
                <label className="label mb-1">
                  <span className="label-text"> Skills: </span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your Skills"
                  className="input input-bordered w-full"
                  value={skills}
                  onChange={(e) => setSkills(e.target.value)}
                  required
                />
              </div>

              {/* About Input */}
              <div className="form-control">
                {/* CHANGE: Added colon, space, margin, and used a textarea */}
                <label className="label mb-1">
                  <span className="label-text">About: </span>
                </label>
                <textarea
                  className="textarea textarea-bordered h-24"
                  placeholder="Tell us a little about yourself"
                  value={about}
                  onChange={(e) => setAbout(e.target.value)} // Bug fix: was setPassword
                ></textarea>
              </div>
              <p className='text-red-600'>{error}</p>
            </div>

            <div className="card-actions justify-center required mt-6">
              <button className="btn btn-primary" onClick={saveProfile}>Save Changes</button>
            </div>

          </div>
        </div>
      </div>
      <UserCard user={{ firstName, lastName, photoUrl, about, gender, age, skills: skills.split(',').map(s => s.trim()) }} />
    </div>

      {showTost && <div className="toast toast-top toast-center">

        <div className="alert alert-success">
          <span>Profile Saved successfully.</span>
        </div>
      </div>
      }
    </>

  );
};

export default EditProfile;