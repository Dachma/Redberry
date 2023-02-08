import React from 'react';
import { Link } from "react-router-dom";

class LandingPage extends React.Component {
    render() {
        return (
            <div className="landing-page">
                <div className='redberry-logo'/>
                <div className='line'/>
                <div className='logo'/>
                <Link to='/info'>
                    <button className='add-button'>
                        <div className='add-resume-txt'>
                            რეზიუმეს დამატება
                        </div>
                    </button>
                </Link>
            </div>
        );
    }
}
 
export default LandingPage;