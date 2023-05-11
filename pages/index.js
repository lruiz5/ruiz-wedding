import React from "react";

import BaseLayout from "../components/shared/BaseLayout";
import BasePage from "../components/shared/BasePage";

import Hero from "../components/main/Hero";
import WeddingDate from "../components/main/WeddingDate";
import CoupleSection from "../components/main/CoupleSection";
import VideoSection from "../components/main/VideoSection";
import StorySection from "../components/main/StorySection";
import PortfolioSection from "../components/main/PortfolioSection";
import EventSection from "../components/main/EventSection";
import BlogSection from "../components/BlogSection/BlogSection";
import vimg from "/public/images/cta2.jpg";

const HomePage = () => {
  return (
    <div>
      <BaseLayout>
        <BasePage indexPage metaTitle="Ruiz Be Mine - Home">
          <Hero />
          <WeddingDate />
          <CoupleSection id={"couples-section"} />
          <VideoSection vimg={vimg} />
          <StorySection mainComponent={false} />
          <PortfolioSection
            mainComponent={false}
            prClass={"pb-0"}
            id={"galleria-section"}
          />
          <EventSection />
          <BlogSection />
        </BasePage>
      </BaseLayout>
    </div>
  );
};
export default HomePage;
