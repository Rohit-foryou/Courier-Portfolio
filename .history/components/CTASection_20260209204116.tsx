import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-blue-600 py-16 text-center text-white">
      <h2 className="text-3xl font-bold">
        Need a Reliable Courier Partner?
      </h2>

      <p className="mt-4 text-blue-100">
        Contact us today and let us handle your delivery needs.
      </p>

      <Link
        href="/contact"
        className="inline-block mt-6 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md font-semibold transition shadow-md"
      >
        Get in Touch
      </Link>
    </section>
  );
}
