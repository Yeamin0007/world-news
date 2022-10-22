import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllNewsCard from '../../Shared/AllNewsCard/AllNewsCard';

const Catagory = () => {

    const categoryNews = useLoaderData();
    return (
        <div>
            <h2>this category has: {categoryNews.length}</h2>
            {
                categoryNews.map( news=> <AllNewsCard
                    key={news._id}
                    news={news}
                ></AllNewsCard>)
            }
        </div>
    );
};

export default Catagory;