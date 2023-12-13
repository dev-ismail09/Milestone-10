import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../../NewsCard/NewsCard';

const Catagory = () => {
    const catagoryNews = useLoaderData()
    return (
        <div>
            {/* {
                catagoryNews.map(news => <NewsCard 
                key={news._id} news={news}>
                </NewsCard>)
            } */}
        </div>
    );
};

export default Catagory;