import React, { useContext, useState } from 'react'
import logo from "../../assets/logo.png";
import { navBarLink } from '../../Data';
import DataContext from '../../context/DataContext';
import "./navbar.css";
import { NavLink } from 'react-router-dom';



function Navbar() {
    const { toggle, setToggle } = useContext(DataContext);
    // const [toggle, setToggle] = useState(false);
    return (

        <nav className={`navbar__side ${toggle ? "active" : ""}`}>
            <div className='nav__header d-flex align-items-center gap-2'>
                <img src={logo} alt=".." className='img' />
                <h2 className='user'>Student</h2>
            </div>
            <div className='nav__link d-flex flex-column gap-3'>
                {
                    navBarLink.map((nav) => {
                        return (
                            <li key={nav.id} onClick={() => (nav.name)}>
                                <NavLink to={nav.link} className={({ isActive }) =>
                                    isActive ? "nav__item nav-active" : "nav__item text-secondary"
                                }>
                                    <span className='nav__icon'>{nav.icon}</span>
                                    <span className='nav__title'>
                                        {nav.name}
                                    </span>
                                </NavLink>
                            </li>
                        )
                    })
                }
            </div>

            <div
                className={` ${toggle ? "active" : ""}`}
                onClick={() => setToggle(!toggle)}>
                <div className={`toggle__menu ${toggle ? "active" : ""}`}></div>
            </div>



        </nav >
    )
}

export default Navbar