import BaseLayout from "../../components/shared/BaseLayout";
import BasePage from "../../components/shared/BasePage";
import PageTitle from "../../components/pagetitle/PageTitle";
import PartnerSection from "../../components/PartnerSection";
import WeddingParty from "../../components/main/WeddingParty";

const BrideGroomsPage = () => {
  return (
    <BaseLayout>
      <BasePage indexPage metaTitle="Ruiz Be Mine - Wedding Party">
        <PageTitle
          pageTitle={"Wedding Party"}
          pagesub={"Bridesmaid & Groomsman"}
        />
        <WeddingParty />
        {/* <PartnerSection pClass={"pb-120"} /> */}
      </BasePage>
    </BaseLayout>
  );
};

export default BrideGroomsPage;
