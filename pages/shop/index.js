import React from "react";
import BaseLayout from "../../components/shared/BaseLayout";
import BasePage from "../../components/shared/BasePage";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import ShopProduct from "../../components/ShopProduct";

const wishes = [
  {
    vendor: "https://amazon.com",
    name: "Cookware Set",
    old_price: "210",
    price: "150",
    url: "https://via.placeholder.com/600/771796",
    thumbnailUrl: "https://via.placeholder.com/150/771796",
  },
  {
    vendor: "https://amazon.com",
    name: "Dinnerware Set",
    old_price: "120",
    price: "100",
    url: "https://via.placeholder.com/600/92c952",
    thumbnailUrl: "https://via.placeholder.com/150/92c952",
  },
  {
    vendor: "https://amazon.com",
    name: "Cookware Set",
    old_price: "210",
    price: "150",
    url: "https://via.placeholder.com/600/771796",
    thumbnailUrl: "https://via.placeholder.com/150/771796",
  },
  {
    vendor: "https://amazon.com",
    name: "Bedding Set",
    old_price: "105",
    price: "80",
    url: "https://via.placeholder.com/600/24f355",
    thumbnailUrl: "https://via.placeholder.com/150/24f355",
  },
  {
    vendor: "https://amazon.com",
    name: "Kitchen Mixer",
    old_price: "250",
    price: "200",
    url: "https://via.placeholder.com/600/f66b97",
    thumbnailUrl: "https://via.placeholder.com/150/f66b97",
  },
  {
    vendor: "https://amazon.com",
    name: "Cookware Set",
    old_price: "210",
    price: "150",
    url: "https://via.placeholder.com/600/771796",
    thumbnailUrl: "https://via.placeholder.com/150/771796",
  },
];

const ShopPage = () => {
  return (
    <BaseLayout>
      <BasePage indexPage metaTitle="Ruiz Be Mine - Registry">
        <PageTitle pageTitle={"Shop"} pagesub={"Shop"} />
        <section className="wpo-shop-page section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <ShopProduct products={wishes} />
              </div>
            </div>
          </div>
        </section>
        <Scrollbar />
      </BasePage>
    </BaseLayout>
  );
};

export default ShopPage;
