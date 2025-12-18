import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bookly-bg text-white">

      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
        <Navbar />
      </div>

      {/* Page content */}
      <main className="flex-1 mt-20 px-4 md:px-10">
        <Outlet />  
      </main>

      {/* Footer */}
      <footer className="w-full bg-black/50 backdrop-blur-md border-t border-white/10 py-6 text-center">
        <Footer />
      </footer>

    </div>
  );
};

export default Layout;
