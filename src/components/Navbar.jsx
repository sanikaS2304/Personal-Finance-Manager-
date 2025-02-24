import React from 'react';
import { FaHome, FaUser, FaChartBar, FaSignOutAlt } from "react-icons/fa";
import './navbar.css';

function Navbar(){
    return (
        <div className='d-flex flex-column align-items-start bg-light text-dark vh-100 p-3 position-fixed'>
    <div className="d-flex flex-column align-items-center">
        <a href="/home" className='nav-icon'>
            <FaHome size={30} />
        </a>
        <a href="/analysis" className='nav-icon'>
            <FaChartBar size={30} />
        </a>
        <a href="/user" className='nav-icon'>
            <FaUser size={30} />
        </a>
    </div>

    <div className='d-flex flex-column align-items-center mt-auto'>
        <button className='btn btn-danger nav-icon'>
            <FaSignOutAlt size={20} />
        </button>
    </div>
</div>

    );
}

export default Navbar;