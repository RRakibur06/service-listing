import Navbar from "../../components/Navbar";
import Newsletter from "../../components/Newsletter";
import Footer from "../../components/Footer";
const UnprotectedLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Newsletter />
      <Footer />
    </>
  );
};

export default UnprotectedLayout;
