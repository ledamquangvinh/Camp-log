import { fetchCampsiteById } from "@/app/lib/data";
import { imageOptions } from "@/app/lib/image-options";
import Link from "next/link";
import { updateCampsite } from "@/app/lib/action";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditCampsitePage({ params }: Props) {
  const { id } = await params;
  const campsite = await fetchCampsiteById(Number(id));
  const updateCampsiteWithId = updateCampsite.bind(null, campsite.id);

  if (!campsite) {
    return <h1>Campsite not found.</h1>;
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-emerald-900">Edit Campsite</h1>

        <p className="mt-2 text-gray-600">Update campsite information.</p>
      </div>

      <form
        action={updateCampsiteWithId}
        className="space-y-6 rounded-2xl bg-white p-6 shadow-lg"
      >
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
            defaultValue={campsite.name}
            className="w-full rounded-lg border border-gray-300 px-4 py-3"
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
            defaultValue={campsite.slug}
            className="w-full rounded-lg border border-gray-300 px-4 py-3"
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
            defaultValue={campsite.location}
            className="w-full rounded-lg border border-gray-300 px-4 py-3"
          />
        </div>

        <div>
          <label
            htmlFor="coverImage"
            className="mb-2 block font-medium text-gray-700"
          >
            Cover Image
          </label>

          <select
            id="coverImage"
            name="coverImage"
            defaultValue={campsite.coverImage}
            className="w-full rounded-lg border border-gray-300 px-4 py-3"
          >
            {imageOptions.map((image) => (
              <option key={image.value} value={image.value}>
                {image.label}
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
            defaultValue={campsite.description}
            className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3"
          />
        </div>

        <div className="flex justify-end gap-3 border-t pt-6">
          <Link
            href="/admin"
            className="rounded-lg border border-gray-300 px-5 py-3 font-medium text-gray-700 hover:bg-gray-100"
          >
            Cancel
          </Link>

          <button
            type="submit"
            className="rounded-lg bg-emerald-600 px-5 py-3 font-medium text-white hover:bg-emerald-700"
          >
            Save Changes
          </button>
        </div>
      </form>
    </main>
  );
}
