import React, { useState } from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div className='header'>
           
            <div className='logo'>
                <img className='logo' src="../../../public/images/NIT-removebg-preview.png" alt="" />
            </div>
      
            <div className = 'navbar'>
                <nav className='nav-item' id='nav-item'>
                    <Link to="/department">Departments</Link>
                    <Link to="./">Admissions</Link>
                    <Link to="/academic-info">Academic Info</Link>
                    <Link to="./">Gallery</Link>
                    <Link to="./">About Us</Link>
                    <Link to="/career">Career</Link>
                    <Link to="/analytics">Analytics</Link>
                </nav>
                
                
                
            </div>

            
        </div>
    );
};

export default Home;