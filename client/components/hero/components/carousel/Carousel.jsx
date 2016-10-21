import React, { Component, PropTypes } from "react";

import { CarouselItem } from "./index.js";
import { map } from 'lodash';
import Slider from 'react-slick';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  static defaultProps = {
    slides: [],
    settings: {}
  }

  static propTypes = {
    slides: PropTypes.array.isRequired,
    settings: PropTypes.object
  }

  render() {

    const { slides, settings} = this.props;

    const carouselStyle = {
      height: settings.height + 'px'
    };

    return (
      <div className='carousel' style={carouselStyle}>
          <Slider {... settings}>
            {map(slides, (item, i) => this.renderCarouselSlide(item, i))}
        </Slider>
      </div>
    );
  }

  renderCarouselSlide(item, i) {
    const { settings} = this.props;

    const carouselStyle = {
      height: settings.height + 'px'
    };
    
    return (
      <div key={i}>
        <CarouselItem item={item} style={carouselStyle} />
      </div>
    );
  }
}

export default Carousel;