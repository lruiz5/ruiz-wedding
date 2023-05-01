import BaseLayout from "../../components/shared/BaseLayout";
import BasePage from "../../components/shared/BasePage";
import Navbar from "../../components/main/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";
import PortfolioSection from "../../components/PortfolioSection";
import PartnerSection from "../../components/PartnerSection";
import Footer from "../../components/footer/Footer";
import Scrollbar from "../../components/scrollbar/scrollbar";

const PortfolioGridPage = (props) => {
  return (
    <BaseLayout>
      <BasePage indexPage metaTitle="Portfolio - Luis Ruiz">
        <PageTitle pageTitle={"Our Love Galleria"} pagesub={"Portfolio"} />
        <PortfolioSection pClass={"tb-padding"} />
        <PartnerSection pClass={"pb-120"} />
      </BasePage>
    </BaseLayout>
  );
};
export default PortfolioGridPage;
