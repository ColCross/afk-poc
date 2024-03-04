import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { bgg } from "bgg-sdk";

export const loader = async () => {
  const items = await bgg.hot()
  return json({ items });
};

export default function NoteIndexPage() {
  const { items } = useLoaderData<typeof loader>();

  return items.map((item, index) => {
    return (
      <div key={`${item.id}-${index}`}>
        <img src={item.thumbnail} alt={item.name} />
        <p>
          <strong>Name:</strong> {item.name}
        </p>
        <p>
          <strong>Rank:</strong> {item.rank}
        </p>
        <p>
          <strong>Year Published:</strong> {item.yearpublished}
        </p>
      </div>
    );
  });

  // <p>
  //   No note selected. Select a note on the left, or{" "}
  //   <Link to="new" className="text-blue-500 underline">
  //     create a new note.
  //   </Link>
  // </p>
}
