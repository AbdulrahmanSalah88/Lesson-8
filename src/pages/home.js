import Header from "../comp/header";
import Footer from "../comp/footer";
import MainContent from "../comp/MainContent";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="hhhhhhhhhhhhhhhhhhhh" />
      </Helmet>
      <Header />
      <MainContent task="Home page" />
      <Footer />
    </>
  );
};

export default Home;
