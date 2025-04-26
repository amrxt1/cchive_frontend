import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";
import AppRoutes from "./router/AppRoutes";

const App = () => {
  return (
    <>
      <Navbar />
      <AppRoutes />
      <Footer />
    </>
  );
};

export default App;
