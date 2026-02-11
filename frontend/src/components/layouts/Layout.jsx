import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();

  // Landing page = "/"
  const isLanding = location.pathname === "/";

  return (
    <div className="relative min-h-screen overflow-hidden bg-white text-gray-800">

      {/* Global Background */}
      <div
        className="absolute inset-0 z-[-1] bg-white
        bg-[radial-gradient(100%_50%_at_50%_0%,rgba(112,224,0,0.18)_0%,rgba(112,224,0,0.08)_40%,rgba(255,255,255,1)_100%)]"
      />

      {/* Navbar */}
      <div className={`${isLanding ? "pt-0" : "pt-2"}`}>
        <Navbar />
      </div>

      {/* Main Content */}
      <main className="flex-1 px-4 md:px-10 pt-20">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
