import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button'
import './FifthSemester.css'

const FifthSemester = () => {
    const data = useLoaderData();
    const navigate = useNavigate();
    const handlePrevious = () =>{
        navigate(-1);
    }
    return (
        <div>
           <div className='style'>
                {
                    data.map(data=>{
                        return(
                            <div>
                                <h3>Name:{data.Name}</h3>
                                <Button variant="contained" color="success">
                                  Details
                                </Button>
                            </div>
                        )
                    })
                }
           </div>
           <div style={{width:'150px',margin:'30px auto'}}>
                <Button onClick={handlePrevious} variant="outlined" color="error">
                  Go Back
                </Button>
           </div>
        </div>
    );
};

export default FifthSemester;