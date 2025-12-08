import { useParams } from "react-router-dom";

export default function ProductPage() {
  const { id } = useParams();

  return (
    <div className="p-10 pt-32">
      <h1 className="text-3xl font-bold">Product #{id}</h1>
      <p className="mt-4 text-gray-600">
        This is the product details page.
      </p>
    </div>
  );
}
