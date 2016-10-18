import React, { Component, PropTypes } from "react";

import Slider from 'react-slick';

class CarouselContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div>
        <Slider {...settings}>
          <div><h3>Slide 1</h3></div>
          <div><h3>Slide 2</h3></div>
          <div><h3>Slide 3</h3></div>
          <div><h3>Slide 4</h3></div>
          <div><h3>Slide 5</h3></div>
          <div><h3>Slide 6</h3></div>
        </Slider>
      </div>
    );
  }
}

export default CarouselContainer;