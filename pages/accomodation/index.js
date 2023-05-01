import BaseLayout from "../../components/shared/BaseLayout";
import BasePage from "../../components/shared/BasePage";
import CoupleSection from "../../components/main/CoupleSection";
import PageTitle from "../../components/pagetitle/PageTitle";
import WeddingDate from "../../components/main/WeddingDate";
import EventSection from "../../components/main/EventSection";
import VideoSection2 from "../../components/VideoSection2";
import vimg from "/public/images/cta2.jpg";
import PartnerSection from "../../components/PartnerSection";

const AccomodationPage = () => {
  return (
    <BaseLayout>
      <BasePage indexPage metaTitle="Ruiz Be Mine - Accomodation">
        <PageTitle pageTitle={"Accomodation"} pagesub={"Accomodation"} />
        <WeddingDate dtClass={"pt-120"} />
        <CoupleSection cClass={"pt-160"} />
        <VideoSection2 vimg={vimg} />
        <EventSection />
        <PartnerSection pClass={"section-padding"} />
      </BasePage>
    </BaseLayout>
  );
};
export default AccomodationPage;
