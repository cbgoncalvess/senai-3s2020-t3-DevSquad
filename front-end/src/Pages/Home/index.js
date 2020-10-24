import React from 'react';

import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import AccessMenu from '../../Components/AccessMenu';
import AccessBar from '../../Components/AccessBar';

import './style.css';

export default function Home() {
    return(
        <body>
            <AccessBar />
            <Header />
            <div className="bodyPart">
                <h1>Entre Header e Footer</h1>
            </div>
            <AccessMenu />
            <Footer />
        </body>
        
    );
}