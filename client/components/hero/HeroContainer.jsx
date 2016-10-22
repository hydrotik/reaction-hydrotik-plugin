import React, { Component, PropTypes } from "react";

import { Carousel, CustomPrevArrow, CustomNextArrow } from "../carousel";


import Slider from 'react-slick';

class HeroContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {

    const heroSettings = {
      height: 600,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: <CustomPrevArrow />,
      nextArrow: <CustomNextArrow />,
      type: "hero",
      backgroundColor: "#545454"
    };

    const heroSlides = [
      {
        title: "Slide 1",
        description: "Slide 1 Description",
        href: "http://www.google.com",
        src: 'images/hero/_MG_9124.jpg'
      },
      {
        title: "Slide 2",
        description: "Slide 2 Description",
        href: "http://www.google.com",
        src: 'images/hero/_MG_0487.jpg'
      },
      {
        title: "Slide 3",
        description: "Slide 3 Description",
        href: "http://www.google.com",
        src: 'images/hero/_MG_0660.jpg'
      },
      {
        title: "Slide 4",
        description: "Slide 4 Description",
        href: "http://www.google.com",
        src: 'images/hero/_MG_1798.jpg'
      },
      {
        title: "Slide 5",
        description: "Slide 5 Description",
        href: "http://www.google.com",
        src: 'images/hero/_MG_1801.jpg'
      },
      {
        title: "Slide 6",
        description: "Slide 6 Description",
        href: "http://www.google.com",
        src: 'images/hero/_MG_9777.jpg'
      }
    ];

    return (
      <div className='carousel'>
        <Carousel slides={heroSlides} settings={heroSettings} />
      </div>
    );
  }
}

export default HeroContainer;