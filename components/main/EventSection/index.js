import React from "react";
import SectionTitle from "../../SectionTitle";
import LocationMap from "./Modal";
import Image from "next/image";

const EventSection = (props) => {
  const { info } = props;

  return (
    <section className="wpo-event-section section-padding pb-0" id="event">
      <div className="container">
        <SectionTitle subTitle={"When & Where"} MainTitle={"When & Where"} />
        <div className="wpo-event-wrap">
          <div className="row">
            {info.map((event, eitem) => (
              <div className="col col-lg-4 col-md-6 col-12" key={eitem}>
                <div className="wpo-event-item">
                  <div className="wpo-event-img">
                    <Image
                      src={event.content.image.filename}
                      width={300}
                      height={300}
                      alt={event.content.image.id}
                    />
                    <div className="title">
                      <h2>{event.content.title}</h2>
                    </div>
                  </div>
                  <div className="wpo-event-text">
                    <ul>
                      <li>{event.content.date}</li>
                      <li>{event.content.location}</li>
                      <li>{event.content.contact}</li>
                      <li>
                        <LocationMap />
                      </li>
                    </ul>
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

export default EventSection;
