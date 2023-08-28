import React from "react";

import BaseLayout from "../components/shared/BaseLayout";
import BasePage from "../components/shared/BasePage";
import Hero from "../components/main/Hero";
import WeddingDate from "../components/main/WeddingDate";
import CoupleSection from "../components/main/CoupleSection";
import StorySection from "../components/main/StorySection";
import PortfolioSection from "../components/main/PortfolioSection";
import EventSection from "../components/main/EventSection";
import { fetchContent } from "./api/content";

const HomePage = (props) => {
  const {
    heroSlider,
    weddingInfo,
    coupleInfo,
    coupleStory,
    eventInfo,
    defaultPortfolio,
  } = props;

  return (
    <div>
      <BaseLayout>
        <BasePage indexPage metaTitle="Ruiz Be Mine - Home">
          <Hero images={heroSlider} />
          <WeddingDate info={weddingInfo[0].content} />
          <CoupleSection info={coupleInfo[0].content} id={"couples-section"} />
          <StorySection stories={coupleStory} mainComponent={false} />
          <PortfolioSection
            portfolio={defaultPortfolio}
            mainComponent={false}
            prClass={"pb-0"}
            id={"galleria-section"}
          />
          <EventSection info={eventInfo} />
        </BasePage>
      </BaseLayout>
    </div>
  );
};
export const getStaticProps = async () => {
  const heroSlides = await fetchContent("hero-slider");
  const weddingInfo = await fetchContent("wedding-info");
  const coupleInfo = await fetchContent("couple-info");
  const coupleStory = await fetchContent("couple-story");
  const defaultPortfolio = await fetchContent("portfolios");
  const eventInfo = await fetchContent("event-info");

  return {
    props: {
      heroSlider: heroSlides.stories,
      weddingInfo: weddingInfo.stories,
      coupleInfo: coupleInfo.stories,
      coupleStory: coupleStory.stories,
      defaultPortfolio: defaultPortfolio.stories[0].content.portfolio,
      eventInfo: eventInfo.stories,
    },
    /* revalidate: 21600, // revalidate every 6 hr */
  };
};

export default HomePage;
