import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Base_Url } from "../utils/constant"
import axios from "axios"
import { removeUser } from "../utils/userSlice"

function Navbar() {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    // read data from the store(Subscribe to store )
    const user = useSelector((store) => store.user);
    // console.log(user);

    const handleLogOut = async () => {
        try {
            await axios.post(Base_Url + "/logout", {}, { withCredentials: true }) // this api call expires the cookie
            // after clearing up the cookie clear data from the redux store and then user will navigated to login
            dispatch(removeUser())
            navigate("/login")
            // setTimeout(() => navigate("/login"), 0); // ensures redirect always fires

        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div className="navbar l bg-base-200 shadow-sm">
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost text-xl">MergeMate</Link>
            </div>
            <div className="flex gap-2">
                {/* Only show avatar if user is logged in */}
                {user && user._id && (
                    <div className="dropdown dropdown-end mx-4">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="user photo"
                                    src={user.photoUrl}
                                />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                        >
                            <li>
                                <Link to="/profile" className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </Link>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a onClick={handleLogOut}>logout</a></li>

                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar;
