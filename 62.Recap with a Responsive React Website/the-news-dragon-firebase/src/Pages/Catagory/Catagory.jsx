import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Catagory = () => {
    const catagoryNews = useLoaderData();
    
    return (
        <div>
            <h2>{catagoryNews.length}</h2>
        </div>
    );
};

export default Catagory;