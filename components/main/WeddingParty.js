import React from "react";
import SectionTitle from "../SectionTitle";
import Image from "next/image";
import StockFemale1 from "/public/images/bridesmaids/stock-f-1.jpg";
import StockFemale2 from "/public/images/bridesmaids/stock-f-2.jpg";
import StockFemale3 from "/public/images/bridesmaids/stock-f-3.jpg";
import StockFemale4 from "/public/images/bridesmaids/stock-f-4.jpg";
import Default from "/public/images/bridesmaids/default.jpg";
import Sambo from "/public/images/groomsmen/sambo.jpg";
import Saul from "/public/images/groomsmen/saul.jpg";
import Groomsman from "/public/images/groomsmen/groom-2.jpg";
import Jesus from "/public/images/groomsmen/jesus.jpg";
import Lenny from "/public/images/groomsmen/lenny.jpg";

const Bridesmaids = [
  {
    id: "1",
    tImg: Default,
    name: "Reilly Bones",
    title: "Bestie",
  },
  {
    id: "2",
    tImg: StockFemale1,
    name: "Boogie Knights",
    title: "Sister",
  },

  {
    id: "3",
    tImg: StockFemale2,
    name: "Rosie McDonalds",
    title: "Sister",
  },
  {
    id: "4",
    tImg: StockFemale4,
    name: "Jessica Farts",
    title: "Sister",
  },
  {
    id: "5",
    tImg: StockFemale3,
    name: "Miley Sirens",
    title: "Sister",
  },
  {
    id: "6",
    tImg: Sambo,
    name: "Sam Ruiz",
    title: "Bestie",
  },
  {
    id: "7",
    tImg: Groomsman,
    name: "Juan Ruiz",
    title: "Brother",
  },
  {
    id: "8",
    tImg: Saul,
    name: "Saul Ruiz",
    title: "Brother",
  },
  {
    id: "9",
    tImg: Lenny,
    name: "Leonard Bunten",
    title: "Friend",
  },
  {
    id: "10",
    tImg: Jesus,
    name: "Jesus Quezada",
    title: "Friend",
  },
];

const BrideGrooms = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section className="bride-groom-section">
      <div className={`wpo-team-section section-padding ${props.tClass}`}>
        <div className="container">
          <SectionTitle
            subTitle={"Wedding Party"}
            MainTitle={"Bridesmaids & Groomsmen"}
          />
          <div className="wpo-team-wrap">
            <div className="row">
              {Bridesmaids.slice(0, 10).map((bridesmaid, tm) => (
                <div className="col-lg-3 col-md-6 col-sm-6 col-12" key={tm}>
                  <div className="wpo-team-item">
                    <div className="wpo-team-img">
                      <Image src={bridesmaid.tImg} alt="" />
                    </div>
                    <div className="wpo-team-text">
                      <h3>{bridesmaid.name}</h3>
                      <span>{bridesmaid.title}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrideGrooms;
