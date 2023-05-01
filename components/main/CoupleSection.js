import React from "react";
import Link from "next/link";
import Image from "next/image";
import coupleImg1 from "/public/images/couple/img-1.png";
import coupleImg2 from "/public/images/couple/img-2.png";
import coupleImg3 from "/public/images/couple/shape.png";

import bride from "/public/images/couple/bride.png";
import groom from "/public/images/couple/groom.jpg";

const CoupleSection = (props) => {
  return (
    <section
      className={`wpo-couple-section section-padding ${props.cClass}`}
      id="couple"
    >
      <div className="container">
        <div className="couple-area clearfix">
          <div className="row align-items-center">
            <div className="col col-md-5 col-12">
              <div className="couple-item">
                <div className="couple-img">
                  <Image src={bride} alt="bride and groom" />
                </div>
                <div className="couple-text">
                  <h3>Meghan P Bezak</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Urna orci auctor vitae nisl. Erat fringilla pellentesque
                    amet tempus. Commodo mi vitae, sagittis blandit.
                  </p>
                  <div className="social">
                    <ul>
                      <li>
                        <Link href="/home3">
                          <i className="ti-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="/home3">
                          <i className="ti-twitter-alt"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="/home3">
                          <i className="ti-instagram"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col col-md-2 col-12">
              <div className="middle-couple-shape">
                <div className="shape">
                  <Image src={coupleImg3} alt="" />
                </div>
              </div>
            </div>
            <div className="col col-md-5 col-12">
              <div className="couple-item">
                <div className="couple-img">
                  <Image src={groom} alt="" />
                </div>
                <div className="couple-text">
                  <h3>Luis-Angel Ruiz</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Urna orci auctor vitae nisl. Erat fringilla pellentesque
                    amet tempus. Commodo mi vitae, sagittis blandit.
                  </p>
                  <div className="social">
                    <ul>
                      <li>
                        <Link href="/home3">
                          <i className="ti-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="/home3">
                          <i className="ti-twitter-alt"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="/home3">
                          <i className="ti-instagram"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoupleSection;
