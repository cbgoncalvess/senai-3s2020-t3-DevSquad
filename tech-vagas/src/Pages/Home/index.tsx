import React from 'react';

import AccessBar from '../../Components/AccessBar';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

import './style.css';

export default function Home() {
    return(
        <body>
            <AccessBar />
            <Header />
            <div className="bodyPart">
                <h1>Entre Header e Footer</h1>
            </div>
            <Footer />
        </body>
        
    );
}