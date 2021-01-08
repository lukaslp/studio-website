import React from 'react'
import HeroSection from '../../HeroSection'
import TeamSection from '../../TeamSection'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour, homeObjFive } from './Data';
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
        <TeamSection {...homeObjFive} />
        </>
    )
}

export default Home
