import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';

class App extends React.Component {
    render() { 
        return (
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' exact element={<LandingPage/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        );
    }
}
 
export default App;