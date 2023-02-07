import React from 'react';
import { Link } from 'react-router-dom';
import goBack from '../images/go-back-vector.png';
import correct from '../images/correct.png';
import wrong from '../images/wrong.png';

class Info extends React.Component {
    state = {
        nameErr: "",
        lastNameErr: "",
        mailErr: "",
        mobileErr: "",
        photoErr: "",
        clickedSubmit: 0
    }

    uploadImage = () => {
        const inputFile = document.getElementById('upload-image');
        const image = document.getElementById('image');
        inputFile.addEventListener('change', () => {
            const reader = new FileReader();
            reader.addEventListener('load', () => {
                // image.src = reader.result;
                image.style.display = 'block';
                this.props.saveData(reader.result, 'image')
            });
            reader.readAsDataURL(inputFile.files[0]);
        })
    }

    validate = () => {
        let nameErr = false;
        let lastNameErr = false;
        let mailErr = false;
        let mobileErr = false;
        let photoErr = false;
        let inputName = document.querySelector('.input-name-input');
        let inputLastname = document.querySelector('.input-lastname-input');
        let inputMail = document.querySelector('.email-input');
        let inputMobile = document.querySelector('.mobile-input');
    
        // validate name input field
        if(!/^[ა-ჰ]{2,}$/.test(this.props.name)) {
          nameErr = true;
          inputName.style.borderColor = "red";
          this.setState({validated: false})
        } else {
          nameErr = "";
          inputName.style.borderColor = "#98E37E";
        }
        // validate last name input field
        if(!/^[ა-ჰ]{2,}$/.test(this.props.lastName)) {
          lastNameErr = true;
          inputLastname.style.borderColor = "red";
          this.setState({validated: false})
        } else {
          lastNameErr = "";
          inputLastname.style.borderColor = "#98E37E";
        }
        // validate Mail input field
        if(!/^\S+@redberry.ge$/.test(this.props.email)) {
          mailErr = true;
          inputMail.style.borderColor = "red";
          this.setState({validated: false})
        } else {
          mailErr = false;
          inputMail.style.borderColor = "#98E37E";
        }
        //validate mobile input field
        if(!/^\+995\s5\d{2}\s\d{2}\s\d{2}\s\d{2}$/.test(this.props.mobile)) {
          mobileErr = true;
          inputMobile.style.borderColor = "red";
          this.setState({validated: false})
        } else {
          inputMobile.style.borderColor = "#98E37E"  
          mobileErr = false;
        }
        if(!this.props.photo) {
          photoErr = true;
        } else {
          photoErr = false;
        }


        window.scroll({top: 0, left: 0, behavior: 'smooth'})
        
        this.setState({
          nameErr,
          lastNameErr,
          mailErr,
          mobileErr,
          photoErr
        })
    
        if(nameErr === "" && lastNameErr === "" && mailErr === false && mobileErr === false && photoErr === false) {
          return true;
        }
    
        return false;
      }

      handleSubmit = e => {
        const valid = this.validate();
        if(!valid) {
          e.preventDefault();
          this.setState({ clickedSubmit: 1 })
        }
      }


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
                        <label className={this.state.nameErr ? "input-name-label error" : "input-name-label"}>სახელი</label>
                        <input value={this.props.name ? this.props.name : ""} onChange={e => sendData(e)} className='input-name-input' type='text' placeholder='ანზორ'/>
                        <div className="input-name-hint">მინიმუმ 2 ასო, ქართული ასოები</div>
                        {this.state.clickedSubmit ? 
                        this.state.nameErr ? <img alt='result' className='wrong' src={wrong}/> : 
                        <img alt='result' className='correct' src={correct}/> : null}
                    </div>
                    <div className='input-lastname'>
                        <label className={this.state.lastNameErr ? "input-lastname-label error" : "input-lastname-label"}>გვარი</label>
                        <input value={this.props.lastName ? this.props.lastName : ""} onChange={e => sendData(e)} className='input-lastname-input' type='text' placeholder='მუმლაძე'/>
                        <div className="input-lastname-hint">მინიმუმ 2 ასო, ქართული ასოები</div>
                        {this.state.clickedSubmit ? 
                        this.state.lastNameErr ? <img alt='result' className='wrong' src={wrong}/> : 
                        <img alt='result' className='correct' src={correct}/> : null}
                    </div>
                    <div>
                        <div className={this.state.photoErr ? 'upload-photo-txt error' : "upload-photo-txt"}>პირადი ფოტოს ატვირთვა</div>
                        <button onClick={this.uploadImage} className='upload-image'>
                            <input required id="upload-image" className='upload-image-btn' type="file"/>
                            <label htmlFor="upload-image" className='upload-image-label'>ატვირთვა</label>
                        </button>
                    </div>
                    <div className='about-me'>
                        <label className='about-me-label'>ჩემ შესახებ (არასავალდებულო)</label>
                        <textarea value={this.props.aboutMe ? this.props.aboutMe : ""} onChange={e => sendData(e)} className='about-me-input' placeholder='ზოგადი ინფო ჩემ შესახებ'/>
                    </div>
                    <div className='email'>
                        <label className={this.state.mailErr ? 'email-label error' : 'email-label'}>ელ.ფოსტა</label>
                        <input value={this.props.email ? this.props.email : ""} onChange={e => sendData(e)} className="email-input" type="text" placeholder='anzorr666@redberry.ge'/>
                        <div className='email-input-hint'>უნდა მთავრდებოდეს @redberry.ge-ით</div>
                        {this.state.clickedSubmit ? 
                        this.state.mailErr ? <img alt='result' className='wrong' src={wrong}/> : 
                        <img alt='result' className='correct' src={correct}/> : null}
                    </div>
                    <div className='mobile'>
                        <label className={this.state.mobileErr ? 'mobile-label error' : 'mobile-label'}>მობილურის ნომერი</label>
                        <input value={this.props.mobile ? this.props.mobile : ""} onChange={e => sendData(e)} className="mobile-input" type="text" placeholder='+995 551 12 34 56'/>
                        <div className='mobile-input-hint'>უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს</div>
                        {this.state.clickedSubmit ? 
                        this.state.mobileErr ? <img alt='result' className='wrong' src={wrong}/> : 
                        <img alt='result' className='correct' src={correct}/> : null}
                    </div>
                    <Link to='/experience'>
                        <button onClick={e => this.handleSubmit(e)} className='to-experience'>
                            <div className='to-experience-txt'>შემდეგი</div>
                        </button>
                    </Link>
                    
                </div>
                <div className='info-right'>
                    <img alt="your pic" id="image" src={this.props.photo}/>
                    {/* resume here */}
                </div>
            </div>
        );
    }
}
 
export default Info;