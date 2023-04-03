import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Students = () => {
    const data = useLoaderData()
    console.log(data);
    const navigate = useNavigate()
    const goBack = () => {
        navigate(-1)
    }
    return (
        <div>
            <div>
                {/* {
                    data.map(data => {
                        return (
                            <div>
                                <h3>Name : {data.name}</h3>
                                <h4>ID : {data.id}</h4>
                                <p>Data : {data.body}</p>
                            </div>
                        )
                    })
                } */}
            </div>
            <button onClick={goBack}>Go Back</button>
        </div>
    );
};

export default Students;