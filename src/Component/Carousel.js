import React, { Component } from 'react';
import '../Styles/carousel.css';

class Carousel extends Component {
  render () {
    return (
      <div id="myCarousel" className="carousel slide" data-ride="carousel">

        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
          <li data-target="#myCarousel" data-slide-to="3"></li>
          <li data-target="#myCarousel" data-slide-to="4"></li>
        </ol>

        <div className="carousel-inner">
          <div className="item active">
            <img src="https://s-media-cache-ak0.pinimg.com/564x/77/1f/62/771f62e920a5fc38092b9d054ba4304e.jpg"/>
          </div>

          <div className="item">
            <img src="https://s-media-cache-ak0.pinimg.com/originals/f6/1b/e3/f61be3fbc227dd4150eae536b43b4e19.jpg" />
          </div>
      </div>

        <a className="left carousel-control" href="#myCarousel" data-slide="prev">
          <span className="glyphicon glyphicon-chevron-left"></span>
          <span className="sr-only">Previous</span>
        </a>

        <a className="right carousel-control" href="#myCarousel" data-slide="next">
          <span className="glyphicon glyphicon-chevron-right"></span>
          <span className="sr-only">Next</span>
        </a>

      </div>
    )
    }
  }

export default Carousel;
