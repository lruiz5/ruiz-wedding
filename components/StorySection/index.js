import React from "react";
import SectionTitle from "../SectionTitle";
import sImg1 from "/public/images/story/1.jpg";
import sImg2 from "/public/images/story/2.jpg";
import sImg3 from "/public/images/story/3.jpg";
import shape from "/public/images/story/shape.png";
import Image from "next/image";

import date from "/public/images/story/date.png";
import date2 from "/public/images/story/date2.png";
import met from "/public/images/story/met.png";

const Storys = [
  {
    sImg: met,
    title: "First Time We Meet",
    date: "Feb 2019",
    description:
      "Lorem ipsum dolor sit amet, constetur adicng elit. Ultricies nulla mi tempus mcorper for praesent. Ultricies interdum volutpat morbi nam ornare neque elit leo, diam. Malesuada enim ac amurna tempor vel duis.",
  },
  {
    sImg: date,
    title: "Our First Date",
    date: "Sep 2019",
    description:
      "Lorem ipsum dolor sit amet, constetur adicng elit. Ultricies nulla mi tempus mcorper for praesent. Ultricies interdum volutpat morbi nam ornare neque elit leo, diam. Malesuada enim ac amurna tempor vel duis.",
  },
  {
    sImg: date2,
    title: "She Said Yes",
    date: "Mar 2023",
    description:
      "Lorem ipsum dolor sit amet, constetur adicng elit. Ultricies nulla mi tempus mcorper for praesent. Ultricies interdum volutpat morbi nam ornare neque elit leo, diam. Malesuada enim ac amurna tempor vel duis.",
  },
];

const StorySection = (props) => {
  return (
    <section
      className={`wpo-story-section section-padding ${props.stClass}`}
      id="story"
    >
      <div className="container-fluid">
        <SectionTitle
          subTitle={"Our Story"}
          MainTitle={"Our Sweet love story"}
        />
        <div className="wpo-story-wrap">
          {Storys.map((story, st) => (
            <div className="wpo-story-item" key={st}>
              <div className="wpo-story-img-wrap">
                <div className="wpo-story-img">
                  <Image src={story.sImg} alt="" />
                </div>
                <div className="wpo-img-shape">
                  <Image src={shape} alt="" />
                </div>
              </div>
              <div className="wpo-story-content">
                <div className="wpo-story-content-inner">
                  <h2>{story.title}</h2>
                  <span>{story.date}</span>
                  <p>{story.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StorySection;
