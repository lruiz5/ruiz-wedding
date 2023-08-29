import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Gallery, Item } from "react-photoswipe-gallery";
import { useSelector, useDispatch } from "react-redux";
import { fetchPortfolio } from "../../slices/portfolioSlice";
import { useEffect } from "react";

const PortfolioSection = (props) => {
  const { portfolio, error, loading } = useSelector((state) => state.portfolio);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPortfolio());
  }, []);

  return (
    <section
      className={`wpo-portfolio-section-s2 section-padding ${props.prClass}`}
      id="gallery"
    >
      <div className="container">
        {!props.mainComponent && (
          <div className="wpo-section-title">
            <h4>Sweet Memories</h4>
            <h2>Our Captured Moments</h2>
          </div>
        )}
        <div className="sortable-gallery">
          <div className="gallery-filters"></div>
          <div className="row">
            <div className="col-lg-12">
              <div className="portfolio-grids gallery-container clearfix">
                <Gallery>
                  <ResponsiveMasonry
                    columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 4 }}
                  >
                    <Masonry columnsCount={4} gutter="30px">
                      {portfolio.map((image, i) => (
                        <div className="grid" key={i}>
                          <Item
                            original={image.filename}
                            thumbnail={image.filename}
                            width="600"
                            height="700"
                          >
                            {({ ref, open }) => (
                              <img
                                ref={ref}
                                onClick={open}
                                src={image.filename}
                              />
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
  );
};

export default PortfolioSection;
