import React, { useState } from "react";
import Link from "next/link";
import MobileMenu from "../MobileMenu/MobileMenu";
import { totalPrice } from "../../utils";
import { connect } from "react-redux";
import { removeFromCart } from "../../store/actions/action";

const Header = (props) => {
  const [menuActive, setMenuState] = useState(false);
  const [cartActive, setcartState] = useState(false);

  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const { carts } = props;

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
                          <Link onClick={ClickHandler} href="/accomodation">
                            Other
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
                          <Link
                            onClick={ClickHandler}
                            href="/blog-left-sidebar"
                          >
                            Registry
                          </Link>
                        </li>
                        <li>
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
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-2">
                {/* <div className="header-right">
                  <div className="header-search-form-wrapper">
                    <div className="cart-search-contact">
                      <button
                        onClick={() => setMenuState(!menuActive)}
                        className="search-toggle-btn"
                      >
                        <i
                          className={`ti-search ${
                            menuActive ? "ti-close" : "ti-search"
                          }`}
                        ></i>
                      </button>
                      <div
                        className={`header-search-form ${
                          menuActive ? "header-search-content-toggle" : ""
                        }`}
                      >
                        <form onSubmit={SubmitHandler}>
                          <div>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Search here..."
                            />
                            <button type="submit">
                              <i className="fi ti-search"></i>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="mini-cart">
                    <button
                      className="cart-toggle-btn"
                      onClick={() => setcartState(!cartActive)}
                    >
                      {" "}
                      <i className="fi flaticon-shopping-cart"></i>{" "}
                      <span className="cart-count">{carts.length}</span>
                    </button>
                    <div
                      className={`mini-cart-content ${
                        cartActive ? "mini-cart-content-toggle" : ""
                      }`}
                    >
                      <button
                        className="mini-cart-close"
                        onClick={() => setcartState(!cartActive)}
                      >
                        <i className="ti-close"></i>
                      </button>
                      <div className="mini-cart-items">
                        {carts &&
                          carts.length > 0 &&
                          carts.map((catItem, crt) => (
                            <div className="mini-cart-item clearfix" key={crt}>
                              <div className="mini-cart-item-image">
                                <span>
                                  <img src={catItem.proImg} alt="icon" />
                                </span>
                              </div>
                              <div className="mini-cart-item-des">
                                <p>{catItem.title} </p>
                                <span className="mini-cart-item-price">
                                  ${catItem.price} x {catItem.qty}
                                </span>
                                <span className="mini-cart-item-quantity">
                                  <button
                                    onClick={() =>
                                      props.removeFromCart(catItem.id)
                                    }
                                    className="btn btn-sm btn-danger"
                                  >
                                    <i className="ti-close"></i>
                                  </button>{" "}
                                </span>
                              </div>
                            </div>
                          ))}
                      </div>
                      <div className="mini-cart-action clearfix">
                        <span className="mini-checkout-price">
                          Subtotal: <span> ${totalPrice(carts)}</span>
                        </span>
                        <div className="mini-btn">
                          <Link
                            onClick={ClickHandler}
                            href="/checkout"
                            className="view-cart-btn s1"
                          >
                            Checkout
                          </Link>
                          <Link
                            onClick={ClickHandler}
                            href="/cart"
                            className="view-cart-btn"
                          >
                            View Cart
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    carts: state.cartList.cart,
  };
};
export default connect(mapStateToProps, { removeFromCart })(Header);
