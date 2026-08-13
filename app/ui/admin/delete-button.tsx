import { deleteCampsite } from "@/app/lib/action";

type Props = {
  id: number;
};

export default function DeleteButton({ id }: Props) {
  const deleteAction = deleteCampsite.bind(null, id);

  return (
    <form action={deleteAction}>
      <button
        className="rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600"
      >
        Delete
      </button>
    </form>
  );
}