import React from 'react';
import '../App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import Info from './Info';
import Experience from './Experience';


class App extends React.Component {
    state = {
        name: "",
        lastName: "",
        email: "",
        mobile: "",
        photo: "",
        aboutMe: ""
    }
    initialState = this.state

    // save info on refresh
    UNSAFE_componentWillMount() {
        let name = JSON.parse(window.sessionStorage.getItem('name'));
        let lastName = JSON.parse(window.sessionStorage.getItem('lastName'));
        let email = JSON.parse(window.sessionStorage.getItem('email'));
        let mobile = JSON.parse(window.sessionStorage.getItem('mobile'));
        let aboutMe = JSON.parse(window.sessionStorage.getItem('aboutMe'));
        let photo = JSON.parse(window.sessionStorage.getItem('photo'));
        this.setState({
          name,
          lastName,
          email,
          mobile,
          aboutMe,
          photo
        })
      }
    
      // save information in session storage
      componentDidUpdate(_prevProps, prevState) {
        if(this.state.name !== prevState.name) {
          window.sessionStorage.setItem('name', JSON.stringify(this.state.name))
        }
        if(this.state.lastName !== prevState.lastName) {
          window.sessionStorage.setItem('lastName', JSON.stringify(this.state.lastName))
        }
        if(this.state.email !== prevState.email) {
          window.sessionStorage.setItem('email', JSON.stringify(this.state.email))
        }
        if(this.state.mobile !== prevState.mobile) {
          window.sessionStorage.setItem('mobile', JSON.stringify(this.state.mobile))
        }
        if(this.state.aboutMe !== prevState.aboutMe) {
          window.sessionStorage.setItem('aboutMe', JSON.stringify(this.state.aboutMe))
        }
        if(this.state.photo !== prevState.photo) {
          window.sessionStorage.setItem('photo', JSON.stringify(this.state.photo))
        }
      }

    clearStorage = () => {
        sessionStorage.clear();
        this.setState(this.initialState)
    }

    render() { 
        // get data from user
        const saveData = (value, className) => {
            if (className === 'input-name-input') {
              this.setState({ name: value })
            } else if(className === 'input-lastname-input') {
              this.setState({ lastName: value })
            } else if(className === 'email-input') {
              this.setState({ email: value })
            } else if(className === 'mobile-input') {
              this.setState({ mobile: value })
            } else if(className === 'image') {
              this.setState({ photo: value })
            } else if(className === 'about-me-input') {
              this.setState({ aboutMe: value })
            }
        }
        return (
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' exact element={<LandingPage />}/>
                        <Route path='/info' element={
                            <Info
                                saveData={saveData}
                                name={this.state.name}
                                lastName={this.state.lastName}
                                email={this.state.email}
                                mobile={this.state.mobile}
                                photo={this.state.photo}
                                aboutMe={this.state.aboutMe}
                                clearStorage={this.clearStorage}
                            />
                        }/>
                        <Route path='/experience' element={
                            <Experience 
                                clearStorage={this.clearStorage}
                            />
                        }/>
                    </Routes>
                </BrowserRouter>
            </div>
        );
    }
}
 
export default App;