import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllNewsCard from '../../Shared/AllNewsCard/AllNewsCard';
import News from '../News/News';

const Home = () => {

    const allNews = useLoaderData();

    return (
        <div>
            <h2>World news home: {allNews.length}</h2>
            {
                allNews.map( news => <AllNewsCard
                key={news._id}
                news={news}
                ></AllNewsCard>)
            }
        </div>
    );
};

export default Home;