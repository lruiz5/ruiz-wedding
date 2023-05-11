import BaseLayout from "../../components/shared/BaseLayout";
import BasePage from "../../components/shared/BasePage";
import PageTitle from "../../components/pagetitle/PageTitle";
import PortfolioSection from "../../components/PortfolioSection";
import PartnerSection from "../../components/PartnerSection";

const PortfolioGridPage = (props) => {
  return (
    <BaseLayout>
      <BasePage indexPage metaTitle="Ruiz Be Mine - Galleria">
        <PageTitle pageTitle={"Sweet Memories"} pagesub={"Portfolio"} />
        <PortfolioSection mainComponent={true} pClass={"tb-padding"} />
        <PartnerSection pClass={"pb-120"} />
      </BasePage>
    </BaseLayout>
  );
};
export default PortfolioGridPage;
