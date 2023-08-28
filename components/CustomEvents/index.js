import React from "react";
import SectionTitle from "../SectionTitle";
import Zoo from "/public/images/thingstodo/charlespaddockzoo.jpg";
import Naci from "/public/images/thingstodo/naci.jpg";
import Sensorio from "/public/images/thingstodo/sensorio.jpg";
import Bishop from "/public/images/thingstodo/bishops.jpg";
import Bubblegum from "/public/images/thingstodo/bubblegum.jpg";
import Pismo from "/public/images/thingstodo/pismo.jpg";
import Image from "next/image";
import Link from "next/link";

const Events = [
  {
    poster: Naci,
    title: "Lake Nacimiento",
    date: "",
    description:
      "From water sports to fishing and camping, Naci provides the perfect setting for a fun-filled stay.",
    link: "https://www.golakenaci.com/",
  },
  {
    poster: Zoo,
    title: "Charles Paddock Zoo",
    date: "",
    description: "Home of Menderu the Malayan tiger!",
    link: "https://charlespaddockzoo.org/",
  },
  {
    poster: Sensorio,
    title: "Sensorio",
    date: "",
    description:
      "A 15-acre light show on rolling hills with fiber-optic stemmed spheres that change colors.",
    link: "https://sensoriopaso.com/",
  },
];
const SecondaryEvents = [
  {
    poster: Pismo,
    title: "Pismo Beach",
    date: "",
    description: "15 minutes from SLO, perfect for a quick day trip!",
    link: "https://www.experiencepismobeach.com/",
  },
  {
    poster: Bishop,
    title: "Bishop Peak",
    date: "",
    description:
      "A 4 mile roundtrip HIKE with nearly 1,200' of climbing. Not easy, but worth it!",
    link: "https://www.hikespeak.com/trails/bishops-peak-san-luis-obispo-hike/",
  },
  {
    poster: Bubblegum,
    title: "Bubblegum Alley",
    date: "",
    description: "Get a photo with the infamous Bubblegum Alley!",
    link: "https://visitslo.com/things-to-do/attractions-and-entertainment/bubblegum-alley-san-luis-obispo/bubblegum-alley/",
  },
];

const CustomEventSection = (props) => {
  return (
    <section className="wpo-event-section section-padding pb-0" id="event">
      <div className="container">
        <SectionTitle
          subTitle={"Activities In The Area"}
          MainTitle={"Paso Robles"}
        />
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
                      <li>
                        <h4>{event.title}</h4>
                      </li>
                      <li>{event.date}</li>
                      <li>{event.description}</li>
                      <li>
                        <Link href={event.link} target="_blank">
                          Website
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <SectionTitle MainTitle={"San Luis Obispo"} />
        <div className="wpo-event-wrap">
          <div className="row">
            {SecondaryEvents.map((event, eitem) => (
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
                      <li>
                        <h4>{event.title}</h4>
                      </li>
                      <li>{event.date}</li>
                      <li>{event.description}</li>
                      <li>
                        <Link href={event.link} target="_blank">
                          Learn More
                        </Link>
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

export default CustomEventSection;
