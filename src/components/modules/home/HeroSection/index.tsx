import { Button } from "@/components/ui/button";
//import styles from "./HeroSection.module.css";

import Image from "next/image";
import banner_tag from "@/assets/banner_tag.webp";
import NMContainer from "@/components/ui/core/NMContainer";
import Link from "next/link";
import ref_pic from "@/assets/ref_pic.jpeg";

const HeroSection = () => {
  return (
    <NMContainer>
      <div className="relative bg-gradient-to-r from-purple-50 to-white border-2 border-white rounded-3xl overflow-hidden mt-10 shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center px-10 py-14">
          {/* Text Section */}
          <div className="text-center md:text-left">
            <h1 className="text-5xl font-extrabold leading-snug text-gray-800">
              Need<span className="text-purple-600"> Home??</span>
            </h1>
            <p className="mt-4 text-gray-600 text-lg">
              We’re here to guide you every step of the way. Find comfort,
              convenience, and a place to call your own.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <Link href="/register">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 py-6 text-base border-gray-400 text-gray-700 hover:bg-gray-100"
                >
                  Register
                </Button>
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex items-center justify-center">
            <Image
              src={banner_tag}
              alt="Black Friday Promo"
              className="w-full max-w-md object-contain"
            />
          </div>
        </div>
      </div>

      <section className="mt-16">
        <NMContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Get home recommendations
              </h2>
              <p className="text-gray-600 mb-4">
                Sign in for a more personalized experience.
              </p>

              <Link href="/login">
                <Button className="px-6 py-2 text-base">Sign in</Button>
              </Link>
            </div>
            <div className="flex justify-center">
              <Image
                src={ref_pic}
                alt="Recommended homes"
                className="w-full max-w-md rounded-xl shadow-lg"
              />
            </div>
          </div>
        </NMContainer>
      </section>
    </NMContainer>
  );
};

export default HeroSection;
