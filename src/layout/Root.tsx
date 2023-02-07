import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import Footer from "../components/Footer";

export default function Root() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-stone-800 font-medium">
      <MainNavigation />
      <main className="flex-1 grid max-w-screen-2xl px-2">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
