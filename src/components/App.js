import React from 'react';
import '../App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import Info from './Info';

const initialState = {
    name: "",
    lastName: "",
    email: "",
    mobile: ""
}

class App extends React.Component {
    state = initialState
    render() { 
        const saveData = (value, className) => {
            if (className === 'input-name-input') {
              this.setState({ name: value })
            } else if(className === 'input-lastname-input') {
              this.setState({ lastName: value })
            } else if(className === 'email-input') {
              this.setState({ email: value })
            } else if(className === 'mobile-input') {
              this.setState({ mobile: value })
            }
            // } else if(className === 'input-laptopname-input') {
            //   this.setState({ laptopName: value })
            // } else if(className === 'cpu-birtvi-input') {
            //   this.setState({ CPUbirtvi: value })
            // } else if(className === 'cpu-nakadi-input') {
            //   this.setState({ CPUnakadi: value })
            // } else if(className === 'input-laptopRAM-input') {
            //   this.setState({ laptopRAM: value })
            // } else if(className === 'input-laptopPrice-input') {
            //   this.setState({ laptopPrice: value })
            // }
        }


        return (
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' exact element={<LandingPage/>}/>
                        <Route path='/info' element={
                            <Info
                                saveData={saveData}
                                name={this.state.name}
                                lastName={this.state.lastName}
                                email={this.state.email}
                                mobile={this.state.mobile}
                            />
                        }/>
                    </Routes>
                </BrowserRouter>
            </div>
        );
    }
}
 
export default App;