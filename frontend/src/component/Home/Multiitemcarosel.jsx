import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { Topmeals } from './Topmeals';
import { Caroselitem } from './caroselitem';


const Multiitemcarosel = () => {
    const settings ={
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        

    };
  return (
    <div>
        <Slider {...settings}>
            {Topmeals.map((item) => (
                <Caroselitem image={item.image} title={item.title}/>

            ))}

        </Slider>
    </div>
  );
};

export default Multiitemcarosel