import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import React from 'react';
const data = [
    {
        Department : 'CMT',
        students : 956,

    },
    {
        Department :'Civil',
        students : 1000,
    },
    {
        Department :'EEE',
        students : 500,
    },
    {
        Department :'Textile',
        students : 300,
    },
    
]
const Chart = () => {
    return (
        <div style={{margin:'0 auto'}}>
            <LineChart width={500} height={300} data={data}>
            <Line type="monotone"  dataKey="Department" stroke="#6c5ce7" />
            <Line dataKey="students"  stroke="#00b894" />
            <XAxis dataKey="Department"  stroke="#EA2027"/>
            <YAxis   stroke="#f53b57"/>
            <Tooltip />
            </LineChart>
        </div>
    );
};

export default Chart;