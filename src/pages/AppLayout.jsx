import { Outlet } from "react-router-dom";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";

function AppLayout() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Navbar />
      <main className="flex-1 bg-gray-50 px-20 py-5 pt-32">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
