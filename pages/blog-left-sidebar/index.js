import React, { Fragment } from "react";
import { useRouter } from "next/router";
import BaseLayout from "../../components/shared/BaseLayout";
import BasePage from "../../components/shared/BasePage";
import blogs from "../../api/blogs";
import PageTitle from "../../components/pagetitle/PageTitle";
import BlogList from "../../components/BlogList/BlogList";

const submitHandler = (e) => {
  e.preventDefault();
};

const BlogSingle = (props) => {
  const router = useRouter();

  const BlogDetails = blogs.find((item) => item.slug === router.query.slug);

  return (
    <BaseLayout>
      <BasePage indexPage metaTitle="Ruiz Be Mine - Registry">
        <PageTitle pageTitle="Latest News" pagesub="blog" />
        <BlogList blLeft={"order-lg-1"} blRight={"order-lg-2"} />
      </BasePage>
    </BaseLayout>
  );
};
export default BlogSingle;
