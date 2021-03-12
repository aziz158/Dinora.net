import React from 'react';
import './Hero.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

class Hero extends React.Component {

    constructor() {
        super();
    
        this.state = {
          sendFromValue: "Send From",
          sendToValue: "Send To"
        }
      }
    
    changeValueSendFrom(text) {
        this.setState({sendFromValue: text})
    }

    changeValueSendTo(text) {
        this.setState({sendToValue: text})
    }

    render() {
        return(
            <div className='hero-container'>
                <div className='header-container'>
                    <div className='logo'>
                        dinora.net
                </div>
            </div>

            <div className='body-container'>
                <div className='pitch-container'>
                    <h3>
                        Send money FREE. No fees. No exchange rate bs
                    </h3>
                    <br></br>
                    <h5>
                        Send money to your loved ones without fees and exchange rate losses. You send $100 your family receives $100
                    </h5>
                </div>
                <div className='send-container'>
                    <div className='send-from-container'>
                        <DropdownButton id="dropdown-basic-button" title={this.state.sendFromValue} variant='secondary'> 
                            <Dropdown.Item as="button"><div onClick={(e) => this.changeValueSendFrom(e.target.textContent)}>Russia</div></Dropdown.Item>
                            <Dropdown.Item as="button"><div onClick={(e) => this.changeValueSendFrom(e.target.textContent)}>USA</div></Dropdown.Item>
                            <Dropdown.Item as="button"><div onClick={(e) => this.changeValueSendFrom(e.target.textContent)}>Uzbekistan</div></Dropdown.Item>
                        </DropdownButton>
                    </div>
                    <div className='send-to-container'>
                        <DropdownButton id="dropdown-basic-button" title={this.state.sendToValue} variant='secondary'> 
                            <Dropdown.Item as="button"><div onClick={(e) => this.changeValueSendTo(e.target.textContent)}>Russia</div></Dropdown.Item>
                            <Dropdown.Item as="button"><div onClick={(e) => this.changeValueSendTo(e.target.textContent)}>USA</div></Dropdown.Item>
                            <Dropdown.Item as="button"><div onClick={(e) => this.changeValueSendTo(e.target.textContent)}>Uzbekistan</div></Dropdown.Item>
                        </DropdownButton>
                    </div>
                </div>
                <div className='actions-container'>
                    <Button className='buttonSecondary'>Send $100</Button>
                    <Button className='buttonSecondary'>Recieve $100</Button>
                    <Button className='buttonPrimary'>Get Started</Button>
                </div>
            </div>
        </div>
        );
    };
}
export default Hero;