import AdminCard from "../../components/ui/AdminCard";

export default function Admins() {
  return (
    <section className="max-w-7xl mx-auto mt-3">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-xl uppercase">Admins crud operations</h3>
        <button className="p-2 bg-gray-900 text-white hover:bg-gray-600 rounded font-semibold text-sm flex items-center justify-center">
          Fetch Admins
        </button>
      </div>
      <div className="flex flex-wrap gap-3 mt-4">
        <AdminCard />
        <AdminCard />
        <AdminCard />
        <AdminCard />
        <AdminCard />
        <AdminCard />
        <AdminCard />
      </div>
    </section>
  );
}
