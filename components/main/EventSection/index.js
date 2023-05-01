import React from "react";
import SectionTitle from "../../SectionTitle";
import Reception from "/public/images/event/reception.webp";
import Ceremony from "/public/images/event/ceremony.webp";
import SocialHour from "/public/images/event/socialhour.webp";
import LocationMap from "./Modal";
import Image from "next/image";

const Events = [
  {
    poster: Ceremony,
    title: "The Ceremony",
    date: "June 29, 2024 - 5:15 PM",
    location:
      "Villa San Juliette - 6385 Cross Canyons Rd, San Miguel, CA 93451",
    contact: "",
  },
  {
    poster: SocialHour,
    title: "Social Hour",
    date: "June 29, 2024 - 6:15 PM",
    location:
      "Villa San Juliette - 6385 Cross Canyons Rd, San Miguel, CA 93451",
    contact: "",
  },
  {
    poster: Reception,
    title: "The Reception",
    date: "June 29, 2024 - 7:30 PM",
    location:
      "Villa San Juliette - 6385 Cross Canyons Rd, San Miguel, CA 93451",
    contact: "",
  },
];

const EventSection = (props) => {
  return (
    <section className="wpo-event-section section-padding pb-0" id="event">
      <div className="container">
        <SectionTitle subTitle={"When & Where"} MainTitle={"When & Where"} />
        <div className="wpo-event-wrap">
          <div className="row">
            {Events.map((event, eitem) => (
              <div className="col col-lg-4 col-md-6 col-12" key={eitem}>
                <div className="wpo-event-item">
                  <div className="wpo-event-img">
                    <Image src={event.poster} alt="" />
                    <div className="title">
                      <h2>{event.title}</h2>
                    </div>
                  </div>
                  <div className="wpo-event-text">
                    <ul>
                      <li>{event.date}</li>
                      <li>{event.location}</li>
                      <li>{event.contact}</li>
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
