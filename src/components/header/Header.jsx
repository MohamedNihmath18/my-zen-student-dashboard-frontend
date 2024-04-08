import React, { useContext, useEffect } from 'react'
import DataContext from '../../context/DataContext';
import { Link } from 'react-router-dom';
import "./header.css";
import userlogo from '../../assets/userlogo.png'

const Header = () =>{
    const { head,setHead,handleLogout,loggedUser}=useContext(DataContext);
    
    useEffect(() => {
        const header = localStorage.getItem("head");
        if (header) {
            setHead(header);
        } else {
            setHead("Class");
        }
    }, [])
  return (
    <header className="top__header d-flex align-items-center justify-content-between">
    <h1 className="heading ">{head}</h1>
    <div className="user__profile d-flex gap-3">
        <h5 className="mt-3 mr-3 user__name">{loggedUser.firstname} {loggedUser.lastname}</h5>
        <div className="flex-icons">
            <div className="d-flex align-items-center justify-content-center dropdown">
                <span className="dropdown" type="button" data-bs-toggle="dropdown">
                    <div className='user__logo d-flex align-items-center justify-content-center'>
                    {/* {loggedUser.firstname.toUpperCase()[0]}
                    {loggedUser.lastname.toUpperCase()[0]} */}
                    <img src={userlogo} className='user__logo d-flex align-items-center justify-content-center' />
                    </div>
                </span>
                <ul className="dropdown-menu">
                    <li>
                        <Link
                            className="dropdown-item"
                            onClick={() => setHead("Update Profile")}
                            to="/profile">
                            Profile
                        </Link> 
                    </li>
                    <li><a className="dropdown-item"  onClick={handleLogout}>Logout</a></li>
                </ul>
            </div>
        </div>
    </div>
</header>
  )
}

export default Header