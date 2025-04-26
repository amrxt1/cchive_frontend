import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";
import AppRoutes from "./router/AppRoutes";

const App = () => {
  return (
    <div>
      <Navbar />
      <AppRoutes />
      <Footer />
    </div>
  );
};

export default App;
