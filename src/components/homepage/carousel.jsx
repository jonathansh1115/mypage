import React, { useState, useEffect } from 'react';
import './styles/carousel.css'

// libraries
import {
Carousel,
CarouselItem,
CarouselControl,
CarouselIndicators,
CarouselCaption
} from 'reactstrap';
import Axios from 'axios'


export default (props) => {

    const [items, setItems] = useState([])

    useEffect(() => {
        Axios({
            method: 'GET',
            url: 'http://itsmejonathan.epizy.com/getcarouselimg.php',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            setItems(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    }, [])

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
        <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={item.img_link}>
            <div className='imagesbox'>
                <img className='images' src={item.img_link} alt={item.alt_text} />
            </div>
            <CarouselCaption captionText={item.caption} captionHeader={item.header} />
        </CarouselItem>
        )
    })

    return (
        <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}>
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
    );
}