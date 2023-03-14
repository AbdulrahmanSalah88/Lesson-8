import Header from "../comp/header";
import Footer from "../comp/footer";
import MainContent from "../comp/MainContent";
import { Helmet } from "react-helmet-async";

const Html = () => {
  return (
    <>
      <Helmet>
        <title>Html page</title>
        <meta name="description" content="hhhhhhhhhhhhhhhhhhhh" />
      </Helmet>

      <Header />
      <MainContent  task="Html Home" />
      <Footer />
    </>
  );
};

export default Html;
