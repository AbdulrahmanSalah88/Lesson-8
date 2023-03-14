import Header from "../comp/header";
import Footer from "../comp/footer";
import MainContent from '../comp/MainContent';
import { Helmet } from "react-helmet-async";



const Css = () => {
  return (
    <>
    <Helmet>
        <title>Css page</title>
        <meta name="description" content="lorem Css" />
      </Helmet>
      <Header />
      <MainContent  task="Css Home" />
      <Footer />
    </>
  );
};
export default Css;
