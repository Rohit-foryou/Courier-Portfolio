import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand / About */}
          <div>
            <h3 className="text-xl font-bold text-blue-600">
  Vandana<span className="text-gray-900">Airways</span>
</h3>

            <p className="mt-4 text-gray-600 text-sm">
              We act as a trusted middleman connecting customers with reliable
              courier partners, including India Post, to deliver fast and
              cost-effective logistics solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-blue-600 transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-600 hover:text-blue-600 transition"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/why-choose-us"
                  className="text-gray-600 hover:text-blue-600 transition"
                >
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link
                  href="/partners"
                  className="text-gray-600 hover:text-blue-600 transition"
                >
                  Partners
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-blue-600 transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900">Contact</h4>
            <ul className="mt-4 space-y-2 text-gray-600 text-sm">
              <li>📞 +91-8383866968 | 8076668043</li>
              <li>✉️ akhileshpr125@gmail.com</li>
              <li>
                📍 A - 44 A Mansa Ram Park, Uttam Nagar, New Delhi - 110059, India
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Vandana Airways. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
