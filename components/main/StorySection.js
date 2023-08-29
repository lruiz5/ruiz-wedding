import React from "react";
import SectionTitle from "../SectionTitle";
import shape from "/public/images/story/shape.png";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { fetchStory } from "../../slices/storySlice";
import { useEffect } from "react";

const StorySection = (props) => {
  const { story, error, loading } = useSelector((state) => state.story);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStory());
  }, []);

  return (
    <section
      className={`wpo-story-section ${
        !props.mainComponent && "section-padding"
      } ${props.stClass}`}
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
          {story.map((chapter, st) => (
            <div className="wpo-story-item" key={st}>
              <div className="wpo-story-img-wrap">
                <div className="wpo-story-img">
                  <Image
                    src={chapter.content.image.filename}
                    alt={chapter.content.image.id}
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
                  <h2>{chapter.content.title}</h2>
                  <span>{chapter.content.date}</span>
                  <p>{chapter.content.description}</p>
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
