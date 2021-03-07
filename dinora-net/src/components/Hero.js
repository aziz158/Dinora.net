import React from 'react';
import './Hero.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function Hero() {
  return (
    <div className='hero-container'>
        <div className='logo'>
            dinora.net
        </div>
        <div className= 'text'>
            Send money FREE. No fees. No exchange rate bs
        </div>
        <div className= 'text-content'>
            Send money to your loved ones without fees and exchange rate losses. You send $100 your family receives $100
        </div>
        <div className= 'send-from-button'>
            <DropdownButton id="dropdown-basic-button" title="Send From" variant='secondary'> 
                <Dropdown.Item href="#/action-1">Russia</Dropdown.Item>
                <Dropdown.Item href="#/action-2">USA</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Uzbekistan</Dropdown.Item>
            </DropdownButton>
        </div>
        <div className= 'send-to-button'>
            <DropdownButton id="dropdown-basic-button" title="Send To" variant='secondary'> 
                <Dropdown.Item href="#/action-1">Russia</Dropdown.Item>
                <Dropdown.Item href="#/action-2">USA</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Uzbekistan</Dropdown.Item>
            </DropdownButton>
        </div>

        <div className='btns'>
            <Button variant="outline-light" block>you send $100</Button>
            <Button variant="outline-light" block>they get $100</Button>
            <Button variant="light" block>Get Started</Button>
        </div>
    </div>
  );
}

export default Hero;