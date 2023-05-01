import Head from "next/head";
import { useRouter } from "next/router";
import { Fragment } from "react";

const BasePage = (props) => {
  const router = useRouter();
  const {
    indexPage,
    noWrapper,
    children,
    className = "",
    metaTitle = "Ruiz Be Mine - Our Wedding",
    metaDescription = "Ruiz Wedding 2024",
    canonicalPath,
  } = props;

  const pageType = indexPage ? "index-page" : "base-page";
  const Wrapper = Fragment;
  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" key="description" content={metaDescription} />
        <meta name="title" key="title" content={metaTitle} />
        <meta property="og:title" key="og:title" content={metaTitle} />
        <meta property="og:locale" key="og:locale" content="en_US" />
        <meta
          property="og:url"
          key="og:url"
          content={`${process.env.BASE_URL}${router.asPath}`}
        />
        <meta property="og:type" key="og:type" content="website" />
        <meta
          property="og:description"
          key="og:description"
          content={metaDescription}
        />
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
        <link
          rel="canonical"
          href={`${process.env.BASE_URL}${
            canonicalPath ? canonicalPath : router.asPath
          }`}
        />
      </Head>
      <div className={`${pageType} ${className}`}>
        <Wrapper>{children}</Wrapper>
      </div>
    </>
  );
};

export default BasePage;
