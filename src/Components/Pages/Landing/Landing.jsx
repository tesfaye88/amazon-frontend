import React from 'react'
import Layout from '../../LayOut/LayOut'
import Catagory from '../../Catagory/Catagory'
import Product from '../../Product/Product'
import CarouselEffect from '../../Carousel/Carousel'
function Landing() {
    return (
        <Layout>
            <CarouselEffect />
            <Catagory />
            <Product />
        </Layout>


    )
}

export default Landing
