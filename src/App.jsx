import Home from "./pages/Home";
import { Navbar, Welcome, Footer, Services, Transactions } from "./components";
import HeroSection from "./components/Home/HeroSection";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layouts/Main";
import Bet from "./pages/Bet";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <div className="min-h-screen">
          <div className="gradient-bg-welcome">
            <Navbar />
            <HeroSection />
          </div>
          <Home />
          <Footer />
        </div>,
      },
      {
        path: "/bet",
        element: <div className="min-h-screen">
          <div className="gradient-bg-welcome">
            <Navbar />
            <Bet />
          </div>
          <Footer />
        </div>,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;