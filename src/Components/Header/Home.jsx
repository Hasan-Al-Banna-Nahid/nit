import React, { useState } from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className='header'>
            <div className='logo'>
                <img className='logo' src="../../../public/images/NIT-removebg-preview.png" alt="" />
            </div>
      
            <div className={`md:flex absolute duration-500 ${isOpen ? 'top-6' : '-top-48'} navbar`}>
                <nav className='nav-item' id='nav-item'>
                    <a href="">Departments</a>
                    <a href="">Admissions</a>
                    <a href="">Academic Info</a>
                    <a href="">Gallery</a>
                    <a href="">About Us</a>
                    <a href="">Career</a>
                </nav>
                <div onClick={() => setIsOpen(!isOpen)} id='bar-icon'>
                    <span>
                        {isOpen === true ?
                            <FontAwesomeIcon className='closebtn' icon={faClose} /> :
                            <FontAwesomeIcon className='barbtn' icon={faBars} />}
                    </span>

                </div>
                

            </div>

        </div>
    );
};

export default Home;