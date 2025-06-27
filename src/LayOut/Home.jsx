import React, { Suspense } from 'react';
import Banner from '../Components/Banner';
import Slider from '../Components/Slider';
import { useLoaderData } from 'react-router';
import FeaturedGroups from '../Components/FeaturedGroups';
import ExtraPage from '../Components/ExtraPage';


const Home = () => {
    const initfeatureds = useLoaderData()
    
    return (
        <>
        <Slider></Slider>
        <Banner></Banner>
        <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>

        <FeaturedGroups initfeatureds={initfeatureds}></FeaturedGroups>
        </Suspense>
        <ExtraPage></ExtraPage>

        </>
    );
};

export default Home;