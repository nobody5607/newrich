import React, { Component } from 'react'
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
export default class News extends Component {
    state={
        imageOne:'https://cdn.pixabay.com/photo/2017/11/07/23/23/berchtesgaden-2928712__480.jpg',
        imageTwo:'https://cdn.pixabay.com/photo/2017/06/14/16/10/mountainous-landscape-2402590__480.jpg',
        imageThree:'https://cdn.pixabay.com/photo/2017/06/14/16/05/volcanic-lake-2402574__480.jpg'
    }
    render() {
        const {imageOne,imageTwo,imageThree} = this.state;
        return (
            <div style={{padding:'10px'}}>
                <Carousel
                    animationSpeed={1500}
                    autoPlay={5000}

                    // slidesPerPage={5}
                    // slidesPerScroll={1}
                    
                    // stopAutoPlayOnHover
                    // offset={50}
                    itemWidth={355}
                    // clickToChange
                    // centered
                    infinite
                >
                    <img style={{width:'355px',height:'100px'}} src={imageOne} />
                    <img style={{width:'355px',height:'100px'}} src={imageTwo} />
                    <img style={{width:'355px',height:'100px'}} src={imageThree} />
                </Carousel>       
            </div>
        )
    }
}
