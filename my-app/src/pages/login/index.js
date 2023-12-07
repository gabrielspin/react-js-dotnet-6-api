import React from 'react';
import './styles.css';

import logoImage from '../../assets/logo.svg';
import padlock from '../../assets/padlock.png';

export default function Login(){
    return (
        <div className="login-container">
            <section className="form">
                <img src={logoImage} alt="Login"/>
            </section>
            <img src={padlock} alt="Login"/>
        </div>
    );
}