import React from "react";
import Image from "next/image";
import coupleImg3 from "/public/images/couple/shape.png";

const CoupleSection = (props) => {
  const { info, cClass } = props;

  return (
    <section
      className={`wpo-couple-section section-padding ${cClass}`}
      id="couple"
    >
      <div className="container">
        <div className="couple-area clearfix">
          <div className="row align-items-center">
            <div className="col col-md-5 col-12">
              <div className="couple-item">
                <div className="couple-img">
                  <Image
                    src={info.bride_img.filename}
                    alt={info.bride_img.id}
                    width={300}
                    height={300}
                  />
                </div>
                <div className="couple-text">
                  <h3>{info.bride_full_name}</h3>
                  <p>{info.about_bride}</p>
                  {/* <div className="social">
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
                  </div> */}
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
                  <Image
                    src={info.groom_img.filename}
                    alt={info.groom_img.id}
                    width={300}
                    height={300}
                  />
                </div>
                <div className="couple-text">
                  <h3>{info.groom_full_name}</h3>
                  <p>{info.about_groom}</p>
                  {/*  <div className="social">
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
                  </div> */}
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
