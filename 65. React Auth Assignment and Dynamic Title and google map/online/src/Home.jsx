import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const allNews = useLoaderData()
    console.log(allNews)
    return (
        <div>
            <h1>Home</h1>
        </div>
    );
};

export default Home;