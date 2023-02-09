import SubmitCard from "../../components/ui/SubmitCard";

export default function Proverbs() {
  return (
    <section className="max-w-7xl mx-auto mt-3">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-xl uppercase">Proverbs</h3>
        <div className="flex items-center gap-3">
          <button className="p-2 bg-white text-black rounded font-semibold text-sm flex items-center justify-center">
            Prev
          </button>
          <span className="font-bold text-lg">4</span>
          <button className="p-2 bg-white text-black rounded font-semibold text-sm flex items-center justify-center">
            Next
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-3 mt-4">
        <SubmitCard />
        <SubmitCard />
        <SubmitCard />
        <SubmitCard />
        <SubmitCard />
        <SubmitCard />
        <SubmitCard />
      </div>
    </section>
  );
}
