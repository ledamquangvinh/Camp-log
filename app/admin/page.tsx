import { fetchCampsites } from "@/app/lib/data";
import Link from "next/link";
import { deleteCampsite } from "../lib/action";
import DeleteButton from "../ui/admin/delete-button";

export default async function AdminPage() {
  const campsites = await fetchCampsites();

  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-emerald-900">
            Admin Dashboard
          </h1>

          <p className="mt-1 text-gray-600">
            Manage campsites
          </p>
        </div>

        <Link
          href="/admin/campsites/create"
          className="rounded-lg bg-emerald-600 px-5 py-3 font-medium text-white hover:bg-emerald-700"
        >
          + Add Campsite
        </Link>
      </div>

      <div className="space-y-4">
        {campsites.map((camp) => (
          <div
            key={camp.id}
            className="flex items-center justify-between rounded-xl border bg-white p-5 shadow-sm"
          >
            <div>
              <h2 className="text-lg font-semibold text-emerald-900">
                {camp.name}
              </h2>

              <p className="text-sm text-gray-500">
                {camp.location}
              </p>
            </div>

            <div className="flex gap-3">
              <Link
                href={`/admin/campsites/${camp.id}/edit`}
                className="rounded-lg bg-amber-400 px-4 py-2 font-medium"
              >
                Edit
              </Link>

              <DeleteButton id={camp.id}/>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}