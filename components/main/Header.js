import React from "react";
import Link from "next/link";
import MobileMenu from "../MobileMenu/MobileMenu";

const Header = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <header id="header" className={props.topbarNone}>
      <div className={`wpo-site-header wpo-header-style-1 ${props.hclass}`}>
        <nav className="navigation navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-md-3 col-3 d-lg-none d-block">
                <div className="mobail-menu">
                  <MobileMenu />
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-6 d-lg-block d-none">
                {/* <div className="social-info">
                  <ul>
                    <li>
                      <Link href="/">
                        <i className="fi flaticon-facebook-app-symbol"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <i className="fi flaticon-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <i className="fi flaticon-linkedin"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <i className="fi flaticon-instagram-1"></i>
                      </Link>
                    </li>
                  </ul>
                </div> */}
              </div>
              <div className="col-md-6 col-6 d-lg-none dl-block">
                <div className="navbar-header">
                  <Link className="navbar-brand" href="/">
                    <img src="/images/logo.svg" alt="" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-8 col-md-1 col-1">
                <div
                  id="navbar"
                  className="collapse navbar-collapse navigation-holder"
                >
                  <button className="menu-close">
                    <i className="ti-close"></i>
                  </button>
                  <ul className="nav navbar-nav mb-2 mb-lg-0">
                    <li className="menu-item-has-children">
                      <Link href="/">Home</Link>
                    </li>
                    <li className="menu-item-has-children">
                      <Link href="/story">Our Story</Link>
                    </li>
                    <li className="menu-item-has-children">
                      <Link href="/galleria">Galleria</Link>
                    </li>
                    <li className="brand-logo">
                      <Link
                        onClick={ClickHandler}
                        className="navbar-brand"
                        href="/"
                      >
                        <img src="/images/logo.svg" alt="" />
                      </Link>
                    </li>
                    <li className="menu-item-has-children">
                      <Link href="/wedding-party">Bridal Party</Link>
                    </li>

                    <li className="menu-item-has-children">
                      <Link href="/accomodation">Travel</Link>
                      <ul className="sub-menu">
                        <li>
                          <Link onClick={ClickHandler} href="/accomodation">
                            Transportation
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} href="/accomodation">
                            Accomodation
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} href="/things-to-do">
                            Things To Do
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <Link href="/blog">Our Day</Link>
                      <ul className="sub-menu">
                        <li>
                          <Link onClick={ClickHandler} href="/blog">
                            Schedule of Events
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} href="/shop">
                            Registry - Shop
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} href="/wishlist">
                            Registry - Wishlist
                          </Link>
                        </li>
                        {/* <li>
                          <Link onClick={ClickHandler} href="/blog-fullwidth">
                            Blog fullwidth
                          </Link>
                        </li>
                        <li className="menu-item-has-children">
                          <Link href="/">Blog details</Link>
                          <ul className="sub-menu">
                            <li>
                              <Link
                                onClick={ClickHandler}
                                href="/blog-single/Dream-Day"
                              >
                                Blog details right sidebar
                              </Link>
                            </li>
                            <li>
                              <Link
                                onClick={ClickHandler}
                                href="/blog-single-left-sidebar/Dream-Day"
                              >
                                Blog details left sidebar
                              </Link>
                            </li>
                            <li>
                              <Link
                                onClick={ClickHandler}
                                href="/blog-single-fullwidth/Dream-Day"
                              >
                                Blog details fullwidth
                              </Link>
                            </li>
                          </ul>
                        </li> */}
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-2"></div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
