import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          <p className="text-sm font-semibold text-orange-500 uppercase tracking-wide">
            Authorized Post Office Franchise
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Hassle-Free <span className="text-blue-600">India Post</span> Mailing
            <br /> Without Queues or Confusion
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            Kamlesh Mailing is an authorized Post Office Franchise providing
            Speed Post, Registered Post, Parcel, and Bulk Mail services —
            helping lawyers, banks, and businesses save time with professional
            assistance and PAN India reach.
          </p>

          {/* Single Primary CTA */}
          <div className="mt-8">
            <Link
              href="/contact"
              className="
                inline-block bg-orange-500 text-white
                px-8 py-4 rounded-md font-semibold
                hover:bg-orange-600 hover:scale-[1.03]
                transition-all shadow-md
              "
            >
              Book India Post Mailing
            </Link>
          </div>

          {/* Trust Signal */}
          <p className="mt-6 text-sm text-gray-500">
            Preferred India Post franchise for legal firms, banks & businesses across Delhi NCR
          </p>
        </div>

        {/* Right Visual */}
        <div className="flex justify-center">
          <Image
            src="/images/courier-illustration.png"
            alt="India Post Speed Post, Registered Post and bulk mailing assistance"
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
