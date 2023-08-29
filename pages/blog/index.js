import BaseLayout from "../../components/shared/BaseLayout";
import BasePage from "../../components/shared/BasePage";
import { useRouter } from "next/router";
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
      <BasePage indexPage metaTitle="Ruiz Be Mine - Blogs">
        <PageTitle pageTitle="Latest News" pagesub="blog" />
        <BlogList />
      </BasePage>
    </BaseLayout>
  );
};
export default BlogSingle;
