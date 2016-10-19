import React, { Component, PropTypes } from "react";

import { CustomPrevArrow, CustomNextArrow } from "../components/carousel";

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
      slidesToScroll: 1,
      arrows: true,
      prevArrow: <CustomPrevArrow />,
      nextArrow: <CustomNextArrow />
    };

    /*

      Clean this up and componentize and create a proper model once it is working

    */

    const divStyle = [
      {
        backgroundImage: 'url(' + 'images/hero/_MG_9124.jpg' + ')'
      },
      {
        backgroundImage: 'url(' + 'images/hero/_MG_0487.jpg' + ')'
      },
      {
        backgroundImage: 'url(' + 'images/hero/_MG_0660.jpg' + ')'
      },
      {
        backgroundImage: 'url(' + 'images/hero/_MG_1798.jpg' + ')'
      },
      {
        backgroundImage: 'url(' + 'images/hero/_MG_1801.jpg' + ')'
      },
      {
        backgroundImage: 'url(' + 'images/hero/_MG_9777.jpg' + ')'
      }
    ];

    return (
      <div className='carousel'>
        <Slider {...settings}>

          <div className='carouselitem' style={divStyle[0]}>
            <div className='carouselitem__link'>
              <div className='carouselitem__link__content'>
                <h2 className='carouselitem__link__content__heading'>Slide 1</h2>
                <p>Slide 1 Description</p>
              </div>
            </div>
          </div>

          <div className='carouselitem' style={divStyle[1]}>
            <div className='carouselitem__link'>
              <div className='carouselitem__link__content'>
                <h2 className='carouselitem__link__content__heading'>Slide 2</h2>
                <p>Slide 2 Description</p>
              </div>
            </div>
          </div>

          <div className='carouselitem' style={divStyle[2]}>
            <div className='carouselitem__link'>
              <div className='carouselitem__link__content'>
                <h2 className='carouselitem__link__content__heading'>Slide 3</h2>
                <p>Slide 3 Description</p>
              </div>
            </div>
          </div>

          <div className='carouselitem' style={divStyle[3]}>
            <div className='carouselitem__link'>
              <div className='carouselitem__link__content'>
                <h2 className='carouselitem__link__content__heading'>Slide 4</h2>
                <p>Slide 4 Description</p>
              </div>
            </div>
          </div>

          <div className='carouselitem' style={divStyle[4]}>
            <div className='carouselitem__link'>
              <div className='carouselitem__link__content'>
                <h2 className='carouselitem__link__content__heading'>Slide 5</h2>
                <p>Slide 5 Description</p>
              </div>
            </div>
          </div>

          <div className='carouselitem' style={divStyle[5]}>
            <div className='carouselitem__link'>
              <div className='carouselitem__link__content'>
                <h2 className='carouselitem__link__content__heading'>Slide 6</h2>
                <p>Slide 6 Description</p>
              </div>
            </div>
          </div>

        </Slider>
      </div>
    );
  }
}

export default CarouselContainer;