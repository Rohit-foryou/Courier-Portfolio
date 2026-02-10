import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          <p className="text-sm font-semibold text-orange-500 uppercase tracking-wide">
            India Post Mailing Specialists
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Reliable <span className="text-blue-600">India Post</span> Mailing
            <br /> & Document Delivery
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            We specialize in India Post mailing services including Speed Post,
            Registered Post, and Parcel delivery — ensuring secure, economical,
            and PAN India reach. Private courier services are coordinated when
            faster delivery is required.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-orange-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-orange-600 transition shadow-sm"
            >
              Enquire for India Post
            </Link>

            <Link
              href="/services"
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-blue-50 transition"
            >
              View Services
            </Link>
          </div>

          {/* Trust Signal */}
          <p className="mt-6 text-sm text-gray-500">
            Trusted for India Post mailing by individuals & businesses across Delhi NCR
          </p>
        </div>

        {/* Right Visual */}
        <div className="flex justify-center">
          <Image
            src="/images/courier-illustration.png"
            alt="India Post mailing and courier coordination illustration"
            width={420}
            height={320}
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
