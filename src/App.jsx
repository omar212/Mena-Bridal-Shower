import BridalShowerRSVP from "./BridalShowerRSVP/BridalShowerRSVP";
import BridalShowerInvitation from "./BridalShowerInvitation/BridalShowerInvitation";
import BridalShowerRegistry from "./BridalShowerRegistry/BridalShowerRegistry";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import "./App.css";

const App = () => {
  
  return (
    <div className="App">
      <Header />
      <BridalShowerInvitation />
      <BridalShowerRSVP />
      <BridalShowerRegistry />
      <Footer />
    </div>
  );
};

export default App;