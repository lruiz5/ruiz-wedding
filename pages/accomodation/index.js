import BaseLayout from "../../components/shared/BaseLayout";
import BasePage from "../../components/shared/BasePage";
import PageTitle from "../../components/pagetitle/PageTitle";
import WeddingDate from "../../components/main/WeddingDate";
import EventSection from "../../components/main/EventSection";
import PartnerSection from "../../components/PartnerSection";

const AccomodationPage = () => {
  return (
    <BaseLayout>
      <BasePage indexPage metaTitle="Ruiz Be Mine - Accomodation">
        <PageTitle pageTitle={"Accomodation"} pagesub={"Accomodation"} />
        <WeddingDate dtClass={"pt-120"} />
        <EventSection />
        <PartnerSection pClass={"section-padding"} />
      </BasePage>
    </BaseLayout>
  );
};
export default AccomodationPage;
