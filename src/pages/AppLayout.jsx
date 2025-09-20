import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";

function AppLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex min-h-dvh flex-col">
      <Navbar />
      <main className="flex-1 bg-gray-50 px-5 py-5 pt-32 md:px-20 dark:bg-gray-950">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
