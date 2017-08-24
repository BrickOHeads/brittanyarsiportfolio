import React, { Component } from 'react';
import '../Styles/Homepage.css';
// import Carousel from './Carousel.js';

class Homepage extends Component {
  render() {
    return (
    <div>
      <h2>Brittany Arsi</h2>
      <div className='Text-photo'>
        <h4>Scroll to See My Work</h4>
        <a href="#projects"><h4>Scroll</h4></a>
        <div className="Sunflower">
        </div>
      </div>


      <div className="Projects">
        <a name="projects"></a>
        <h1>Projects</h1>

        <div className="etsy">
          <div className="etsy-flex">
              <div className="etsy-left-side">
                <h3>Recreating Etsy Group Project</h3>
                <h5>Using React and Bootstrap with a team of five, recreated the Trending page of the popular Etsy site using their API. Other teams and ours then did a Git Merge to merge all pages.  I was team lead for one of the 5 days it took to complete this project. </h5>
              </div>
              <img className="etsy_image"/>
          </div>
          <div className="bottom-flex">
            <ul>
                <h4>Tools:</h4>
                <li>React</li>
                <li>BootStrap</li>
                <li>Github, Trello, Slack</li>
            </ul>
            <ul>
              <a href="https://github.com/TIY-Etsy-Project/TIY-Etsy-Final"><h4>See the Code</h4></a>
            </ul>
        </div>
        </div>

        <div className="Fandomonium">
          <div className="fan-flex">
              <div className="fan-left-side">
                <h3>Fandomonium: An E-Commerce Site for Fan Art</h3>
                <h5>An E-Commerce site to sell fan art created and populated by a team of four. An API was created in Mongo and uploaded to MLab and deployed to be called in our site.  Admin has ability to CRUD and users can buy one item at a time in a cart setting. </h5>
              </div>
              <img className="fan_image"/>
          </div>
          <div className="bottom-fan-flex">
            <ul>
                <h4>Tools:</h4>
                <li>React</li>
                <li>BootStrap, CSS</li>
                <li>Mongo</li>
                <li>Github, Trello, Slack, Heroku</li>
            </ul>
            <ul>
              <a href="https://github.com/Team-KillinIt/TIY-TheIronStore"><h4>See the Code</h4></a>
            </ul>
        </div>
        </div>




      </div>

    </div>
    );
  }
}

export default Homepage;
