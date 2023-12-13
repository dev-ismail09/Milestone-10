import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [catagories, setCatagories] = useState([]);

    useEffect(()=>{
        fetch(`https://recap-the-news-dragon-server-obe2hmawi-dev-ismail09s-projects.vercel.app/categories`)
        .then(res => res.json())
        .then(data => setCatagories(data))
        .catch(error =>{
            console.error(error)
        })
    }, [])
    return (
        <div>
            <h4 className='mb-4'>All Caterogy</h4>
            {
                catagories.map(catagory => <p key={catagory.id}>
                    <Link className='fs-6 text-black text-decoration-none' to={`catagory/${catagory.id}`}>{catagory.name}</Link>
                    </p> )
            }
        </div>
    );
};

export default LeftNav;