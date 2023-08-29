import React from "react";
import SectionTitle from "../SectionTitle";
import shape from "/public/images/story/shape.png";
import Image from "next/image";

const StorySection = (props) => {
  return (
    <section
      className={`wpo-story-section section-padding ${props.stClass}`}
      id="story"
    >
      <div className="container-fluid">
        {!props.mainComponent && (
          <SectionTitle
            subTitle={"Our Story"}
            MainTitle={"Our Sweet love story"}
          />
        )}
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
