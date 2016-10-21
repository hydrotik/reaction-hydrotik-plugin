import React, { Component, PropTypes } from "react";

import { Carousel, CustomPrevArrow, CustomNextArrow } from "../components/carousel";


import Slider from 'react-slick';

class CarouselContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {

    const promoSettings = {
      height: 36,
      autoplay: true,
      autoplaySpeed: 8000,
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      type: "promo"
    };

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

    const promoSlides = [
      {
        title: "",
        description: "Free shipping on items over $99!",
        href: "http://www.cnn.com",
        src: ''
      },
      {
        title: "",
        description: "25% off marked items this week only!",
        href: "http://www.cnn.com",
        src: ''
      },
      {
        title: "",
        description: "Sign up for the Reaction card and get 15% off your purchase",
        href: "http://www.cnn.com",
        src: ''
      }
    ];

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
        <Carousel slides={promoSlides} settings={promoSettings} />
        <Carousel slides={heroSlides} settings={heroSettings} />
      </div>
    );
  }
}

export default CarouselContainer;