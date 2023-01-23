import React from 'react';
import Footer from '../Footer/Footer';
import Contribute from './Contribute/Contribute';
import DonationInfo from './DonationInfo/DonationInfo';
import Feature from './Feature/Feature';
import Header from './Header';
import HeroSection from './Hero/HeroSection';

const Home = () => {
    return (
        <section>
            <Header></Header>
            <HeroSection></HeroSection>
            <Contribute></Contribute>
            <DonationInfo></DonationInfo>
            <Feature></Feature>
            <Footer></Footer>
        </section>
    );
};

export default Home;