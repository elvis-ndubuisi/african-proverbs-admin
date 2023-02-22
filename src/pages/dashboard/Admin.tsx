import { profile } from "../../services/admin.service";
import { useLoaderData } from "react-router-dom";

export default function Admin() {
  return (
    <section className="max-w-7xl mx-auto mt-3">
      <h2 className="text-2xl font-bold text-center">Name of admin</h2>
      <p className="text-center">provictor.ie@gmail.com</p>
      <p className="text-center">provictor.ie@gmail.com</p>
      <p className="text-center">provictor.ie@gmail.com</p>
    </section>
  );
}

export function adminLoader() {
  return profile();
}
