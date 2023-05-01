import Footer from "../main/Footer";
import Header from "../main/Header";
import { ToastContainer } from "react-toastify";
import Scrollbar from "../scrollbar/scrollbar";

const BaseLayout = (props) => {
  const { className, children } = props;
  return (
    <div className="layout-container">
      <Header />
      <main className={`cover ${className}`}>
        <div className="wrapper">{children}</div>
      </main>
      <Footer />
      <Scrollbar />
      <ToastContainer />
    </div>
  );
};

export default BaseLayout;
