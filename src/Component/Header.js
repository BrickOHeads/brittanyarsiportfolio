import React, { Component } from 'react';
import '../Styles/Header.css';
var Popups = require('react-popups')

var FontAwesome = require('react-fontawesome');

class Header extends Component {
  constructor(props){
    super(props);
  };
  render(){
    return(
      <div className="Header">
        <style>@import url('https://fonts.googleapis.com/css?family=Bellefair|Philosopher|Tenor+Sans');</style>
        <div className="rocket">
            <FontAwesome
                 className='super-crazy-colors'
                 name='rocket'
                 size='2x'
                 spin
                 style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
               />
             <h1>A Little About Me</h1>
        </div>
            <h2 className="sentence">Hi I'm Brittany, <br></br>I
              <div className="pushEffect">
                <span>Am a Front End Web Developer.</span>
                <span>Am Creative at Problem Solving.</span>
                <span>Find satisfaction in clean code.</span>
                <span>Am a Dreamer and Entrepreneur.</span>
                <span>Am A Team Player.</span>
              </div>
            </h2>

    <div className="master_icons">
      <h3>Contact me:</h3>
        <div className='icons'>
        <a href='mailto:brittarsi@gmail.com'><FontAwesome
             name='envelope'
             size='4x' /></a>

        <a href='https://www.linkedin.com/in/brittany-arsi/'>
          <FontAwesome
          name='linkedin'
          size='4x' />
        </a>
        <a href='https://github.com/BrickOHeads'>
          <FontAwesome
          name='github'
          size='4x' />
        </a>
      </div>
    </div>


      </div>
    )
  }
}

export default Header;
