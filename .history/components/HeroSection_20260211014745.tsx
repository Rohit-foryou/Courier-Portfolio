import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          <p className="text-sm font-semibold text-orange-500 uppercase tracking-wide">
            Authorized Post Office Franchise
          </p>

          <h1 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            Hassle-Free <span className="text-blue-600">India Post</span> Mailing
            <br />
            Without Queues or Confusion
          </h1>

          <p className="mt-5 text-lg text-gray-600 max-w-xl">
            Kamlesh Mailing is an authorized Post Office Franchise providing
            Speed Post, Registered Post, Parcel, and Bulk Mail services — helping
            law firms, banks, and businesses save time with professional
            assistance and PAN India reach.
          </p>

          {/* Trust Line (no CTA button) */}
          <p className="mt-6 text-sm text-gray-500">
            Preferred India Post franchise for organizations across Delhi NCR
          </p>
        </div>

        {/* Right Visual */}
        <div className="flex justify-center">
          <Image
            src="/images/Courier-illustration.png"
            alt="India Post Speed Post and registered mailing assistance"
            width={400}
            height={300}
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
