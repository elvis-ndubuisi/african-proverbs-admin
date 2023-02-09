import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import Footer from "../components/Footer";

export default function Root() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-gray-50">
      <MainNavigation />
      <main className="flex-1 grid max-w-screen-2xl px-2 bg-white/5 py-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
