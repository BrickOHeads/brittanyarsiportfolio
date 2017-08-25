import React, { Component } from 'react';
import '../Styles/Homepage.css';
// import Carousel from './Carousel.js';

class Homepage extends Component {
  render() {
    return (
    <div>
      <h2>Brittany Arsi</h2>
      <div className='Text-photo'>
        <h4>I am currently available to discuss new projects.</h4>
        <a href="#projects"><h4>Scroll to See My Work</h4></a>
        <div className="Sunflower">
        </div>
      </div>


      <div className="Projects">
        <h1>Projects</h1>
          <a name="projects"></a>

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


        <div className="News">
          <div className="news-flex">
              <div className="news-left-side">
                <h3>News with React</h3>
                <h5>A project early on in learning React where I pulled from a news sourced API to generate this app and practice life cycles. </h5>
              </div>
              <img className="news_image"/>
          </div>
          <div className="bottom-news-flex">
            <ul>
                <h4>Tools:</h4>
                <li>React</li>
                <li>CSS</li>
                <li>Github</li>
            </ul>
            <ul>
              <a href="https://github.com/BrickOHeads/news_with_react"><h4>See the Code</h4></a>
            </ul>
          </div>
        </div>


        <div className="Soundcloud">
          <div className="music-flex">
              <div className="music-left-side">
                <h3>Music Box: SoundCloud API Music Application</h3>
                <h5>An application build in JavaScript pulling from the Soundcloud API. Users can search an artist and the Music Box will post the songs available by that artist.</h5>
              </div>
              <img className="music_image"/>
          </div>
          <div className="bottom-music-flex">
            <ul>
                <h4>Tools:</h4>
                <li>JavaScript</li>
                <li>CSS</li>
                <li>Github</li>
            </ul>
            <ul>
              <a href="https://github.com/BrickOHeads/soundcloud"><h4>See the Code</h4></a>
            </ul>
          </div>
        </div>


      </div>


    </div>
    );
  }
}

export default Homepage;
