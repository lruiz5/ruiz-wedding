import React from 'react'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { Gallery, Item } from 'react-photoswipe-gallery'


const Portfolios = [
    {
        Pimg: '/images/portfolio/12.jpg',
    },
    {
        Pimg: '/images/portfolio/13.jpg',
    },
    {
        Pimg: '/images/portfolio/15.jpg',
    },
    {
        Pimg: '/images/portfolio/24.jpg',
    },
    {
        Pimg: '/images/portfolio/14.jpg',
    },
    {
        Pimg: '/images/portfolio/17.jpg',
    },
    {
        Pimg: '/images/portfolio/25.jpg',
    },
    {
        Pimg: '/images/portfolio/16.jpg',
    },

]

const PortfolioSectionS2 = (props) => {
    return (

        <section className={`wpo-portfolio-section-s2 section-padding ${props.prClass}`} id="gallery">
            <div className="container-fluid">
                <div className="sortable-gallery">
                    <div className="gallery-filters"></div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="portfolio-grids gallery-container clearfix">
                                <Gallery >
                                    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 4 }}>
                                        <Masonry columnsCount={4} gutter="30px">
                                            {Portfolios.map((image, i) => (
                                                <div className="grid" key={i}>
                                                    <Item
                                                        original={image.Pimg}
                                                        thumbnail={image.Pimg}
                                                        width="600"
                                                        height="700"
                                                    >
                                                        {({ ref, open }) => (
                                                            <img ref={ref} onClick={open} src={image.Pimg} />
                                                        )}
                                                    </Item>
                                                </div>
                                            ))}
                                        </Masonry>
                                    </ResponsiveMasonry>
                                </Gallery>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PortfolioSectionS2;