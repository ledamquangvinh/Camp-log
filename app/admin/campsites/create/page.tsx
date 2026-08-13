import Link from "next/link";
import { imageOptions } from "@/app/lib/image-options";
import { createCampsite } from "@/app/lib/action";

export default function CreateCampsitePage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-emerald-900">Create Campsite</h1>

        <p className="mt-2 text-gray-600">Add a new campsite to Camp Log.</p>
      </div>

      <form action={createCampsite} className="space-y-6 rounded-2xl bg-white p-6 shadow-lg">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block font-medium text-gray-700"
          >
            Campsite Name
          </label>

          <input
            id="name"
            name="name"
            type="text"
            placeholder="Núi Dinh"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
          />
        </div>

        <div>
          <label
            htmlFor="slug"
            className="mb-2 block font-medium text-gray-700"
          >
            Slug
          </label>

          <input
            id="slug"
            name="slug"
            type="text"
            placeholder="nui-dinh"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
          />
        </div>

        <div>
          <label
            htmlFor="location"
            className="mb-2 block font-medium text-gray-700"
          >
            Location
          </label>

          <input
            id="location"
            name="location"
            type="text"
            placeholder="Bà Rịa - Vũng Tàu"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
          />
        </div>

        <div>
          <label
            htmlFor="coverImage"
            className="mb-2 block font-medium text-gray-700"
          >
            Cover Image
          </label>

          <select name="coverImage">
            {imageOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="description"
            className="mb-2 block font-medium text-gray-700"
          >
            Description
          </label>

          <textarea
            id="description"
            name="description"
            rows={6}
            placeholder="Write about the campsite..."
            className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
          />
        </div>

        <div className="flex justify-end gap-3 border-t pt-6">
          <Link
            href="/admin"
            className="rounded-lg border border-gray-300 px-5 py-3 font-medium text-gray-700 transition hover:bg-gray-100"
          >
            Cancel
          </Link>

          <button
            type="submit"
            className="rounded-lg bg-emerald-600 px-5 py-3 font-medium text-white transition hover:bg-emerald-700"
          >
            Create Campsite
          </button>
        </div>
      </form>
    </main>
  );
}
