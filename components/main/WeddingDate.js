import React from "react";
import sImg1 from "/public/images/slider/shape.png";
import sImg2 from "/public/images/slider/shape2.png";
import TimeCountDown from "../countdown";
import { Slide } from "react-awesome-reveal";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { fetchWedding } from "../../slices/weddingSlice";
import { useEffect } from "react";

const WeddingDate = (props) => {
  const { wedding, error, loading } = useSelector((state) => state.wedding);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWedding());
  }, []);

  return (
    <section className={`wpo-wedding-date ${props.dtClass}`}>
      <div className="container">
        <Slide direction="up">
          <h2>
            <span className="shape-1">
              <Image src={sImg1} alt="" />
            </span>
            {wedding.bride_name} & {wedding.groom_name}
            <span className="shape-2">
              <Image src={sImg2} alt="" />{" "}
            </span>
          </h2>
          <p>{wedding.date}</p>
          <div className="row">
            <div className="col col-xs-12">
              <div className="clock-grids">
                <TimeCountDown countdownDate={new Date(wedding.date)} />
              </div>
            </div>
          </div>
        </Slide>
      </div>
    </section>
  );
};

export default WeddingDate;
