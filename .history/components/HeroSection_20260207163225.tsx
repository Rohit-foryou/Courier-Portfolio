import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Reliable <span className="text-blue-600">Courier & Logistics</span>{" "}
            Solutions
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            We act as a trusted middleman connecting you with the best courier
            partners, including India Post, to ensure fast, safe, and
            cost-effective deliveries.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-orange-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-orange-600 transition shadow-sm"
            >
              Request a Call Back
            </Link>

            <Link
              href="/services"
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-blue-50 transition"
            >
              View Services
            </Link>
          </div>
        </div>

        {/* Right Visual */}
        <div className="flex justify-center">
          <div className="w-full h-72 md:h-80 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 font-semibold text-lg">
            Courier / Delivery Illustration
          </div>
        </div>

      </div>
    </section>
  );
}
