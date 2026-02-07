import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo / Brand */}
        <div className="text-xl font-bold text-blue-600">
          Courier Portfolio
        </div>

        {/* Navigation Links */}
        <div className="flex gap-6 text-gray-700 font-medium">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/why-choose-us">Why Choose Us</Link>
          <Link href="/partners">Partners</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
