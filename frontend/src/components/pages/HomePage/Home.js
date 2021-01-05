import React from 'react'
import HeroSection from '../../HeroSection'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import Pricing, { Pricing3 }  from '../../Pricing';

function Home() {
    return (
        <>
        <HeroSection {...homeObjOne} />
        <HeroSection {...homeObjTwo} />
        <Pricing />
        <HeroSection {...homeObjThree} />
        <HeroSection {...homeObjFour} />
        <Pricing3 />
        </>
    )
}

export default Home
