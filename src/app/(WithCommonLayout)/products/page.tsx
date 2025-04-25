import AllProducts from "@/components/modules/products";
import ProductBanner from "@/components/modules/products/banner";

import NMContainer from "@/components/ui/core/NMContainer";

import { getAllProducts } from "@/services/Product";

const AllProductsPage = async () => {
  //const { data: products } = await getAllProducts();
  const { result: products } = await getAllProducts();

  return (
    <NMContainer>
      <ProductBanner title="Find your Home" path="" />
      <h2 className="text-xl font-bold my-5">Featured Collection </h2>
      <div className="grid grid-cols-6 gap-6"></div>
      <AllProducts products={products} />
    </NMContainer>
  );
};

export default AllProductsPage;
