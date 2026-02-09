import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand / About */}
          <div>
            <h3 className="text-xl font-bold text-blue-600">
              Vandana<span className="text-gray-800">Airways</span>
            </h3>
            <p className="mt-4 text-gray-600 text-sm">
              We act as a trusted middleman connecting customers with reliable
              courier partners, including India Post, to deliver fast and
              cost-effective logistics solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2 text-gray-600 text-sm">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/why-choose-us">Why Choose Us</Link></li>
              <li><Link href="/partners">Partners</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900">
              Contact
            </h4>
            <ul className="mt-4 space-y-2 text-gray-600 text-sm">
              <li>📞 +91-8383866968</li>
              <li>✉️ akhileshpr125@gmail.com</li>
              <li>📍 India</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Courier Portfolio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
