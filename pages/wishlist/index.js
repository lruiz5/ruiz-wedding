import React from "react";
import BaseLayout from "../../components/shared/BaseLayout";
import BasePage from "../../components/shared/BasePage";
import PageTitle from "../../components/pagetitle/PageTitle";
import Link from "next/link";
import Scrollbar from "../../components/scrollbar/scrollbar";

const wishes = [
  {
    vendor: "https://amazon.com",
    name: "Dinnerware Set",
    price: "100",
    url: "https://via.placeholder.com/600/92c952",
    thumbnailUrl: "https://via.placeholder.com/150/92c952",
  },
  {
    vendor: "https://amazon.com",
    name: "Cookware Set",
    price: "150",
    url: "https://via.placeholder.com/600/771796",
    thumbnailUrl: "https://via.placeholder.com/150/771796",
  },
  {
    vendor: "https://amazon.com",
    name: "Bedding Set",
    price: "80",
    url: "https://via.placeholder.com/600/24f355",
    thumbnailUrl: "https://via.placeholder.com/150/24f355",
  },
  {
    vendor: "https://amazon.com",
    name: "Kitchen Mixer",
    price: "200",
    url: "https://via.placeholder.com/600/f66b97",
    thumbnailUrl: "https://via.placeholder.com/150/f66b97",
  },
];

const WishlistPage = () => {
  return (
    <BaseLayout>
      <BasePage indexPage metaTitle="Ruiz Be Mine - Wishlist">
        <PageTitle pageTitle={"Wishlist"} pagesub={"Wishlist"} />
        <div className="cart-area section-padding">
          <div className="container">
            <div className="form">
              <div className="cart-wrapper">
                <div className="row">
                  <div className="col-12">
                    <form action="cart">
                      <table className="table-responsive cart-wrap">
                        <thead>
                          <tr>
                            <th className="images images-b">Image</th>
                            <th className="product-2">Product Name</th>
                            <th className="ptice">Price</th>
                            <th className="pr">Stock Status</th>
                            <th className="remove remove-b">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {wishes &&
                            wishes.length > 0 &&
                            wishes.map((wish, crt) => (
                              <tr key={crt}>
                                <td className="images">
                                  <img src={wish.thumbnailUrl} alt="" />
                                </td>
                                <td className="product">
                                  <ul>
                                    <li className="first-cart">{wish.name} </li>
                                    {/* <li>Brand : {wish.brand}</li>
                                    <li>Size : {wish.size}</li> */}
                                  </ul>
                                </td>
                                <td className="ptice">${wish.price}</td>
                                <td className="stock">{wish.stock}</td>
                                <td className="action">
                                  <ul>
                                    <li className="c-btn">
                                      <Link
                                        href={wish.vendor}
                                        className="c-btn"
                                        target="_blank"
                                      >
                                        <i className="fi flaticon-shopping-cart"></i>
                                      </Link>
                                    </li>
                                  </ul>
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Scrollbar />
      </BasePage>
    </BaseLayout>
  );
};
export default WishlistPage;
