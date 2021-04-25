import React from 'react';
import Header from './components/header'
import AboutMe from './components/aboutMe';
import Card from './components/cards';
import Foot from './components/foot';

import  './App.css';

function App() {
    return (
        <React.Fragment>
            <div className = 'all'>
                <Header/>
                <AboutMe />
                <div className="row1">
                    <Card/>
                </div>
                <Foot/>
            </div>
        </React.Fragment>
    );
}

export default App;
