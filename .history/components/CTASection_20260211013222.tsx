import Link from "next/link";
import Image from "next/image";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-50 to-white py-20">
      
      {/* Background Illustration */}
      <div className="absolute right-0 top-0 h-full w-1/3 opacity-20 hidden md:block pointer-events-none">
        <Image
          src="/images/courier-illustration.png"
          alt="India Post mailing illustration"
          fill
          className="object-contain"
        />
      </div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto text-center px-6">
        <p className="text-sm font-semibold text-orange-500 uppercase tracking-wide">
          India Post Mailing Support
        </p>

        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
          Need Help with India Post
          <br className="hidden sm:block" /> Speed Post or Registered Mail?
        </h2>

        <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
          Get expert assistance for India Post mailing, document dispatch,
          and PAN India deliveries — handled with care and reliability.
        </p>

        {/* SINGLE CTA */}
        <Link
          href="/contact"
          className="
            inline-block mt-8
            bg-orange-500 text-white
            px-10 py-4 rounded-md
            text-base font-semibold
            hover:bg-orange-600 hover:scale-[1.04]
            transition-all shadow-lg
          "
        >
          Enquire for India Post Mailing
        </Link>
      </div>
    </section>
  );
}
