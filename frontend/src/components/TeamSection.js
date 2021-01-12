import React from 'react';
import './TeamSection.css';

function TeamSection({
    objNumber, lightBg, topLine, lightText, lightTextDesc, headline, 
    description, buttonLabel, img, alt, imgStart, headline2, description2, img2, alt2,
    headline3, description3, img3, alt3,headline4, description4, img4, alt4
}) {
    return (
        <>
            <div 
                className={lightBg ? 'home__team-section' : 'home__team-section darkBg'}>
                <div className='container'>
                    <div style={{marginBottom:'40px', textAlign:'center', fontSize:'40px'}}
                        className='team-header'> Equipe </div>
                    <ul className="row home__team-row"
                    style={{display:'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}}
                    >
                        <div className="col-team-section">
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
                        <div className="col-team-section">
                            <div className="home__team-obj-wrapper">
                                <div className='home__team-img-wrapper'>
                                    <img src={img4} alt={alt4} className="home__team-img"/>
                                </div>
                                <div className="top-line">{topLine}</div>
                                <h1 className={lightText ? 'heading' : 'heading dark'}>{headline4}</h1>
                                <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>
                                    {description4}
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