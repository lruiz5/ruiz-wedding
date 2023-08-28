import BaseLayout from "../../components/shared/BaseLayout";
import BasePage from "../../components/shared/BasePage";
import PageTitle from "../../components/pagetitle/PageTitle";
import CustomEventSection from "../../components/CustomEvents";
import PartnerSection from "../../components/PartnerSection";

const ThingsToDoPage = () => {
  return (
    <BaseLayout>
      <BasePage indexPage metaTitle="Ruiz Be Mine - Accomodation">
        <PageTitle
          pageTitle={"Things To Do"}
          pagesub={"Activities In The Area"}
        />
        <CustomEventSection />
        <PartnerSection pClass={"section-padding"} />
      </BasePage>
    </BaseLayout>
  );
};
export default ThingsToDoPage;
