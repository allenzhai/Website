import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Resume from './pages/resume'
import Header from './components/header'
import AboutMe from './components/aboutMe';
import Card from './components/cards';
import Foot from './components/foot';

import  './App.css';

function App() {
    return (
        <Router>
            <Route exact path='/' render={(props) => (
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
            )}/>
            <Route path='/resume' component={Resume} />
        </Router>
    );
}

export default App;
