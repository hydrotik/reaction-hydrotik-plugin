import React, { Component, PropTypes } from "react";

import { CustomPrevArrow, CustomNextArrow, CarouselItem } from "./index.js";
import { map } from 'lodash';
import Slider from 'react-slick';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  static defaultProps = {
        slides: []
  }

  static propTypes = {
        slides: PropTypes.array.isRequired
  }

  render() {

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: <CustomPrevArrow />,
      nextArrow: <CustomNextArrow />
    };

    const { slides } = this.props;

    return (
            <div className='carousel'>
                <Slider {... settings}>
                    {map(slides, this.renderCarouselSlide)}
                </Slider>
            </div>
        );
  }

  renderCarouselSlide(item, i) {
      return (<div key={i}>
              <CarouselItem item={item} />
          </div>
      );
  }
}

export default Carousel;