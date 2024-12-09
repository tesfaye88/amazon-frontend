import React from 'react'
import { imageLinks } from './img/data'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import  classes from './Carousel/Carousel.module.css'
import classes from './Carousel.module.css'
import { Key } from '@mui/icons-material';
function CarouselEffect() {
    return (
        <div>
            <Carousel
                autoPlay={true}
                infiniteLoop={true}
                showIndicators={false}
                showThumbs={false}
            >
                {
                    imageLinks?.map((imageItemLink,index) => (
                         <img src={imageItemLink} key={index}  alt="image" />
                    ))
                }

            </Carousel>
            <h1  ></h1>
            <div  className={classes.hero_img}>

            </div>
        </div>
    )
}

export default CarouselEffect
