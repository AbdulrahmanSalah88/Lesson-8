import Header from "../comp/header";
import Footer from "../comp/footer";
import MainContent from '../comp/MainContent';
import { Helmet } from "react-helmet-async";



const Javacsript = () => {
  return (
    <>
    <Helmet>
        <title>Js page</title>
        <meta name="description" content="jjjjjjjjjjjjjjj" />
      </Helmet>
      <Header />
    <MainContent  task="Js Home" />
      <Footer />
    </>
  );
};

export default Javacsript;
