import React from 'react';
import { Link } from 'react-router-dom';
import goBack from '../images/go-back-vector.png';

class Info extends React.Component {
    render() { 
        const sendData = e => {
            this.props.saveData(e.target.value, e.target.className);
        }

        return (
            <div className='info-page'>
                <div className='info-left'>
                    <Link to="/">
                        <button className="go-back"><img src={goBack} alt="back page"/></button>
                    </Link>
                    <div className='personal-info-txt'>პირადი ინფო</div>
                    <div className='info-hr'/>
                    <div className='part'>1/3</div>
                    <div className='input-name'>
                        <label className="input-name-label">სახელი</label>
                        <input value={this.props.name} onChange={e => sendData(e)} className='input-name-input' type='text' placeholder='ანზორ'/>
                        <div className="input-name-hint">მინიმუმ 2 ასო, ქართული ასოები</div>
                    </div>
                    <div className='input-lastname'>
                        <label className="input-lastname-label">გვარი</label>
                        <input value={this.props.lastName} onChange={e => sendData(e)} className='input-lastname-input' type='text' placeholder='მუმლაძე'/>
                        <div className="input-lastname-hint">მინიმუმ 2 ასო, ქართული ასოები</div>
                    </div>
                    <div>
                        <div className='upload-photo-txt'>პირადი ფოტოს ატვირთვა</div>
                        <button className='upload-image'>
                            <input id="upload-image" className='upload-image-btn' type="file"></input>
                            <label htmlFor="upload-image" className='upload-image-label'>ატვირთვა</label>
                        </button>
                    </div>
                    <div className='about-me'>
                        <label className='about-me-label'>ჩემ შესახებ (არასავალდებულო)</label>
                        <input className='about-me-input' placeholder='ზოგადი ინფო ჩემ შესახებ'/>
                    </div>
                    <div className='email'>
                        <label className='email-label'>ელ.ფოსტა</label>
                        <input value={this.props.email} onChange={e => sendData(e)} className="email-input" type="text" placeholder='anzorr666@redberry.ge'/>
                        <div className='email-input-hint'>უნდა მთავრდებოდეს @redberry.ge-ით</div>
                    </div>
                    <div className='mobile'>
                        <label className='mobile-label'>მობილურის ნომერი</label>
                        <input value={this.props.mobile} onChange={e => sendData(e)} className="mobile-input" type="text" placeholder='+995 551 12 34 56'/>
                        <div className='mobile-input-hint'>უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს</div>
                    </div>
                    
                </div>
                <div className='info-right'>

                </div>
            </div>
        );
    }
}
 
export default Info;