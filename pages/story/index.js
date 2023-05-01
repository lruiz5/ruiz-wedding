import BaseLayout from "../../components/shared/BaseLayout";
import BasePage from "../../components/shared/BasePage";
import PageTitle from "../../components/pagetitle/PageTitle";
import StorySection from "../../components/StorySection";

const StoryPage = () => {
  return (
    <BaseLayout>
      <BasePage indexPage metaTitle="Ruiz Be Mine - Our Story">
        <PageTitle pageTitle={"Our Story"} pagesub={"Story"} />
        <StorySection />
      </BasePage>
    </BaseLayout>
  );
};

export default StoryPage;
