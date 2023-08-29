import React from "react";
import Image from "next/image";
import coupleImg3 from "/public/images/couple/shape.png";
import { useSelector, useDispatch } from "react-redux";
import { fetchCouple } from "../../slices/coupleSlice";
import { useEffect } from "react";
import Shimmer from "../../components/Shimmer";

const CoupleSection = (props) => {
  const { cClass } = props;
  const { couple, error, loading } = useSelector((state) => state.couple);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCouple());
  }, []);

  if (!couple.bride_img) {
    return <div>Loading...</div>;
  }

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
                  {!loading && error === "" && (
                    <Image
                      src={couple.bride_img.filename}
                      alt={couple.bride_img.id}
                      width={300}
                      height={300}
                      loading="lazy"
                      placeholder={<Shimmer />}
                    />
                  )}
                </div>
                <div className="couple-text">
                  <h3>{couple.bride_full_name}</h3>
                  <p>{couple.about_bride}</p>
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
                  {!loading && (
                    <Image
                      loading="lazy"
                      placeholder={<Shimmer />}
                      src={couple.groom_img.filename}
                      alt={couple.groom_img.id}
                      width={300}
                      height={300}
                    />
                  )}
                </div>
                <div className="couple-text">
                  <h3>{couple.groom_full_name}</h3>
                  <p>{couple.about_groom}</p>
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
