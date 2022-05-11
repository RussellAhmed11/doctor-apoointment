import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Footer from '../Shared/Footer';
import Info from './Info';
import MakeApooinment from './MakeApooinment';
import Services from './Services';
import Testomonia from './Testomonia';

const Home = () => {
    return (
        <div className=''>
           <Banner></Banner>
           <Info></Info>
           <Services></Services>
           <MakeApooinment></MakeApooinment>
           <Testomonia></Testomonia>
           <Contact></Contact>
           <Footer></Footer>
        </div>
    );
};

export default Home;