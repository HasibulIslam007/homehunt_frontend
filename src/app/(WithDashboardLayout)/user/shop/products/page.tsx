import ManageProducts from "@/components/modules/shop/product";
import { getAllProducts } from "@/services/Product";

const ManageProductsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) => {
  const { page } = await searchParams;

  const { result: data, meta } = await getAllProducts(page); // <-- fixed here
  return (
    <div>
      <ManageProducts products={data} meta={meta} />
    </div>
  );
};

export default ManageProductsPage;

// "use client";

// import { useEffect, useState } from "react";
// import ManageProducts from "@/components/modules/shop/product";
// import { getAllProducts } from "@/services/Product";

// export default function ManageProductsPage() {
//   const [products, setProducts] = useState([]);
//   const [meta, setMeta] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const { result, meta } = await getAllProducts("1"); // default page = 1
//         setProducts(result);
//         setMeta(meta);
//       } catch (err) {
//         console.error("Error fetching products:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) return <p>Loading products...</p>;

//   return (
//     <div>
//       <ManageProducts products={products} meta={meta} />
//       <p>Products loaded!</p>
//     </div>
//   );
// }
// app/user/shop/products/page.tsx

// app/user/shop/products/page.tsx

// import ManageProducts from "@/components/modules/shop/product";
// import { getAllProducts } from "@/services/Product";

// export const dynamic = "force-dynamic"; // ⬅️ forces fresh fetch every time

// const ManageProductsPage = async ({
//   searchParams,
// }: {
//   searchParams?: { page?: string };
// }) => {
//   const page = searchParams?.page ?? "1";

//   const { result: data, meta } = await getAllProducts(page); // <- this will now revalidate
//   return (
//     <div>
//       <ManageProducts products={data} meta={meta} />
//     </div>
//   );
// };

// export default ManageProductsPage;
