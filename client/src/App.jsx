import Home from "./pages/Home";
import { Navbar, Welcome, Footer, Services, Transactions } from "./components";
import HeroSection from "./components/Home/HeroSection";

const App = () => (
  <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar />
      <HeroSection />
    </div>
    <Home />
    <Footer />
  </div>
);

export default App;