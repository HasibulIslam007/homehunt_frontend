import { Button } from "@/components/ui/button";
import { IProduct } from "../../../../../types/product";
import { Star, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProductDetails = ({ product }: { product: IProduct }) => {
  const fallbackImage = "/windows.svg";

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
        {/* Image Gallery Section */}
        <div className="space-y-4">
          {/* Main Image */}
          <div className="relative aspect-square rounded-xl overflow-hidden border">
            <Image
              src={product?.imageUrls?.[0]?.trim() || fallbackImage}
              alt="Main product image"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Thumbnail Grid */}
          <div className="grid grid-cols-3 gap-3">
            {[0, 1, 2].map((idx) => (
              <div
                key={idx}
                className="relative aspect-square rounded-md overflow-hidden border"
              >
                <Image
                  src={product?.imageUrls?.[idx]?.trim() || fallbackImage}
                  alt={`Thumbnail ${idx + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info Section */}
        <div className="space-y-6">
          {/* Title and Basic Info */}
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              {product?.name}
            </h1>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex items-center text-amber-500">
                <Star className="w-4 h-4 fill-current" />
                <span className="ml-1 text-gray-600">
                  {product?.averageRating || "No ratings"}
                </span>
              </div>
              <span className="text-gray-400">•</span>
              <span className="text-gray-600">{product?.location}</span>
            </div>
          </div>

          {/* Price Section */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-orange-500">
                {product?.rent} BDT
              </span>
              <span className="text-gray-500">/month</span>
            </div>
          </div>

          {/* Contact Button */}
          <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
            <Phone className="w-5 h-5 text-blue-600" />
            <div>
              <p className="text-sm text-gray-500">Contact number</p>
              <p className="font-medium text-blue-600">
                {product?.phone_number || "Not provided"}
              </p>
            </div>
          </div>

          {/* Property Details */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-sm text-gray-500">Rooms</p>
              <p className="font-medium">{product?.rooms || "-"}</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-sm text-gray-500">Bathrooms</p>
              <p className="font-medium">{product?.bathrooms || "-"}</p>
            </div>
          </div>

          {/* Description */}
          <div className="pt-4 border-t">
            <h3 className="font-medium text-gray-900 mb-2">Description</h3>
            <p className="text-gray-600">
              {product?.description || "No description provided"}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <Button className="flex-1 bg-orange-500 hover:bg-orange-600">
              Contact Now
            </Button>
            <Link href="/cart" className="flex-1">
              <Button variant="outline" className="w-full">
                Save Property
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
