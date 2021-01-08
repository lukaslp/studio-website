import React from 'react';
import './TeamSection.css';

function TeamSection({
    objNumber, lightBg, topLine, lightText, lightTextDesc, headline, 
    description, buttonLabel, img, alt, imgStart, headline2, description2, img2, alt2
}) {
    return (
        <>
            <div 
                className={lightBg ? 'home__team-section' : 'home__team-section darkBg'}>
                <div className='container'>
                    <ul className="row home__team-row"
                    style={{display:'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}}
                    >
                        <div className="col">
                            <div className="home__team-obj-wrapper">
                                <div className='home__team-img-wrapper'>
                                    <img src={img} alt={alt} className="home__team-img"/>
                                </div>
                                <div className="top-line">{topLine}</div>
                                <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                                <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>
                                    {description}
                                </p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="home__team-obj-wrapper">
                                <div className='home__team-img-wrapper'>
                                    <img src={img2} alt={alt2} className="home__team-img"/>
                                </div>
                                <div className="top-line">{topLine}</div>
                                <h1 className={lightText ? 'heading' : 'heading dark'}>{headline2}</h1>
                                <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>
                                    {description2}
                                </p>
                            </div>
                        </div>
                    </ul>
                </div>
            </div> 
        </>
    );
}

export default TeamSection