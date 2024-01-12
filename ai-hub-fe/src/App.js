import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Chat from './Chat';
import Settings from './Settings';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Chat/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;