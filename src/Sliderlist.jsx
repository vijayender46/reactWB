import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import CategoryWb from './CategoryWb';

//Owl Carousel Settings
const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    autoplay: false,
    navText: ["Prev", "Next"],
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        600: {
            items: 2,
        },
        700: {
            items: 3,
        },
        1000: {
            items: 4,
        }
    },
  };
 
 
const Sliderlist = () => {
   return(
       <>
        <div className="carouselComponent">
             
            <OwlCarousel className="slider-items owl-carousel" {...options}>
                <div className="item">
                    <CategoryWb />
                </div>
                
            </OwlCarousel>
        </div>
       </>
   )
   
  }
  
  
  export default Sliderlist;