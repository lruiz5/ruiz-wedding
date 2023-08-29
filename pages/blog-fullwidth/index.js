import React from "react";
import { useRouter } from "next/router";
import BasePage from "../../components/shared/BasePage";
import BaseLayout from "../../components/shared/BaseLayout";
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
      <BasePage indexPage metaTitle="Ruiz Be Mine - Blog Left Sidebar">
        <PageTitle pageTitle="Latest News" pagesub="blog" />
        <BlogList blLeft={"d-none"} blRight={"col-lg-10 offset-lg-1"} />
      </BasePage>
    </BaseLayout>
  );
};
export default BlogSingle;
