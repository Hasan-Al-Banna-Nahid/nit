import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from '@mui/material/Button';
import './AcademicInfo.css'

const AcademicInfo = () => {
    return (
        <div>
            <h4
                style=
                {{
                    textAlign: 'center',
                    color: "#130f40",
                    fontSize: '36px',
                    fontWeight: 'bolder',
                    margin: '20px,0',
                    textDecoration: 'underline'
                }}>
                Departments
            </h4>
            <div>
                <div className='departments-data'>

                    <Link to="/CMTStudents">
                        <Button className='commonFontWeight' variant="contained" color="secondary">
                            Computer
                        </Button>
                    </Link>
                    <Link to="">
                        <Button className='commonFontWeight' variant="contained" color="inherit">
                            Civil
                        </Button>
                    </Link>
                    <Link to="">
                        <Button className='commonFontWeight' variant="contained" color="error">
                            Electronics
                        </Button>
                    </Link>
                    <Link to="">
                        <Button className='commonFontWeight' variant="contained" color="success">
                            Textile
                        </Button>
                    </Link>
                    <Link to="">
                        <Button className='commonFontWeight' variant="contained" color="warning">
                            Electric
                        </Button>
                    </Link>
                    <Link to="">
                        <Button className='commonFontWeight' variant="contained" color="info">
                            AutoMobiles
                        </Button>
                    </Link>

                </div>
            </div>

        </div>



    );
};

export default AcademicInfo;