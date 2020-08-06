import React, {useState, useEffect} from 'react'
import logoImg from '../../assets/images/logo.svg';
import {Link} from 'react-router-dom';
import api from '../../services/api';

import landingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeart from '../../assets/images/icons/purple-heart.svg';

import './styles.css';

function Landing(){

    const [totalConnections, setTotalConnections] =useState(0);

    useEffect(()=>{
        api.get('connections').then(res => {
            console.log(res);
            const {total} = res.data;
            setTotalConnections(total);
        })
    }, []);
    return(
        <div className="" id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="proffy logo" />
                    <h2>Sua plataforma de estudos online.</h2>
                </div>
                <img src={landingImg} 
                     alt="hero-image" 
                     className="hero-image"
                />

                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="Estudar"/>
                        Estudar
                    </Link>

                    <Link to="/give-classes" className="give-classes">
                        <img src={giveClassesIcon} alt="Ensinar"/>
                        Ensinar
                    </Link>
                </div>

                <span className="total-connections">
                    Total de {totalConnections} conexões já relaizadas <img src={purpleHeart} alt="coração-conexões"/>
                </span>
            </div>
        </div>
    )
}
export default Landing