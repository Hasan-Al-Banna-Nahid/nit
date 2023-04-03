import { key } from 'localforage';
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Students from '../Students/Students';
import './AcademicInfo.css'
const AcademicInfo = () => {
    const data = useLoaderData();
    const { id } = data;
    return (
        <div>
            <div>
                <div className='students-data'>
                    {
                        data.map(data=> {
                            return(
                                <div className='singleStudent'>
                                    <h3>Name : {data.name}</h3>
                                    <Link to={`/students/${id}`}><button>Show Details</button></Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </div>
           

        
    );
};

export default AcademicInfo;