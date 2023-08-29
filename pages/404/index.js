import React from "react";
import PageTitle from "../../components/pagetitle/PageTitle";
import Error from "../../components/404/404";
import Footer from "../../components/footer/Footer";
import Scrollbar from "../../components/scrollbar/scrollbar";

const StoryPage = (props) => {
  return (
    <div>
      <PageTitle pageTitle={"404"} pagesub={"404"} />
      <Error />
      <Footer />
      <Scrollbar />
    </div>
  );
};
export default StoryPage;
