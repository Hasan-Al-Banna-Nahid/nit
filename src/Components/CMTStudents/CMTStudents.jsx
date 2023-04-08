import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button'
import './CMTStudents.css'


const Students = () => {
    const data = useLoaderData()
    console.log(data);
    const navigate = useNavigate()
    const goBack = () => {
        navigate(-1)
    }
    return (
        <div>
            <h3 style={{textAlign:"center",color:'#ff3f34',fontWeight:'bolder'}}>Semester</h3>
            <div className='students'>
                <Link to="/Cmt1st">
                        <Button variant="contained" color="primary">
                        1st Semester
                        </Button>
                </Link>
                <Link to="Cmt1st">
                        <Button variant="contained" color="error">
                        2nd Semester
                        </Button>
                </Link>
                <Link to="Cmt1st">
                        <Button variant="contained" color="success">
                        3rd Semester
                        </Button>
                </Link>
                <Link to="Cmt1st">
                        <Button variant="contained" color="secondary">
                        4th Semester
                        </Button>
                </Link>
                <Link to="/Cmt5th">
                        <Button variant="contained" color="info">
                        5th Semester
                        </Button>
                </Link>
                <Link to="Cmt1st">
                        <Button variant="contained" color="error">
                        6th Semester
                        </Button>
                </Link>
                <Link to="Cmt1st">
                        <Button variant="contained" color="success">
                        7th Semester
                        </Button>
                </Link>
                <Link to="Cmt1st">
                        <Button variant="contained" color="secondary">
                        8th Semester
                        </Button>
                </Link>
            </div>
            <div className='btnBack'>
                <Button onClick={goBack} variant="outlined" color="primary">
                    Go Back
                </Button>
            </div>
        </div>
    );
};

export default Students;