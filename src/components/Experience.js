import React from 'react';
import { Link } from 'react-router-dom';
import goBack from '../images/go-back-vector.png';

class Experience extends React.Component {
    state = {
        ss: null
    }
    render() { 
        return (
            <div className='experience-page'>
                <div className='experience-left'>
                    <Link to="/">
                        <button onClick={this.props.clearStorage} className="go-back"><img src={goBack} alt="back page"/></button>
                    </Link>
                    <div className='experience-txt'>გამოცდილება</div>
                    <div className='info-hr'/>
                    <div className='part'>2/3</div>
                    <div className='position-input'>
                        <label className='position-label'>თანამდებობა</label>
                        <input className="input-position" type="text" placeholder='დეველოპერი, დიზაინერი, ა.შ.'/>
                        <div className='position-input-hint'>მინიმუმ 2 სიმბოლო</div>
                    </div>
                    <div className='employer'>
                        <label className='employer-label'>დამსაქმებელი</label>
                        <input className="employer-input" type="text" placeholder='დამსაქმებელი'/>
                        <div className='employer-hint'>მინიმუმ 2 სიმბოლო</div>
                    </div>
                    <div className='start-date'>
                        <label htmlFor='start' className='start-date-label'>დაწყების რიცხვი</label>
                        <input className='start-date-input' type="date" id="start"/>
                    </div>
                    <div className='end-date'>
                        <label htmlFor='end' className='end-date-label'>დაწყების რიცხვი</label>
                        <input className='end-date-input' type="date" id="end"/>
                    </div>
                    <div className='description'>
                        <label className='description-label'>აღწერა</label>
                        <textarea className='description-input' placeholder='როლი თანამდებობაზე და ზოგადი აღწერა'/>
                    </div>
                    <div className='experience-end-hr'/>
                    <button className='add-experience'>
                        <div className='add-experience-txt'>მეტი გამოცდილების დამატება</div>
                    </button>
                    <button className='previous-page'>
                        <div className='previous-page-txt'>უკან</div>
                    </button>
                    <button className='next-page'>
                        <div className='next-page-txt'>შემდეგი</div>
                    </button>
                </div>
                <div className='experience-right'>
                    {/* resume here */}
                </div>
            </div>
        );
    }
}
 
export default Experience;