import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand / About */}
          <div>
            <h3 className="text-xl font-bold text-blue-600">
              Kamlesh<span className="text-gray-900">Mailing</span>
            </h3>

            <p className="mt-4 text-gray-600 text-sm leading-relaxed">
              Specialists in India Post mailing services, including Speed Post,
              Registered Post, and document delivery across PAN India. We also
              coordinate private courier services when faster delivery is
              required.
            </p>

            <p className="mt-3 text-xs text-gray-500">
              Trusted for India Post mailing across Delhi NCR
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { name: "Home", href: "/" },
                { name: "Services", href: "/services" },
                { name: "Why Choose Us", href: "/why-choose-us" },
                { name: "Partners", href: "/partners" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="
                      text-gray-600
                      hover:text-blue-600
                      hover:underline
                      underline-offset-4
                      transition
                    "
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900">
              Contact
            </h4>
            <ul className="mt-4 space-y-2 text-gray-600 text-sm leading-relaxed">
              <li>📞 +91-8383866968 | 8076668043</li>
              <li>✉️ akhileshpr125@gmail.com</li>
              <li>
                📍 A - 44 A Mansa Ram Park, Uttam Nagar,
                <br />
                New Delhi - 110059, India
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
