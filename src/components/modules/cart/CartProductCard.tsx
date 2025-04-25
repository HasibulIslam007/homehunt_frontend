import { Button } from "@/components/ui/button";

import { IProduct } from "../../../../types/product";
import { Trash } from "lucide-react";
import Image from "next/image";
import { useAppDispatch } from "@/redux/hooks";
import { removeProduct } from "@/redux/features/cartSlice";

export default function CartProductCard({ product }: { product: IProduct }) {
  const dispatch = useAppDispatch();

  const handleRemoveProduct = (id: string) => {
    dispatch(removeProduct(id));
  };

  return (
    <div className="bg-white rounded-lg flex p-5 gap-5">
      <div className="h-full w-32 rounded-md overflow-hidden">
        <Image
          src={product?.imageUrls?.[0]}
          height={200}
          width={200}
          alt="product"
          className="aspect-square object-cover"
        />
      </div>
      <div className="flex flex-col justify-between flex-grow">
        <h1 className="text-xl font-semibold">{product?.location}</h1>
        <div className="flex gap-5 my-2">
          <p>
            <span className="text-gray-500">Rooms</span>{" "}
            <span className="font-semibold">{product?.rooms}</span>
          </p>
        </div>

        <hr className="my-1" />
        <div className="flex items-center justify-between">
          <h2>
            Price:
            {product.rent ? product.rent : product.rent}
          </h2>
          <div className="flex items-center gap-2">
            <Button
              onClick={() => handleRemoveProduct(product._id)}
              variant="outline"
              className="size-8 rounded-sm"
            >
              <Trash className="text-red-500/50" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
