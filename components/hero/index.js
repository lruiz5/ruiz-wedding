import React from "react";
import Slider from "react-slick";
import Image from 'next/image'

import hero1 from '/public/images/slider/h1.jpg'
import hero2 from '/public/images/slider/h2.jpg'
import hero3 from '/public/images/slider/h3.jpg'
import hero4 from '/public/images/slider/h4.jpg'


var settings = {
    dots: false,
    arrows: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    centerMode: true,
    centerPadding:'0',
    responsive: [
        {
            breakpoint: 1500,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

const HeroArray = [
    {
        hImg: hero1,
        title: 'Love',
    },
    {
        hImg: hero2,
        title: 'Affection',
    },
    {
        hImg: hero3,
        title: 'Feelings',
    },
    {
        hImg: hero4,
        title: 'Happy',
    },
]


const Hero = () => {
    return (

        <section className="wpo-hero-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="wpo-hero-items">
                        <Slider {...settings}>
                            {
                                HeroArray.map((hero, hr) => (
                                    <div className="wpo-hero-item" key={hr}>
                                        <div className="wpo-hero-img">
                                            <Image src={hero.hImg} alt="" />
                                            <div className="wpo-hero-text">
                                                <h2>{hero.title}</h2>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;