import React from "react";
import Link from "next/link";
import SectionTitle from "../../SectionTitle";

const Lodging = [
  {
    pakage: "La Quinta Inn & Suites",
    price: "136",
    subs: "Night",
    l1: "10.3 miles from venue",
    l2: "Top label arrengement",
    l3: "Amazing meal & breakfast",
    l4: "Manicure & Pedicure",
    l5: "Full body Polish",
  },
  {
    pakage: "The Oaks Hotel & Suites",
    price: "129",
    subs: "Night",
    l1: "11.5 miles from venue",
    l2: "Top label arrengement",
    l3: "Amazing meal & breakfast",
    l4: "Manicure & Pedicure",
    l5: "Full body Polish",
  },
  {
    pakage: "Holiday Inn Express & Suites",
    price: "141",
    subs: "Night",
    l1: "11.2 miles form venue",
    l2: "Top label arrengement",
    l3: "Amazing meal & breakfast",
    l4: "Manicure & Pedicure",
    l5: "Full body Polish",
  },
];

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const LodgingSection = (props) => {
  return (
    <section className={`wpo-pricing-section section-padding ${props.pvClass}`}>
      <div className="container">
        <SectionTitle
          subTitle={"Choose Yours"}
          MainTitle={"Hotels & Lodging"}
        />
        <div className="wpo-pricing-wrap">
          <div className="row">
            {Lodging.map((pricing, pitem) => (
              <div className="col col-lg-4 col-md-6 col-12" key={pitem}>
                <div className="wpo-pricing-item">
                  <div className="wpo-pricing-top">
                    <div className="wpo-pricing-text">
                      <h4>{pricing.pakage}</h4>
                      <h2>
                        ${pricing.price}
                        <span>/{pricing.subs}</span>
                      </h2>
                    </div>
                  </div>
                  <div className="shape">
                    <img src="/images/pricing/p-shape.svg" alt="" />
                  </div>
                  <div className="wpo-pricing-bottom">
                    <div className="wpo-pricing-bottom-text">
                      <ul>
                        <li>{pricing.l1}</li>
                        <li>{pricing.l2}</li>
                        <li>{pricing.l3}</li>
                        <li>{pricing.l4}</li>
                        <li>{pricing.l5}</li>
                      </ul>
                      <Link
                        onClick={ClickHandler}
                        className="theme-btn"
                        href="/pricing"
                      >
                        View Options
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LodgingSection;
