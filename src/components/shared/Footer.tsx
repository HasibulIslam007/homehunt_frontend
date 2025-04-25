//import Logo from "@/app/assets/svgs/Logo";
import { Facebook, Instagram, X } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/products", label: "App Products" },
    { href: "/about", label: "About Us" },
    { href: "/testimonial", label: "Testimonial" },
    { href: "/blogs", label: "Blogs" },
    { href: "/contact", label: "Contact Us" },
  ];

  const socialLinks = [
    { href: "#", icon: Facebook },
    { href: "#", icon: Instagram },
    { href: "#", icon: X },
  ];

  return (
    <footer className="bg-gray-50 py-20 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Logo and Description */}
        <div className="space-y-4">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <h1 className="text-2xl font-black">homeHunt</h1>
          </div>
          <p className="text-gray-600 text-sm">
            Want a space that feel like home?Check on us. <br />
            No need to find your home all alone... <br />
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">
            Quick Links
          </h3>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">
            Follow Us
          </h3>
          <div className="flex justify-center md:justify-start gap-4">
            {socialLinks.map(({ href, icon: Icon }, index) => (
              <Link
                href={href}
                key={index}
                className="text-gray-600 hover:text-purple-600 transition-colors"
              >
                <Icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-gray-400 mt-10">
        © {new Date().getFullYear()} HomeHunt. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
