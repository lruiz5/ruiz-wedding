import React from "react";
import SectionTitle from "../SectionTitle";
import shape from "/public/images/story/shape.png";
import Image from "next/image";

const StorySection = (props) => {
  const { stories } = props;

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
          {stories.map((story, st) => (
            <div className="wpo-story-item" key={st}>
              <div className="wpo-story-img-wrap">
                <div className="wpo-story-img">
                  <Image
                    src={story.content.image.filename}
                    alt={story.content.image.id}
                    width={300}
                    height={300}
                  />
                </div>
                <div className="wpo-img-shape">
                  <Image src={shape} alt="" width={300} height={300} />
                </div>
              </div>
              <div className="wpo-story-content">
                <div className="wpo-story-content-inner">
                  <h2>{story.content.title}</h2>
                  <span>{story.content.date}</span>
                  <p>{story.content.description}</p>
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
