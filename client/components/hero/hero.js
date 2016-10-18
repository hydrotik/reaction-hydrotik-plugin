import { CarouselContainer } from "./containers";


Template.CustomHero.helpers({
  CarouselContainer() {
    console.log("CarouselContainer");
    console.log(CarouselContainer);
    return CarouselContainer;
  }
});