import BaseLayout from "../../components/shared/BaseLayout";
import BasePage from "../../components/shared/BasePage";
import PageTitle from "../../components/pagetitle/PageTitle";
import WeddingDate from "../../components/main/WeddingDate";
import EventSection from "../../components/main/EventSection";
import PartnerSection from "../../components/PartnerSection";
import LodgingSection from "../../components/main/LodgingSection/LodgingSection";

const AccomodationPage = () => {
  return (
    <BaseLayout>
      <BasePage indexPage metaTitle="Ruiz Be Mine - Accomodation">
        <LodgingSection />
      </BasePage>
    </BaseLayout>
  );
};
export default AccomodationPage;
