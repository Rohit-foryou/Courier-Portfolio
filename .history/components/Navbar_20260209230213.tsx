import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-blue-600">
              Vandana<span className="text-gray-800">Airways</span>
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
            {["Home", "Services", "Why Choose Us", "Partners", "Contact"].map(
              (item) => (
                <Link
                  key={item}
                  href={item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s/g, "-")}`}
                  className="relative hover:text-blue-600 transition after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-orange-500 hover:after:w-full after:transition-all"
                >
                  {item}
                </Link>
              )
            )}
          </div>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="bg-orange-500 text-white px-6 py-2.5 rounded-md font-semibold hover:bg-orange-600 transition shadow-sm"
          >
Contact Us          </Link>
        </div>
      </div>
    </nav>
  );
}
