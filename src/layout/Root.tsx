import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import Footer from "../components/Footer";

export default function Root() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-neutral-900">
      <MainNavigation />
      <main className="flex-1 grid max-w-screen-2xl px-2 bg-gray-50 py-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
