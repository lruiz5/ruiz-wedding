import React from "react";
import Link from "next/link";
const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const Footer = (props) => {
  const year = new Date().getFullYear();
  return (
    <div className="wpo-site-footer text-center">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="footer-image">
              <Link className="logo" href="/">
                <img src="/images/logo.svg" alt="" />
              </Link>
            </div>
          </div>
          <div className="col-12">
            <div className="footer-link">
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/story">Our Story</Link>
                </li>
                <li>
                  <Link href="/galleria">Galleria</Link>
                </li>
                <li>
                  <Link href="/portfolio-grid">Portfolio</Link>
                </li>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12">
            <div className="link-widget">
              <ul>
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <i className="ti-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <i className="ti-dribbble"></i>
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <i className="ti-facebook"></i>
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <i className="ti-linkedin"></i>
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <i className="ti-skype"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12">
            <div className="copyright">
              <p>© Copyright {year} | Ruiz Be Mine | All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
