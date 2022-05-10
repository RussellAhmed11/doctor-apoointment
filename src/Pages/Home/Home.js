import React from 'react';
import Banner from './Banner';
import Footer from './Footer';
import Info from './Info';
import MakeApooinment from './MakeApooinment';
import Services from './Services';
import Testomonia from './Testomonia';

const Home = () => {
    return (
        <div className='px-12'>
           <Banner></Banner>
           <Info></Info>
           <Services></Services>
           <MakeApooinment></MakeApooinment>
           <Testomonia></Testomonia>
           <Footer></Footer>
        </div>
    );
};

export default Home;