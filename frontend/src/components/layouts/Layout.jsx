import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();

  const landingRoutes = ["/landingpage"];
  const isLanding = landingRoutes.includes(location.pathname);

  return (
    <div className="min-h-screen flex flex-col bookly-bg text-white transition-all duration-300">

      {/* Navbar */}
      <div
        className={`w-full z-50 border-b border-white/10 backdrop-blur-md transition-all duration-300
          ${isLanding ? "fixed top-0 left-0 bg-black/50" : "relative bg-black"}
        `}
      >
        <Navbar />
      </div>

      {/* Main content */}
      <main
        className={`flex-1 px-4 md:px-10 transition-all duration-300
          ${isLanding ? "mt-20 mb-20" : "mt-6"}
        `}
      >
        <Outlet />
      </main>

      {/* Footer */}
      {isLanding ? (
        <div className="fixed bottom-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md border-t border-white/10 py-6 text-center transition-all duration-300">
          <Footer />
        </div>
      ) : (
        <footer className="w-full bg-black border-t border-white/10 py-6 text-center">
          <Footer />
        </footer>
      )}
    </div>
  );
};

export default Layout;
