import Link from "next/link";
import Image from "next/image";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-50 to-white py-20">
      
      {/* Background Image (subtle, like Trackon) */}
      <div className="absolute right-0 top-0 h-full w-1/3 opacity-20 hidden md:block">
        <Image
          src="/images/courier-illustration.png"
          alt="Courier illustration"
          fill
          className="object-contain"
        />
      </div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Need a Reliable Courier Partner?
        </h2>

        <p className="mt-4 text-gray-600 text-lg">
          Contact us today and let us handle your delivery needs with trusted
          courier partners.
        </p>

        <Link
          href="/contact"
          className="inline-block mt-8 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md font-semibold transition shadow-md"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
}
