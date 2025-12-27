import React from 'react';
import Banner from '../../components/Banner/Banner';
import Main from '../../components/Main/Main';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData();
    
    return (
        <div>
            <Banner></Banner>
            <Main data={data}></Main>
        </div>
    );
};

export default Home;